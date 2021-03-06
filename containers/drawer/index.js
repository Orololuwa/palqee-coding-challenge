import Backdrop from "components/backdrop";
import DrawerCtx from "./styled";
import propTypes from "prop-types";

const Drawer = (props) => {
  const { isOpen, onClose } = props;

  return (
    isOpen && (
      <>
        <Backdrop onConfirm={onClose} />
        <DrawerCtx {...props}>{props.children}</DrawerCtx>
      </>
    )
  );
};

Drawer.defaultProps = {
  placement: "left",
};

Drawer.propTypes = {
  isOpen: propTypes.bool.isRequired,
  onClose: propTypes.func,
  placement: propTypes.oneOf(["up", "down", "left", "right"]),
  className: propTypes.string,
};

export default Drawer;
