import FormRegister from "../assets/components/Fragments/FormRegister";
import AuthLayouts from "../assets/components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
