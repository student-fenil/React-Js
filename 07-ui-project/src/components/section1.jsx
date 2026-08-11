import React from "react";
import Navbar from "./navbar";
import Pagecontent from "./pagecontent";

const Section1 = () => {
  return (
    <div className="h-screen w-full bg-white">
      <Navbar />
      <Pagecontent />
    </div>
  );
};

export default Section1;