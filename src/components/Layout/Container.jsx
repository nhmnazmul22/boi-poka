import React from "react";

const Container = ({ children, classes }) => {
  return (
    <div className={`max-w-[1440px] md:w-10/12 mx-auto px-4 ${classes}`}>
      {children}
    </div>
  );
};

export default Container;
