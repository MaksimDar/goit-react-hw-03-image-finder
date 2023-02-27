import React from 'react';
import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { imageAPI } from './searchByAPI/API';

class App extends Component {
  state = {
    inputValue: '',
    pictures: [],
    currentPage: 1,
    totalPages: 0,
    picturesPerPage: 12,
  };
  async componentDidMount() {
    this.setState({ query: this.props.query });
  }

  async componentDidUpdate(_, prevState) {
    const { inputValue, currentPage, picturesPerPage } = this.state;

    if (
      prevState.inputValue !== inputValue ||
      prevState.currentPage !== currentPage
    ) {
      try {
        this.setState({ spinner: true });

        const data = await this.getPictures();

        const { hits, totalHits } = data;

        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...hits],
        }));

        if (currentPage === 1) {
          alert(`Wow! We found ${totalHits} pictures`);
          window.scroll(0, 0);
        }

        const totalPages = Math.ceil(totalHits / picturesPerPage);
        this.setState({ totalPages });

        if (totalPages > 1 || currentPage < totalPages)
          this.setState({ loadingMoreButtonVisibility: true });

        if (currentPage >= totalPages) {
          this.setState({ loadingMoreButtonVisibility: false });
          alert(
            `You have looked at all the countries in your query "${inputValue}". Please start your search from the beginning`
          );
        }
      } catch (e) {
        if (this.state.loadingMoreButtonVisibility === true)
          this.setState({ loadingMoreButtonVisibility: false });

        alert(e.message);
      }
    }
  }
  getPictures = async () => {
    this.setState({ spinner: true });
    try {
      return await imageAPI(
        this.state.inputValue,
        this.state.currentPage,
        this.state.picturesPerPage
        // this.updateState
      );
    } catch (e) {
      // this.updateState();
      throw new Error(e.message);
    } finally {
      this.setState({ spinner: false });
    }
  };

  handleSubmit = newQuery => {
    this.setState({ query: newQuery });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        {query && <ImageGallery query={query} />}
      </>
    );
  }
}
export default App;
