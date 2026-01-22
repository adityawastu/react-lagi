import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" type="email" placeholder="email@example.com" name="email" />
      <InputForm label="Password" type="password" placeholder="********" name="password" />
      <Button classname="bg-blue-800 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

const handleLogin = (event) => {
  event.preventDefault();
  localStorage.setItem("email", event.target.email.value);
  localStorage.setItem("password", event.target.password.value);
  window.location.href = "/products";
};

export default FormLogin;
