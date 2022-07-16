import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
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

  //since this id going to be a callback function, we make it an arrow function.
  //video object is what we retrieve from youtube api
  onVideoSelect = (video) => {
    console.log("From the AP!", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        {/* putting classNAme in div gives it a container like boundary */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/*name of the prop could be anything of our choice -> it has callback Function. */}
        {/*I have {this.state.videos.length} videos.*/}

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
              {/*we are passing video prop*/}
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
