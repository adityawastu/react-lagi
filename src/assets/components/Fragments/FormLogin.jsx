import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../../services/auth.service";

const FormLogin = () => {
  const usernameRef = useRef(null);
  const [loginFailed, setLoginFailed] = useState("");

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Username" type="text" placeholder="Wastu" name="username" ref={usernameRef} />
      <InputForm label="Password" type="password" placeholder="********" name="password" />
      <Button classname="bg-blue-800 w-full" type="submit">
        Login
      </Button>
      {loginFailed && <p className="text-red-700 text-center mt-2">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
