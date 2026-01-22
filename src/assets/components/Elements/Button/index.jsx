const Button = (props) => {
  const { children = "Default", classname = "bg-yellow-600" } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} type="submit">
      {children}
    </button>
  );
};

export default Button;
