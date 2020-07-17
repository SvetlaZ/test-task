import style from 'styled-components';

export default style.div`
  display: flex;
  width: 1440px;
  height: 900px;
  background: #668663;
  border-radius: 35px;

  ul {
    padding-left: 32px;
  }

  .farm_name {
    margin: 28px 0 55px 34px;
    display: flex;

    img {
      margin-right: 9px;
    }

    .farm_text {
      p {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        color: #fff;

        .farm_farm {
          font-weight: bold;
        }
      }
    }
  }

  .item {
    width: 237px;
    height: 51px;
    background: #567354;
    border-radius: 52px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 16px;
    text-align: center;
    color: #F3DBC7;
    display: flex;
    margin-top: 20px;
    margin-bottom: 30px;

    p {
      color: #fff;
    }

    svg {
      margin: auto 27px 18px;
    }
  }
  
  .choose {
    background: #fff;
    color: #567354;
    font-weight: 500;
    font-size: 19px;
    line-height: 12px;

    p {
      color: #567354;
    }
  }
`;
