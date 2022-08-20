import NavBar from "./NavBar";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      {router.pathname === "/happyj" ? " " : <NavBar />}
      {children}
    </>
  );
}
