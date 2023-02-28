import { LoaderStyled } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderStyled role="alert">
      <button color="#00BFFF" height={80} width={100} />
      Завантажуємо...
    </LoaderStyled>
  );
}
