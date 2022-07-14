import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        {/* putting classNAme in div gives it a container like boundary */}
        <SearchBar />
      </div>
    );
  }
}

export default App;
