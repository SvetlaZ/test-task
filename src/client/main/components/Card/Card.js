import React, { useState, useCallback } from 'react';
import motilda from './images/motilda.png';
import StyleCard from './style.Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import { faRulerVertical } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const classNames = require('classnames');
const girafes = [
  {
    name: 'Мотильда',
    avatar: 'image/f1926aba2300fda67144c2cd9b71755c.jpg',
    sex: 'Ж',
    weight: 800,
    height: 4,
    color: 'Стандартный',
    dieta: 'Растительная',
    character: 'Кокетка',
  },
];

const Card = () => {
  const [isModal, setIsModal] = useState(false);

  const onModalHandler = useCallback((isMod) => {
    setIsModal(!isMod);
  }, []);


  return (
    <StyleCard>
      <div>
        <div className="modal_icon" onClick={() => { onModalHandler(isModal) }} >
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>

        {isModal ? (
          <div className="modalBlock">
            <div>
              <FontAwesomeIcon icon={faPencilAlt} />
              <p>Редактировать</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faTrashAlt} />
              <p>Удалить</p>
            </div>
          </div>
        )
          : false}

        <div className="photoCard">
          {/* <img src={girafes[0].avatar} alt="motilda" className="photo" /> */}
          <img src={motilda} alt="motilda" className="photo" />
        </div>
        <p className="name">{girafes[0].name}</p>
        <div className="icon_img">
          <FontAwesomeIcon icon={faVenusMars} />
          <FontAwesomeIcon icon={faBalanceScale} />
          <FontAwesomeIcon icon={faRulerVertical} />
        </div>
        <div className="icon_input">
          <span>{girafes[0].sex}</span>
          <span>{girafes[0].weight}</span>
          <span>{girafes[0].height}</span>
        </div>
        <p className="description">Цвет: <span>{girafes[0].color}</span></p>
        <p className="description">Диета: <span>{girafes[0].dieta}</span></p>
        <p className="description">Характер: <span>{girafes[0].character}</span></p>
      </div>
    </StyleCard>
  )
};

export default Card;
