import style from 'styled-components';

export default style.div`
  width: 1133px;
  height: 876px;
  background: #fff;
  border-radius: 25px;
  margin: auto;
  margin-left: 25px;
  padding-left: 50px; 
  padding-right: 40px; 
  display: block;
  position: relative;

  header {
    display: flex;
    justify-content: space-between;

    div {
      margin-top: 29px;
      margin-bottom: 11px;
      display: flex;

      ul {
        display: flex;
        list-style-type: none;
        margin: 0;
        padding-left: 0;

        li {
          font-family: Roboto;
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 19px;
          text-align: center;
          color: #D9D9D9;
          margin-right: 19px;
        }

        .active {
          color: #484848;
        }
      }

      svg {
        width: 20px;
        height: 20px;
        color: #D9D9D9;
        line-height: 0px;
      }

      img {
        width: 34px;
        height: 34px;
      }
    }
  }

  .headerName {
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    color: #567354;
    margin-top: 35px;
    margin-bottom: 26px;

    h1 {
      margin: 0;
      font-size: 32px;
      margin-right: 10px;
    }

    svg {
      font-size: 32px;

      &:hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
  }

  .cardBlock {
    display: flex;
    overflow-x: auto;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .info {
    position: fixed;
    width: 506px;
    height: 157px;
    background: #668663;
    border-radius: 28px 28px 0 0;
    padding: 22px 9px 30px 30px;
    right: 53px;
    position: absolute;
    bottom: 0;

    label {
      color: #fff;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      display: block;

      span {
        font-family: Roboto;
        font-style: normal;   
        font-weight: normal;
        font-size: 50px;
        line-height: 59px;
        margin: 22px 9px 30px;
      }
    }

    progress {
      width: 323px;
      height: 31px;
    }

    button {
      width: 110px;
      height: 31px;
      background: #435F40;
      border-radius: 35px;
      border: none;
      color: #fff;
      font-size: 12px;
      outline: none;

      &:hover {
        cursor: pointer;
        background: #2d402b;
      }
    }
  }
`;
