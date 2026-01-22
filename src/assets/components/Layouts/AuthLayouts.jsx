import FormLogin from "../Fragments/FormLogin";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-2xl text-blue-800 font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500">Welcome, Please enter your details</p>
        {children}
        {/* <p className="mt-3 text-sm text-center">
          {type === "login" ? "Belum Punya Akun? " : "sudah punya akun? "}
          {type === "login" && (
            <Link to="/register" className="text-blue-800 font-bold">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="text-blue-800 font-bold">
              Login
            </Link>
          )}
        </p> */}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = (props) => {
  const { type } = props;
  if (type === "login") {
    return (
      <p className="mt-3 text-sm text-center">
        "Belum Punya Akun? "
        <Link to="/register" className="text-blue-800 font-bold">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-3 text-sm text-center">
        "sudah Punya Akun? "
        <Link to="/login" className="text-blue-800 font-bold">
          Login
        </Link>
      </p>
    );
  }
};
export default AuthLayouts;
