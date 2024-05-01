import React from "react";

const RootLayout = ({ children }) => {
  return (
    <main>
      Navbar
      {children}
      footer
    </main>
  );
};

export default RootLayout;
