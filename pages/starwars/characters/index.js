import { useEffect, useState } from "react";
import StarWars from "..";
import DataTable from "./dataTable";

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
      <DataTable />
    </StarWars>
  );
};

export default Characters;
