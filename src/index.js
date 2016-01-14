import React from 'react';
import JSONP from 'jsonp';
import Typeahead from 'react-typeahead-component';

const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';

export default React.createClass({

  getInitialState() {
    return {
      inputValue: ''
    };
  },

  handleChange(event) {
    var query = event.target.value;
    var url = googleAutoSuggestURL + query;

    JSONP(url, function(error, data) {
      if (error) {
          reject(error);
      } else {

      }
    });
  },

  render() {
    return <div>
      <Typeahead
        inputValue={this.state.inputValue}
        options={this.state.options}
        placeholder='Search'
        onChange={this.handleChange}
      />
      <h2>Welcome to React components</h2>
    </div>
  }
})
