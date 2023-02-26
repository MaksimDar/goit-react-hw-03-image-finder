import React from 'react';
import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    pictureName: '',
  };

  handleSubmit = pictureName => {
    this.setState({ pictureName });
  };

  render() {
    const { pictureName } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        {pictureName && <ImageGallery pictureName={pictureName} />}
      </>
    );
  }
}
export default App;
