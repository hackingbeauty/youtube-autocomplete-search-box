import React from 'react';

export default React.createClass({
  render: function() {
    var searchResult = this.props.data[0];
    debugger;
    return (
        <div>{searchResult}</div>
    );
  }
});