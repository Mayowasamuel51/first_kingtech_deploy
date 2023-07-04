import React from "react";
import Navabr from "./Navabr";
const Admi_Layout = (Component) =>
  function Page() {
    return (
      <>
       <Navabr/>
        {/* <div> */}
          <Component />
   
      </>
    );
  };

export default Admi_Layout;