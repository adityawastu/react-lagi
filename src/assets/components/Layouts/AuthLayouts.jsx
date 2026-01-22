import FormLogin from "../Fragments/FormLogin";

const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-2xl text-blue-800 font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500">Welcome, Please enter your details</p>
        {children}
      </div>
    </div>
  );
};
export default AuthLayouts;
