const Button = ({ label, type = "button", onClick, disabled }) => {
  return (
    <button
      type={type}
      title={label}
      onClick={() => onClick()}
      className={`h-[50px] rounded-lg p-4 text-white ${
        disabled ? "cursor-not-allowed bg-gray-200" : "bg-blue-400"
      }`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
