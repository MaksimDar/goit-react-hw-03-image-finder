import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import { ImageList, Container } from './ImageGallery.styled';

const ImageGallery = ({ pictures }) => {
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
    </Container>
  );
};

export default ImageGallery;
