import FormLogin from "../assets/components/Fragments/FormLogin";
import AuthLayouts from "../assets/components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="mt-3 text-sm text-center">
        Tidak punya akun?{" "}
        <Link to="/register" className="text-blue-800 font-bold">
          Register
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
