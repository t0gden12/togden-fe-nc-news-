import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";

class NavBar extends Component {
  state = {
    topics: [],
  };
  componentDidMount() {
    api.fetchTopics().then((topics) => {
      this.setState({ topics });
    });
  }
  render() {
    const { topics } = this.state;
    return (
      <nav className="NavBar">
        <Link to={`/`}>Home</Link>

        {topics.map(({ slug, description }) => {
          return (
            <Link className="" key={slug} to={`/articles?topic=${slug}`}>
              {slug}
            </Link>
          );
        })}

        <Link to="/">Post New Article</Link>
      </nav>
    );
  }
}

export default NavBar;
