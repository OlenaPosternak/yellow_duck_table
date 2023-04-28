import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormStyle = styled(Form)`
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const FieldStyle = styled(Field)`
  outline: none;
  border: 1px solid green;
  border-radius: 10px;
  height: 30px;
  width: 240px;
`;

export const Btn = styled.button`
  background: #60be60;
  outline: none;
  border: 1px solid #60be60;
  border-radius: 10px;
  height: 35px;
  width: 100px;

  &:hover {
    background-color: darkgreen;
    color: white;
  }
`;
