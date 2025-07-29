import { useState } from "react";

import Sidebar from "./Sidebar"
import Hero from "./Hero"
import Menu from "./Menu"

function App() {
  const [menuOpen, setMenuOpen] = useState(false); // shared state with toggle menu

  return (
    <>
    <Sidebar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
    <Menu menuOpen={menuOpen} />
    <Hero />
  </>
  );
}

export default App
