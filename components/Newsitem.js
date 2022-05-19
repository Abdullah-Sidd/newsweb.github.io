import React from "react";

const Newsitem = (props) => {
  let { title, description, imageurl, url, author, date } = props;
  return (
    <div className="card m-auto my-3 cards" style={{ width: "18rem" }}>
      <img
        src={
          imageurl
            ? imageurl
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIF_JvujHrMJmNAznyhlReM9gbm7SbFDgoKg&usqp=CAU"
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text">
          <small className="text-muted">
            By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
          </small>
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
