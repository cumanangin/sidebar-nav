import React from "react";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";

const App = () => {
  const isPhoneOrPc = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(true);
    console.log(showSidebar);
    if (showSidebar === true) {
      setShowSidebar(false);
      console.log(showSidebar);
    }
  };

  return (
    <div className="flex justify-center m-3 bg-blue-700">
      {isPhoneOrPc ? (
        <div className="py-2">
          <div className="flex justify-center hover:cursor-pointer">
            {showSidebar ? (
              <div>
                <div className="flex justify-center py-2">
                  <ImCancelCircle onClick={handleSidebar} />
                </div>
                <div className="grid justify-center py-3">
                  <ul className="grid grid-cols-1">
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">Popular</a>
                    </li>
                    <li>
                      <a href="">Kenapa</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <GiHamburgerMenu onClick={handleSidebar} />
            )}
          </div>
        </div>
      ) : (
        <ul className="flex gap-x-3">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Popular</a>
          </li>
          <li>
            <a href="">Kenapa</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default App;
