import HeaderContext from "./styled";

const Header = () => {
    const date = new Date();


  return <HeaderContext>{date.toDateString()}</HeaderContext>;
};

export default Header;
