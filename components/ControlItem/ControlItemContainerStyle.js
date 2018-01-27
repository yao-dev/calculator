import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: 90px;
  cursor: pointer;
  color: #FFF;
  width: 75px;

  &:hover {
    background: ${(props) => props.type === 'number' && 'linear-gradient(to right, #232526, #414345)' || props.type === 'operator' && '#e05e8b'};

  &:active {
    background: linear-gradient(to right, #f2994a, #f2c94c);
  }
`;
