import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    //TODO: Make sure we call
    //callback from parent component
  };

  render() {
    return (
      <div className="seacrch-bar ui segment">
        {/* search-bar -> for curtom styling
    ui segment ->puts a nice rectangle */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            {/*make input element controlled element by making a state and mentioning in input tag where it's value comes from.
            if you do not out onChange handler in this, youwill not be able to change your value of input in browser.
            */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
