import { useContext } from "react";
import StoreContext from "context/storeContext";

const SideBar = () => {
  const ctx = useContext(StoreContext);

  return ctx.isOpen && <aside>...sidebar</aside>;
};

export default SideBar;
