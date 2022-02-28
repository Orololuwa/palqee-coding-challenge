import { createContext, useState } from "react";

const initialState = {
  isOpen: true,
  toggleSideDrawer: () => {}
};

const StoreContext = createContext(initialState);

export const StoreContextProvider = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(true);

  const toggleSideDrawer = () => {
    setShowSideDrawer((prev) => !prev);
  };

  return (
    <StoreContext.Provider
      value={{ isOpen: showSideDrawer, toggleSideDrawer: toggleSideDrawer }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
