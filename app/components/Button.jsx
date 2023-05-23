const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="rounded-lg bg-blue-400 p-4 text-white"
    >
      {label}
    </button>
  );
};

export default Button;
