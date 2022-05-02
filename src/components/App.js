import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App(name) {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About about={blogData.about}/>
      <ArticleList key={blogData.id} title={blogData.title} preview={blogData.preview} date={blogData.date} />
    </div>
  );
}

export default App;
