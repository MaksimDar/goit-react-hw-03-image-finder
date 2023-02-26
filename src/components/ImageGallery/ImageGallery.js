import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import { Component } from 'react';
import { ImageList, Container } from './ImageGallery.styled';
class ImageGallery extends Component {
  state = {
    pictures: [],
    totalPages: '',
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const lastName = prevProps.pictureName;
    const newName = this.props.pictureName;
    if (lastName !== newName) {
      try {
        const API = `https://pixabay.com/api/?q=${newName}&page=1&key=32407272-8586469b42e966f16f1a46a56&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.page}`;

        const response = await fetch(API);
        const responseJson = await response.json();
        const totalPages = Math.ceil(responseJson.totalHits / 12);
        const imagesArray = await responseJson.hits;

        this.setState({
          pictures: imagesArray.map(({ id, webformatURL, largeImageURL }) => ({
            id,
            webformatURL,
            largeImageURL,
          })),
          totalPages: totalPages,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { pictures } = this.state;
    return (
      <Container>
        <ImageList>
          {pictures.map(picture => (
            <ImageGalleryItem
              key={picture.id}
              image={picture.webformatURL}
              id={picture.id}
            />
          ))}
        </ImageList>
        <Button />
      </Container>
    );
  }
}
export default ImageGallery;
