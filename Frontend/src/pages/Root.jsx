import { Outlet } from "react-router-dom";
import Navbar from "../assets/components/Navbar/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
