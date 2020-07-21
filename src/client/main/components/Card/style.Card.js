import style from 'styled-components';

export default style.div`
  position: relative;
  display: flex;
  flex-direction: colomn;
  justify-content: center;
  background: #F3DBC7;
  min-width: 236px;
  height: 495px;
  border-radius: 28px;
  margin-right: 33px;

  .edit {
    height: 535px;
    box-shadow: 0px 4px 15px #869CB0;
    width: 100%;
    border-radius: 28px;
    background: #F3DBC7;

    button {
      width: 129px;
      height: 39px;
      background: #567354;
      border-radius: 33px;
      margin: 0 auto;
      color: #fff;
      border: none;
      font-family: Roboto;
      font-weight: 500;
      font-size: 16px;

      :hover {
        cursor: pointer;
        background: #2d402b;
      }
    }

    input {
      border-radius: 35px;
      border: 1px solid;
      width: 120px;

      :focus {
        border-radius: 0;
      }
    }

    .name {
      width: 150px;
      margin-top: 20px;
    }

    .icon_img {
      margin: 14px;
    }

    .icon_input {
      margin-top: 14px;
      select, input {
        width: 50px;
        text-align: center;
      }
    }
  }

  .modal_icon {
    margin-top: 20px;
    text-align: end;
    color: #435F40;

    svg:hover {
      cursor: pointer;
    }
  }

  .modalBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    margin-left: 160px;
    margin-top: 40px;
    width: 174px;
    height: 94px;
    background: #668663;
    border-radius: 20px;
    color: #fff;
    z-index: 10;

    div {
      display: flex;
      width: 151px;
      height: 32px;
      margin-top: 10px;
      border-radius: 52px;
      color: #fff;
      
      svg {
        margin: 6px 10px;
      }

      p {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 0;
        text-align: center;
      }

      &:hover {
        cursor: pointer;
        background: #567354;
      }
    }
  }

  .photoCard {
    display: flex;
  }

  .photo {
    border-radius: 50%;
    margin: auto;
  }

  .name {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    color: #435F40;
  }

  .icon_img {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 12px;
    color: #435F40;
  }

  .icon_input {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 189px;
    height: 39px;
    left: 369px;
    background: #DCB18B;
    border-radius: 58px;

    span {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #333333;
    }
  }

  .description {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #435F40;
    margin: 19px 0;

    span {
      font-weight: 300;
      color: #333333;
    }
  }

  
`;
