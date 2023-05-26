const Button = ({ label, type = "button", onClick }) => {
  return (
    <button
      type={type}
      title={label}
      onClick={() => onClick()}
      className="rounded-lg bg-blue-400 p-4 text-white"
    >
      {label}
    </button>
  );
};

export default Button;
