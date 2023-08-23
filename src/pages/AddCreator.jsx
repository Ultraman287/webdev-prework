import { supabase } from "../client";

function AddCreator() {
  const addCreator = async (name, url, description, imageURL) => {
    const { data, error } = await supabase.from("creators").insert([
      {
        name: name,
        url: url,
        description: description,
        imageURL: imageURL,
      },
    ]);
    if (error) console.log("error", error);
    return data;
  };

  return (
    <div>
      <h1>Add Creator</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const name = event.target.name.value;
          const url = event.target.url.value;
          const description = event.target.description.value;
          const imageURL = event.target.imageURL.value;
          addCreator(name, url, description, imageURL).then((data) => {
            console.log(data);
            window.location.href = "/";
          });
        }}
      >
        <p>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" name="name" id="name" />
        </p>
        <p>
          <label htmlFor="url">URL</label>
          <br />
          <input type="text" name="url" id="url" />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <br />
          <input type="text" name="description" id="description" />
        </p>
        <p>
          <label htmlFor="imageURL">Image URL</label>
          <br />
          <input type="text" name="imageURL" id="imageURL" />
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          <a
            role="button"
            href="/"
            className="outline"
            style={{
              height: "60px",
            }}
          >
            Back to Home
          </a>
          <button type="submit">Add Creator</button>
        </div>
      </form>
    </div>
  );
}

export default AddCreator;
