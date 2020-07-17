import React, { useState, useCallback } from 'react';
import StyleCard from './style.Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import { faRulerVertical } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const classNames = require('classnames');

const Card = ({
  src,
  name,
  sex,
  weight,
  height,
  color,
  dieta,
  character,
  onDelete
}) => {
  const [isModal, setIsModal] = useState(false);

  const onModalHandler = useCallback((isMod) => {
    setIsModal(!isMod);
  }, []);
  const onDeleteHandler = () => {
    setIsModal(false);
    onDelete();
  };

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
            <div onClick={onDeleteHandler}>
              <FontAwesomeIcon icon={faTrashAlt} />
              <p>Удалить</p>
            </div>
          </div>
        )
          : false}

        <div className="photoCard">
          <img src={src} alt="Photo" className="photo" />
        </div>
        <p className="name">{name}</p>
        <div className="icon_img">
          <FontAwesomeIcon icon={faVenusMars} />
          <FontAwesomeIcon icon={faBalanceScale} />
          <FontAwesomeIcon icon={faRulerVertical} />
        </div>
        <div className="icon_input">
          <span>{sex}</span>
          <span>{weight}</span>
          <span>{height}</span>
        </div>
        <p className="description">Цвет: <span>{color}</span></p>
        <p className="description">Диета: <span>{dieta}</span></p>
        <p className="description">Характер: <span>{character}</span></p>
      </div>
    </StyleCard>
  )
};

export default Card;
