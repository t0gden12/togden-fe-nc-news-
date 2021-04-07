import React, { Component } from "react";
import * as api from "../api";

class SingleArticle extends Component {
  state = {
    article: {},
  };

  componentDidMount() {
    api.fetchSingleArticle(this.props.article_id).then((article) => {
      console.log(article, "in single article");
      this.setState({ article });
    });
  }

  render() {
    const { article } = this.state;
    const {
      author,
      title,
      body,
      votes,
      topic,
      created_at,
      comment_count,
    } = article;
    return (
      <main>
        <h2>{title}</h2>
        <h3>Author - {author}</h3>
        <p>{body}</p>
      </main>
    );
  }
}

export default SingleArticle;
