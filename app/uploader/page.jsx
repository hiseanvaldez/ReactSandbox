"use client";

import { useEffect, useRef, useState } from "react";
import { BsTrash } from "react-icons/bs";
import Button from "../components/Button";
import Container from "../components/Container";
import { convertSizeUnit } from "../utils/imageUtils";

const Uploader = () => {
  const imageFormats = ["jpeg", "jpg", "png"];
  const maxFiles = 1;
  const inputRef = useRef(null);

  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState();
  const [imageBase64, setImageBase64] = useState();

  useEffect(() => {
    if (image === (null || undefined)) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = (e) => {
      setImageBase64(e.target.result);
    };
  }, [image]);

  const handleEvents = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClick = () => {
    setError("");
    inputRef.current?.click();
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

  const handleDrop = (e) => {
    handleEvents(e);
    setDragging(false);
    setError("");

    const validFile = validateFiles([...e.dataTransfer.files]);

    if (error) {
      return;
    }
    setImage(validFile);
  };

  const handleFileChange = (e) => {
    if (!e.target.files) {
      return;
    }

    const validFile = validateFiles([...e.target.files]);

    if (error) {
      return;
    }
    setImage(validFile);
  };

  const validateFiles = (files) => {
    if (maxFiles && maxFiles < files.length) {
      setError(
        `Only ${maxFiles} file${
          maxFiles !== 1 ? "s" : ""
        } can be uploaded at a time.`
      );
      return;
    }

    if (
      !imageFormats.some((format) =>
        files[0].name.toLowerCase().endsWith(format.toLowerCase())
      )
    ) {
      setError(
        `Only following file formats are acceptable: ${imageFormats.join(", ")}`
      );
      return;
    }

    if (files[0].size > 5242880) {
      setError(`Image exceeds 5MB.`);
      return;
    }

    return files[0];
  };

  return (
    <Container>
      <input
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />
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
        <p>Drag your image here.</p>
        <p>or</p>
        <Button label="Select a file" onClick={handleClick} />
      </div>
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
              <BsTrash size={20} color="red" />
            </button>
            <p>{image?.name}</p>
            <p>{convertSizeUnit(image?.size)}</p>
          </div>
          {imageBase64 && (
            <div
              className="
              flex
              w-[480px]
            "
            >
              <img alt="image" src={imageBase64} className="w[480px]" />
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default Uploader;
