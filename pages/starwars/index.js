import BreadCrumbs from "containers/breadcrumbs";

const StarWars = (props) => {
  return (
    <div>
      <BreadCrumbs />
      <div>{props.children}</div>
    </div>
  );
};

export default StarWars;
