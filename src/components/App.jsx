import React from 'react';
import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

import { fetchImages } from './searchByAPI/API';

class App extends Component {
  state = {
    query: '',
    pictures: [],
    totalPages: null,
    page: 1,
  };
  async componentDidMount() {
    this.setState({ query: this.props.query });
  }

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query) {
      try {
        const response = await fetchImages(query, page);
        const totalPages = Math.ceil(response.totalHits / 12);
        const picturesArray = response.hits;
        this.setState({
          pictures: picturesArray.map(
            ({ id, webformatURL, largeImageURL }) => ({
              id,
              webformatURL,
              largeImageURL,
            })
          ),
          totalPages: totalPages,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  handleSubmit = newQuery => {
    this.setState({ query: newQuery });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        {query && <ImageGallery pictureName={query} />}
        <Button />
      </>
    );
  }
}
export default App;
