# youtube-autocomplete-search-box

## Installation

* `npm install youtube-autocomplete-search-box --save`

## Features

- Autocomplete text entry
- Search Youtube based on text input
- Drop-down list of search results
- Retrieve list of results from Youtube

## Usage

```js
<YoutubeSearchBox
	id={string}            // defaults -> #youtubeSearchBox
	placeHolder={string}   // defaults -> "Search Youtube"
	className={string}     // defaults -> random string
	callback={function}
/>
```

## Example

```js
import YoutubeSearchBox from 'YoutubeSearchBox';

class Example extends React.Component {
  render() {
    return (
      <YouTubeSearchBox
        placeHolder="Search Youtube"
        callback= this._onSearchResultsFound
      />
    );
  }

  _onSearchResultsFound(results) {
    // Results is an array of retreived search results
    // I use flux, so I dispatch results to an action to display a modal
    flux.actions.showSearchResults(results);
  }
}
```

# License
MIT




