import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import AuthLinks from "./UI/AuthLinks";
import UserHeader from "./UI/UserHeader";

function AuthSection() {
  const { userData, isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return <AuthLinks />;
  } else {
    return (
      <UserHeader
        username={userData.displayName}
        photoURL={userData.photoURL}
      />
    );
  }
}

export default AuthSection;
