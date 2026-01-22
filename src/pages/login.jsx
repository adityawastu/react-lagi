import FormLogin from "../assets/components/Fragments/FormLogin";
import AuthLayouts from "../assets/components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
