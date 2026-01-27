/* eslint-disable no-unused-vars */
import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div>
      Profile
      <h2>halo {username}</h2>
    </div>
  );
};

export default ProfilePage;
