import React from "react";

import "./index.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
/*import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import SocialLinks from "./components/SocialLinks";*/
//import Menu from "./components/Menu";

const App: React.FC = () => {
  return (
    <>
      <div className="bg-red-900"></div>
      <Menu onClose={() => console.log("Menu closed")} />
      <Header />
    </>
  );
};

export default App;
