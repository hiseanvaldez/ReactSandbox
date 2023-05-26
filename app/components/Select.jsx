"use client";

import { useEffect, useRef, useState } from "react";
import { MdInfo } from "react-icons/md";

const Select = ({
  name,
  label,
  options,
  value,
  errors,
  touched,
  required,
  onBlur,
  onSelect,
}) => {
  const selectedValue = options.find((option) => value === option.label) || {
    label: "",
    value: "",
  };

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleEscape = (e) => {
    if (e.key === "Escape") {
      ref.current.blur();
      setIsOpen(false);
    }
  };

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleSelect = (selectedValue) => {
    onSelect(selectedValue);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div
      className={`
      flex
      w-full
      flex-col
      ${label ? "my-3" : "my-0"}
    `}
      onBlur={onBlur}
    >
      {label && (
        <label
          htmlFor={name}
          className={`mb-2 text-sm ${
            required
              ? "after:content-[" * "] after:ml-0.5 after:text-red-500"
              : ""
          }`}
        >
          {label}
        </label>
      )}
      <div ref={ref} className="relative flex flex-col">
        <button
          type="button"
          className={`
            flex
            h-[50px]
            items-center
            justify-between
            rounded
            border-[1px]
            px-4
            py-3.5
            text-sm
            text-slate-700
            focus:outline-blue-500
            disabled:cursor-not-allowed
            disabled:opacity-70
            ${
              touched[name] && errors[name]
                ? "border-red-500"
                : "border-gray-400"
            }
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="truncate">
            {selectedValue.label || "Select an option"}
          </p>
        </button>
        {isOpen && (
          <div
            className={`
              absolute
              top-14
              z-10
              flex
              max-h-[300px]
              w-full
              flex-col
              overflow-auto
              rounded
              border-[1px]
              border-gray-400
              bg-white
              shadow-lg

            `}
          >
            {options.map((option) => (
              <div
                key={option.value}
                className={`
                  flex
                  flex-row
                  justify-between
                  border-b-[1px]
                  border-gray-400
                  px-3
                  py-3
                  text-sm
                  text-gray-700
                  last:border-b-0
                  hover:bg-yellow-500
                  ${selectedValue === option ? "font-bold" : "font-normal"}
                `}
                onMouseDown={() => {
                  setIsOpen(false);
                  handleSelect(option);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {touched[name] && errors[name] && (
        <div className="mb-2 flex items-center gap-1 text-sm text-red-500">
          <MdInfo />
          {errors[name]}
        </div>
      )}
    </div>
  );
};

export default Select;
