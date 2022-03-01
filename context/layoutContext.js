import { createContext, useState } from "react";

const initialState = {
  isOpen: true,
  toggleSideDrawer: () => {},
};

const LayoutContext = createContext(initialState);

export const LayoutContextProvider = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(true);

  const toggleSideDrawer = () => {
    setShowSideDrawer((prev) => !prev);
  };

  return (
    <LayoutContext.Provider
      value={{ isOpen: showSideDrawer, toggleSideDrawer: toggleSideDrawer }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
