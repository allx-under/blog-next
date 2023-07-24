import React from "react";

const MainContainerWithBg = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(https://img.freepik.com/free-photo/office-table-with-cup-coffee-keyboard-notepad_1220-4584.jpg?w=1800&t=st=1686732973~exp=1686733573~hmac=744db9c05d943c7693bd95671a5f1c74290d46bb36dac86ec833021dcffb7f37)",
      }}
      className="bg-center bg-cover bg-no-repeat bg-fixed overflow-x-hidden w-screen h-screen relative"
    >
      {children}
    </div>
  );
};

export default MainContainerWithBg;
