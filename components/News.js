import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    category: "general",
  };

  static proptypes = {
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=da9096c47fb9412c9a425700ec8d7433`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <>
        <div className="container my-4">
          <h2 className="text-center pt-5 h2">
            Welcome To The Citizen{" "}
            <span className="color">{this.capitalizeFirstLetter(this.props.category)}</span> News.
          </h2>

          <div className="row  gy-3">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4"key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    imageurl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
