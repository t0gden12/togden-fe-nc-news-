import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";

class ArticlesList extends Component {
  state = {
    articles: [],
  };
  componentDidMount() {
    api.fetchArticles().then((articles) => {
      this.setState({ articles });
    });
  }
  render() {
    const { articles } = this.state;
    return (
      <main className="ArticleList">
        {articles.map(
          ({
            article_id,
            author,
            title,
            topic,
            votes,
            created_at,
            comment_count,
          }) => {
            return (
              <section className="ArticleCard" key={article_id}>
                <Link key={article_id} to={`/articles/${article_id}`}>
                  {title}
                </Link>
                <p>Author - {author}</p>
                <p>Topic - {topic}</p>
                <p>Votes - {votes}</p>
                <p>Created At - {created_at}</p>
                <p>Comments - {comment_count}</p>
              </section>
            );
          }
        )}
      </main>
    );
  }
}

export default ArticlesList;
