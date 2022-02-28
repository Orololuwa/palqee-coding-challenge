import { useContext } from "react";
import StoreContext from "context/storeContext";
import { IoMenuOutline } from "react-icons/io5";
import Drawer from "containers/drawer";

const Header = () => {
  const ctx = useContext(StoreContext);
  const date = new Date();

  return (
    <>
      <header>
        <IoMenuOutline
          size={25}
          className="menuIcon"
          onClick={ctx.toggleSideDrawer}
        />
        <p>{date.toDateString()}</p>
      </header>
    </>
  );
};

export default Header;
