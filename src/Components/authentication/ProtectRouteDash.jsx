import { Outlet, useNavigate } from "react-router-dom";

export default function ProtectRouteDash() {
  const user = "ahmed";
  const navigate = useNavigate();

  return !user ? <Outlet /> : navigate("dashboard");
}
