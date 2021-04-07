import "./App.css";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
// import ErrorHandler from "./components/ErrorHandler";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Router className="content">
        <ArticlesList path="/articles" />
        <SingleArticle path="/articles/:article_id" />
        {/* <SingleArticle />
      <ErrorHandler
        default
        status={404}
        msg={`Oh no, That path is not found`}
      /> */}
      </Router>
    </div>
  );
}

export default App;
