import React, { Component } from "react";

export class NewsItem extends Component {
  constructor() {
    super();
  }
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://dims.apnews.com/dims4/default/69246ff/2147483647/strip/true/crop/8080x4545+0+421/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fbc%2F5d%2F4664a091c2945ff5ce8762837844%2F04b4aef4ed3b421896222fbff32e2a42"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
