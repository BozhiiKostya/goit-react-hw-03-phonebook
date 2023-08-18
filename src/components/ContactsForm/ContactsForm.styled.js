import { Form, ErrorMessage, Field } from 'formik';

const { styled } = require('styled-components');

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: auto;
`;

export const StyledLabel = styled.label`
  font-size: 20px;
`;
export const StyledError = styled(ErrorMessage)`
  margin-left: 10px;
  color: red;
`;
export const StyledField = styled(Field)`
  width: 250px;
  padding: 4px 10px;
  border-radius: 5px;
`;
export const StyledButton = styled.button`
  width: 273px;
  padding: 6px 30px;
  border-radius: 10px;
`;
