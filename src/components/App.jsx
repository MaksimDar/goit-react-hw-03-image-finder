import React from 'react';
import { Component } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from 'components/ImageGallery';

class App extends Component {
  state = {};
  componentDidMount() {
    fetch(
      `https://pixabay.com/api/?q=cat&page=1&key=32407272-8586469b42e966f16f1a46a56&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json)
      .then(console.log);
  }
  render() {
    return (
      <>
        <SearchBar />
        <ImageGallery />
      </>
    );
  }
}
export default App;
