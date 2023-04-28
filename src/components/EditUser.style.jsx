import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormStyle = styled(Form)`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  align-items: center;

  position: absolute;
  left: 250px;
  bottom: 0;
`;

export const FieldStyle = styled(Field)`
  outline: none;
  border: 1px solid green;
  border-radius: 10px;
  height: 30px;
  width: 235px;
`;

export const Btn = styled.button`
  background: darkblue;
  color: white;
  outline: none;
  border: 1px solid #60be60;
  border-radius: 10px;
  height: 30px;
  width: 100px;

  margin-left: 5px;

  &:hover {
    background-color: blue;
    color: white;
  }
`;
