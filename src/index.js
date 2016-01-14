import React from 'react';
import Promise from 'promise';
import JSONP from 'jsonp';
import Typeahead from 'react-typeahead-component';

const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';

export default React.createClass({

  getInitialState() {
    return {
      inputValue: ''
    };
  },

  handleChange() {
    var query = event.target.value;
    
    debugger;
    
    return new Promise(function(resolve, reject) {
        var result = cache[query], url;

        url = googleAutoSuggestURL + query;
        
        debugger;

        JSONP(url, function(error, data) {
            if (error) {
                reject(error);
            } else {
                result = data[1].map(function(datum) {
                    return datum[0];
                });

                cache[query] = result;

                resolve(result);
            }
        });

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
