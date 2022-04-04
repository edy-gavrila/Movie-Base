import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import MenuLink from "../UI/MenuLink";
import MenuButton from "./MenuButton";

function AuthLinks() {
  const { onSetGuestMode } = useContext(AuthContext);
  return (
    <ul className="flex items-center">
      <li>
        <MenuButton action={onSetGuestMode}>{"Guest Mode"}</MenuButton>
      </li>
      <li>
        <MenuLink path={"/login"}>{"Login"}</MenuLink>
      </li>
    </ul>
  );
}

export default AuthLinks;
