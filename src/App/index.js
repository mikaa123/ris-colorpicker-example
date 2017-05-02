import React, { Component } from 'react';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch/dom';
import ColorPicker from '../ColorPicker';

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="latency"
        apiKey="6be0576ff61c053d5f9a3225e2a90f76"
        indexName="ikea"
      >
        <SearchBox />

        <div className="refinement-menu">
          <h2>Colors</h2>

          {/*
            To use the ColorPicker component, define the `attributeName`
            and provide a `colorMap`, which maps CSS classes to colors in the
            attribute.
            */}
          <ColorPicker
            attributeName="colors"
            colorMap={{
              'color--BLACK': 'Black',
              'color--WHITE': ['White'],
              'color--BLUE': 'Blue',
              'color--GREEN': 'Green',
              'color--RED': 'Red',
              'color--PINK': 'Pink'
            }}
          />
        </div>

        <Hits />
      </InstantSearch>
    );
  }
}

export default App;
