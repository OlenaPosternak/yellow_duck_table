import styled from '@emotion/styled';

export const Tr = styled.tr`
  border: 1px solid green;

  display: flex;
  width: 1000px;
  justify-content: space-around;
`;

export const ThWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 248px;
  border-right: 1px solid green;
`;

export const Table = styled.table`
  table-layout: fixed;
  width: 1004px;
  border-collapse: collapse;
  border: 2px solid green;
`;

export const Btn = styled.button`
  background: #60be60;
  outline: none;
  border: 1px solid #60be60;
  border-radius: 10px;
  height: 20px;
  margin-top: 5px;

  &:hover {
    background-color: darkgreen;
    color: white;
  }
`;

export const Cell = styled.div`
  display: inline-block;

  flex-direction: column;
  justify-content: center;
  width: 249px;
  border-right: 1px solid green;
  height: 60px;
`;

export const CellWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  right: -100px;
  display: flex;
  gap: 5px;
`;
