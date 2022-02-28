import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import Drawer from "containers/drawer";

const Header = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const toggleSideDrawerShow = (val) => {
    setShowSideDrawer(val);
  };

  const date = new Date();

  return (
    <>
      <header>
        <IoMenuOutline
          size={25}
          className="menuIcon"
          onClick={() => toggleSideDrawerShow(true)}
        />
        <p>{date.toDateString()}</p>
      </header>

      <Drawer
        className="drawer"
        isOpen={showSideDrawer}
        onClose={() => toggleSideDrawerShow(false)}
      >
        ...side-
      </Drawer>
    </>
  );
};

export default Header;
