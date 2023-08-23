import { useParams } from "react-router-dom";
import { supabase } from "../client";
import { useEffect, useState } from "react";

function EditCreator() {
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

  const updateCreator = async (id, name, url, description, imageURL) => {
    const { data, error } = await supabase
      .from("creators")
      .update({
        name: name,
        url: url,
        description: description,
        imageURL: imageURL,
      })
      .eq("id", id);
    if (error) console.log("error", error);
    return data;
  };

  const deleteCreator = async (id) => {
    const { data, error } = await supabase
      .from("creators")
      .delete()
      .eq("id", id);
    if (error) console.log("error", error);
    return data;
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Edit Creator
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            defaultValue={creator.name}
            onChange={(e) => setCreator({ ...creator, name: e.target.value })}
          />
        </p>
        <p>
          <label htmlFor="url">URL</label>
          <input
            type="text"
            id="url"
            defaultValue={creator.url}
            onChange={(e) => setCreator({ ...creator, url: e.target.value })}
          />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            defaultValue={creator.description}
            onChange={(e) =>
              setCreator({ ...creator, description: e.target.value })
            }
          />
        </p>
        <p>
          <label htmlFor="imageURL">Image URL</label>
          <input
            type="text"
            id="imageURL"
            defaultValue={creator.imageURL}
            onChange={(e) =>
              setCreator({ ...creator, imageURL: e.target.value })
            }
          />
        </p>
        <div className="grid">
          <a role="button" href="/" className="outline">
            Back to Home
          </a>
          <a
            role="button"
            href="#"
            onClick={() =>
              updateCreator(
                creator.id,
                creator.name,
                creator.url,
                creator.description,
                creator.imageURL
              ).then((data) => {
                console.log(data);
                window.location.href = `/`;
              })
            }
          >
            Update Creator
          </a>
          <a
            role="button"
            href="#"
            onClick={() =>
              deleteCreator(creator.id).then((data) => {
                console.log(data);
                window.location.href = "/";
              })
            }
            className="secondary"
          >
            Delete Creator
          </a>
        </div>
      </form>
    </div>
  );
}

export default EditCreator;
