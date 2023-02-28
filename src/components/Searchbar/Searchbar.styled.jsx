import styled from '@emotion/styled';

const FormBox = styled.header`
  display: flex;
  justify-content: center;
  gap: 2px;
  color: #fff;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  color: red;
  border-radius: 4px;
  border: 1px solid red;
  background-color: #ffd700;
`;
export { FormBox, FormButton };
