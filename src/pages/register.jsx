import FormRegister from "../assets/components/Fragments/FormRegister";
import AuthLayouts from "../assets/components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="mt-3 text-sm text-center">
        Sudah punya akun?{" "}
        <Link to="/login" className="text-blue-800 font-bold">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
