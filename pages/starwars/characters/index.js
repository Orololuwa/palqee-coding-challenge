import { useEffect, useState } from "react";
import StarWars from "..";
import { gql, useQuery } from "@apollo/client";

const ALL_CHARACTERS = gql`
  {
    allPeople {
      people {
        name
        hairColor
        skinColor
        eyeColor
        gender
        homeworld {
          name
        }
      }
    }
  }
`;

const Characters = () => {
  const { loading, error, data } = useQuery(ALL_CHARACTERS);

  console.log(data);

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
