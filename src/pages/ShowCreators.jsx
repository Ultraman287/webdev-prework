import { useEffect, useState } from "react";
import Creator from "../components/Creator";
import { supabase } from "../client";

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      let { data: creators, error } = await supabase
        .from("creators")
        .select("*");
      if (error) console.log("error", error);
      return creators;
    };
    fetchCreators().then((creators) => setCreators(creators));
  }, []);

  const creator_list = creators.map((creator) => (
    <Creator
      key={creator.id}
      name={creator.name}
      url={creator.url}
      description={creator.description}
      imageURL={creator.imageURL}
      id={creator.id}
      show={false}
    />
  ));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Creatorverse Showcase
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {creator_list}
        </div>
      </div>
      <button
        onClick={() => (window.location.href = "/add")}
        style={{
          maxWidth: "300px",
          alignSelf: "center",
        }}
      >
        Add Creator
      </button>
    </div>
  );
}

export default ShowCreators;
