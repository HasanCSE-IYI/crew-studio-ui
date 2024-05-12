import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white border-b p-4">
      <div>Logo</div>
      <nav>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
