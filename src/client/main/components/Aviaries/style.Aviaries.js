import style from 'styled-components';

export default style.div`
  display: flex;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
