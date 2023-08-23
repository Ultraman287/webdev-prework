import { useParams } from "react-router-dom";
import { supabase } from "../client";
import { useEffect, useState } from "react";

function ViewCreator() {
  let { id } = useParams();
  const [creator, setCreator] = useState({});

  useEffect(() => {
    const fetchCreator = async () => {
      let { data: creator, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();
      if (error) console.log("error", error);
      return creator;
    };
    fetchCreator().then((creator) => setCreator(creator));
  }, [id]);

  const addImageFallback = (event) => {
    event.target.src =
      "https://mlaejpiyzmlm.i.optimole.com/w:176/h:176/q:mauto/rt:fill/g:ce/f:avif/https://kookoobar.com/wp-content/uploads/woocommerce-placeholder.png";
  };

  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div>
        <h1
          style={{
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          View Creator
        </h1>
        <article
          style={{
            maxWidth: "800px",
            borderRadius: "20px",
          }}
        >
          <header>
            <img src={creator.imageURL} alt="Lion" onError={addImageFallback} />
          </header>
          <h2>{creator.name}</h2>
          <h3>
            That you can find at <a href={creator.url}>{creator.url}</a>
          </h3>
          <footer>
            <p>{creator.description}</p>
          </footer>
        </article>
        <a role="button" href="/" className="outline">
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default ViewCreator;
