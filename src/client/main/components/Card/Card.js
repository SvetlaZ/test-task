import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
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
  onDelete,
  onEdit,
}) => {
  const [isModal, setIsModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // const [nameState, setNameState] = useState(name);
  // const [sexState, setSexState] = useState(sex);
  // const [weightState, setWeightState] = useState(weight);
  // const [heightState, setHeightState] = useState(height);
  // const [colorState, setColorState] = useState(color);
  // const [dietaState, setDietaState] = useState(dieta);
  // const [characterState, setCharacterState] = useState(character);
  const [giraffe, setGiraffe] = useState({
    src,
    name,
    sex,
    weight,
    height,
    color,
    dieta,
    character,
  });

  const onModalHandler = useCallback((isMod) => {
    setIsModal(!isMod);
  }, []);

  const onDeleteHandler = () => {
    setIsModal(false);
    onDelete();
  };

  const handlerChange = useCallback((field) => {
    const editedGiraffe = giraffe;
    editedGiraffe[field] = event.target.value;
    setGiraffe(Object.create(editedGiraffe));
  }, [giraffe]);

  return (
    <StyleCard>
      {/* <div> */}
      {isModal ? (
        <div className="modalBlock">
          <div onClick={() => { setIsEdit(true); setIsModal(false) }}>
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

      {isEdit ? (
        <div className="edit">
          <div className="modal_icon" onClick={() => { onModalHandler(isModal) }} >
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
          <div className="photoCard">
            <img src={src} alt="Photo" className="photo" />
          </div>
          <input className="name" type="text" value={giraffe.name} onChange={() => handlerChange('name')} />
          <div className="icon_img">
            <label htmlFor="sex"><FontAwesomeIcon icon={faVenusMars} /></label>
            <label htmlFor="weight"><FontAwesomeIcon icon={faBalanceScale} /></label>
            <label htmlFor="height"><FontAwesomeIcon icon={faRulerVertical} /></label>
          </div>
          <div className="icon_input">
            <select type="text" id="sex" value={giraffe.sex} onChange={() => handlerChange('sex')} >
              <option value="М">М</option>
              <option value="Ж">Ж</option>
            </select>
            <input type="text" id="weight" value={giraffe.weight} onChange={() => handlerChange('weight')} />
            <input type="text" id="height" value={giraffe.height} onChange={() => handlerChange('height')} />
          </div>
          <p className="description">
            <label htmlFor="color">Цвет: </label>
            <input type="text" id="color" value={giraffe.color} onChange={() => handlerChange('color')} />
          </p>
          <p className="description">
            <label htmlFor="dieta">Диета: </label>
            <input type="text" id="dieta" value={giraffe.dieta} onChange={() => handlerChange('dieta')} />
          </p>
          <p className="description">
            <label htmlFor="character">Характер: </label>
            <input type="text" id="character" value={giraffe.character} onChange={() => handlerChange('character')} />
          </p>

          <button type="button" onClick={() => { onEdit(giraffe); setIsEdit(false) }}>Сохранить</button>
        </div>
      )
        : (
          <div>
            <div className="modal_icon" onClick={() => { onModalHandler(isModal) }} >
              <FontAwesomeIcon icon={faEllipsisH} />
            </div>
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
        )
      }
      {/* </div > */}
    </StyleCard >
  )
};

Card.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  sex: PropTypes.string,
  weight: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  dieta: PropTypes.string,
  character: PropTypes.string,
  onDelete: PropTypes.func,
};

Card.defaultProps = {
  src: '',
  name: 'Имя',
  sex: '-',
  weight: '-',
  height: '-',
  color: '',
  dieta: '',
  character: '',
  onDelete: () => { },
};

export default Card;
