import React from 'react';
import JSONP from 'jsonp';
import Typeahead from 'react-typeahead-component';
import OptionsTemplate from './OptionsTemplate.jsx'

const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';

export default React.createClass({

  getInitialState() {
    return {
      inputValue: ''
    };
  },

  handleChange(event) {
    var self = this;
    var query = event.target.value;
    var url = googleAutoSuggestURL + query;

    this.setState({
      inputValue: query
    });

    JSONP(url, function(error, data) {
      if (error) {
          reject(error);
      } else {
        var searchResults = data[1];

        self.setState({
          options: searchResults
        });

        debugger;
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
        optionTemplate={OptionsTemplate}
      />
      <h2>Welcome to React components</h2>
    </div>
  }
})
