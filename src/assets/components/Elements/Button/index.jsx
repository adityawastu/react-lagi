const Button = (props) => {
  const { children = "Default", classname = "bg-yellow-600", onClick = () => {}, type = "button" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white hover:bg-blue-900`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
