"use client";

import { useState } from "react";
import { BsDownload, BsTrash } from "react-icons/bs";
import Button from "../components/Button";
import Container from "../components/Container";
import { convertSizeUnit } from "../utils/imageUtils";

const Uploader = () => {
  const imageFormats = ["jpeg", "jpg", "png"];
  const maxFiles = 1;

  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState();
  const [imageBase64, setImageBase64] = useState();

  const handleEvents = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClick = () => {
    setError("");
    document.getElementById("fileInput").click();
  };

  const handleDragEnter = (e) => {
    handleEvents(e);
    setDragging(true);
    setError("");
  };

  const handleDragLeave = (e) => {
    handleEvents(e);
    setDragging(false);
    setError("");
  };

  const handleDragOver = (e) => {
    handleEvents(e);
    setDragging(true);
    setError("");
  };

  const getBase64 = (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = (e) => {
      setImageBase64(e.target.result);
    };
  };

  const handleDrop = (e) => {
    handleEvents(e);
    setDragging(false);
    setError("");

    if (!validateFiles([...e.dataTransfer.files])) {
      return;
    }

    setImage(e.dataTransfer.files[0]);
    getBase64(e.dataTransfer.files[0]);
  };

  const handleFileChange = (e) => {
    if (!e.target.files) {
      return;
    }

    if (!validateFiles([...e.target.files])) {
      return;
    }

    setImage(e.target.files[0]);
    getBase64(e.target.files[0]);
  };

  const validateFiles = (files) => {
    if (maxFiles && maxFiles < files.length) {
      setError(
        `Only ${maxFiles} file${
          maxFiles !== 1 ? "s" : ""
        } can be uploaded at a time.`
      );
      return false;
    }

    if (
      !imageFormats.some((format) =>
        files[0].name.toLowerCase().endsWith(format.toLowerCase())
      )
    ) {
      setError(
        `Only following file formats are acceptable: ${imageFormats.join(", ")}`
      );
      return false;
    }

    if (files[0].size > 5242880) {
      setError(`Image exceeds 5MB.`);
      return false;
    }

    return true;
  };

  return (
    <Container>
      <input
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        className="hidden"
        accept="image/jpeg, image/png"
      />
      {image ? (
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="image"
            src={URL.createObjectURL(image)}
            className="
              w[480px] 
              flex
              h-80
              w-[480px]
              rounded-lg
              object-cover
            "
          />
        </div>
      ) : (
        <div
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
          flex
          h-80
          w-[480px]
          flex-col
          items-center
          justify-center
          gap-4
          rounded-lg
          border-2
          border-dashed
          ${dragging && "bg-blue-300/70"}
          ${error ? "border-red-600" : "border-blue-600"}
        `}
        >
          <BsDownload size={40} />
          <p>Drag your image here.</p>
          <p>or</p>
          <Button label="Select a file" onClick={handleClick} />
        </div>
      )}
      {error && <p className="text-red-600">{error}</p>}
      {image && (
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            <button
              onClick={() => {
                setImage();
                setImageBase64();
              }}
            >
              <BsTrash size={24} color="red" />
            </button>
            <p>{image?.name}</p>
            <p>({convertSizeUnit(image?.size)})</p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Uploader;
