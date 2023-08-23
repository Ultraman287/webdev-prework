import PropTypes from "prop-types";

function Creator(props) {
  const viewCreator = () => {
    window.location.href = `/view/${props.id}`;
  };

  const addImageFallback = (event) => {
    event.target.src =
      "https://mlaejpiyzmlm.i.optimole.com/w:176/h:176/q:mauto/rt:fill/g:ce/f:avif/https://kookoobar.com/wp-content/uploads/woocommerce-placeholder.png";
  };

  return (
    <article
      style={{
        maxWidth: "300px",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={props.imageURL} alt="Lion" onError={addImageFallback} />
      </header>
      <div className="grid">
        <div onClick={viewCreator}>
          <a href="#" role="button">
            View
          </a>
        </div>
        <div onClick={() => (window.location.href = `/edit/${props.id}`)}>
          <a href="#" role="button">
            Edit
          </a>
        </div>
      </div>
    </article>
  );
}

Creator.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  id: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Creator;
