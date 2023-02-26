const ImageGalleryItem = ({ id, image }) => {
  return (
    <li key={id}>
      <img id={id} src={image} width="360px" height="360px" alt="" />
    </li>
  );
};
export default ImageGalleryItem;
