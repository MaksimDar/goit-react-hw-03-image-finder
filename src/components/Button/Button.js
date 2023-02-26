import { MorePhotos, LoadMoreButton } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <MorePhotos>
      <LoadMoreButton onClick={onClick}>Load More</LoadMoreButton>
    </MorePhotos>
  );
};
export default Button;
