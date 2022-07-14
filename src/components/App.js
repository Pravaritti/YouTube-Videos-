import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    console.log(term);

    //fetch list of videos from API
    // making a request is an asynchronous operation so we interact with it eitehr using promises or async wait syntax
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    console.log(response); //entire response object that has ton of information about the request that was just made.
    //response -> data -> items = list of videos we are interested in
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        {/* putting classNAme in div gives it a container like boundary */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/*name of the prop could be anything of our choice -> it has callback Function. */}
        I have {this.state.videos.length} videos.
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
