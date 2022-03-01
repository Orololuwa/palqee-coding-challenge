import { useEffect, useState } from "react";
import StarWars from "..";

const Characters = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
      .then((response) => response.json())
      .then((data) => setQuote(data.content));
  }, []);
  return (
    <StarWars>
      <h5>Characters</h5>
      <p>{quote}</p>
      datatable
    </StarWars>
  );
};

export default Characters;
