import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  onTermSubmit = (term) => {
    console.log(term);
    youtube.get("/search", {
      params: {
        q: term,
      },
    });
  };

  render() {
    return (
      <div className="ui container">
        {/* putting classNAme in div gives it a container like boundary */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/*name of the prop could be anything of our choice -> it has callback Function. */}
      </div>
    );
  }
}

export default App;
