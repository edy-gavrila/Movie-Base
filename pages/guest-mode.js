import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";

function GuestMode() {
  const router = useRouter();
  const { onSetGuestMode } = useContext(AuthContext);
  useEffect(() => {
    onSetGuestMode();
    router.replace("/");
  }, [onSetGuestMode, router]);
  return null;
}

export default GuestMode;
