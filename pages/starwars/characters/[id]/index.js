import { client } from "pages/_app";
import { gql } from "@apollo/client";
import StarWars from "pages/starwars";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CharacterDetails = ({ id }) => {
  const router = useRouter();

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
  }, [router.pathname]);

  return (
    <StarWars>
      <h5>Characters</h5>
      <q style={{ color: "Highlight" }}>
        {loading ? "Loading Quote..." : error ? "Error Loading Quote" : quote}
      </q>
      <div>&nbsp;</div>
    </StarWars>
  );
};

export default CharacterDetails;

export const getStaticPaths = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query {
          allPeople {
            people {
              id
            }
          }
        }
      `,
    });

    const paths = data.allPeople.people.map((charac) => ({
      params: {
        id: charac.id.toString(),
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    return {
      props: {
        id: params.id,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
