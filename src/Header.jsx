import { useState } from "react";
import Sidebar from "./Sidebar";
import Menu from "./Menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // shared state with toggle menu

  return (
    <>
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
