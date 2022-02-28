import BreadCrumbs from "containers/breadcrumbs";
import { useEffect, useState } from "react";

const StarWars = (props) => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
      .then((response) => response.json())
      .then((data) => setQuote(data.content));
  }, []);

  return (
    <div>
      <BreadCrumbs />
      <h5>Characters</h5>
      <p>{quote}</p>
      <div>{props.children}</div>
    </div>
  );
};

export default StarWars;
