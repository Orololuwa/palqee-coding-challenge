import { useEffect, useState } from "react";
import StarWars from "..";
import DataTable from "./dataTable";

const Characters = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, []);

  return (
    <StarWars>
      <h5>Characters</h5>
      <p style={{ marginBottom: "10px" }}>
        {loading ? "Loading Quote..." : error ? "Error Loading Quote" : quote}
      </p>
      <DataTable />
    </StarWars>
  );
};

export default Characters;
