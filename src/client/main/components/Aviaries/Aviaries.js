import React, { useState, useCallback, useEffect } from 'react';
import Card from '../Card/Card';
import logo from '../Wrapper/logo.png';
import motilda from './images/motilda.png';
import goga from './images/goga.png';
import shnur from './images/shnur.png';
import leonid from './images/leonid.png';
import lara from './images/lara.png';
import defImage from './images/defImage.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import StyleAviaries from './style.Aviaries';

const giraffes = [
  {
    id: 1,
    src: motilda,
    name: 'Мотильда',
    sex: 'Ж',
    weight: '800',
    height: '4',
    color: 'Стандартный',
    dieta: 'Растительная',
    character: 'Кокетка',
  },
  {
    id: 2,
    src: goga,
    name: 'Гога',
    sex: 'М',
    weight: '900',
    height: '4,9',
    color: 'Жирафовый',
    dieta: 'Шашлычная',
    character: 'Вспыльчивый',
  },
  {
    id: 3,
    src: shnur,
    name: 'Шнур',
    sex: 'М',
    weight: '800',
    height: '5,7',
    color: 'Нездоровый',
    dieta: 'Жвачная',
    character: 'Хулиган',
  },
  {
    id: 4,
    src: leonid,
    name: 'Леонид',
    sex: 'М',
    weight: '1000',
    height: '6',
    color: 'Леонидовый',
    dieta: 'Ест детей',
    character: 'Нарцисс',
  },
  {
    id: 5,
    src: lara,
    name: 'Лара',
    sex: 'Ж',
    weight: '850',
    height: '5',
    color: 'Пятнистый',
    dieta: 'Диетическая',
    character: 'Покладистый',
  }
];

if (!localStorage.getItem('giraffes')) {
  localStorage.setItem('giraffes', JSON.stringify(giraffes));
}

const Aviaries = () => {
  const [giraffeCards, setGiraffeCards] = useState(JSON.parse(localStorage.getItem('giraffes')));
  const [info, setInfo] = useState(true);

  const addCard = useCallback(() => {
    const newCard = [{
      id: giraffeCards.reduce((max, item) => item.id > max ? item.id : max, 0) + 1,
      src: defImage,
      name: 'Имя',
      sex: '-',
      weight: '-',
      height: '-',
      color: '',
      dieta: '',
      character: '',
    }];
    const giraffesList = newCard.concat(giraffeCards);
    setGiraffeCards(giraffesList);
    console.log('with add card: ', giraffeCards);
  }, [giraffeCards, setGiraffeCards]);

  const onDelete = useCallback((id) => {
    const currentGiraffesList = giraffeCards.filter((item) => (item.id !== id));
    setGiraffeCards(currentGiraffesList);
  }, [giraffeCards, setGiraffeCards]);

  const onEdit = useCallback((id, newGiraffe) => {
    console.log('newGiraffe Edit: ', newGiraffe);
    const currentGiraffesList = giraffeCards.map((item) => (item.id !== id ? item : newGiraffe));
    setGiraffeCards(currentGiraffesList);
  }, [giraffeCards, setGiraffeCards]);

  useEffect(() => {
    console.log('giraffeCards useEffect: ', giraffeCards)
    localStorage.setItem('giraffes', JSON.stringify(giraffeCards));
  }, [giraffeCards]);
  return (
    <StyleAviaries>
      {console.log('cards: ', giraffeCards)}
      <div>
        <header>
          <div>
            <ul>
              <li className="active">Вольер 1</li>
              <li>Вольер 2</li>
              <li>Вольер 3</li>
            </ul>
            <FontAwesomeIcon icon={faPlusCircle} />
          </div>
          <div className="bell">
            <FontAwesomeIcon icon={faBell} />
            <img src={logo} alt="" />
            <span>hello@giraffe.com</span>
          </div>
        </header>
        <hr />

        <div className="headerName">
          <h1>Жирафы</h1>
          <FontAwesomeIcon icon={faPlusCircle} onClick={addCard} />
        </div>
        <div className="cardBlock">
          {
            giraffeCards.map((item) => {
              const { id, src, name, sex, weight, height, color, dieta, character } = item;
              return (< Card
                key={id}
                id={id}
                src={src}
                name={name}
                sex={sex}
                weight={weight}
                height={height}
                color={color}
                dieta={dieta}
                character={character}
                onDelete={() => onDelete(id)}
                onEdit={(giraffe) => onEdit(id, giraffe)}
              />)
            })
          }
        </div>
        {info ? (
          <div className="info">
            <label htmlFor="farm"><span>{Math.round((giraffeCards.length / 10) * 100)}%</span>Заполнение вольера</label>
            <div>
              <progress id="farm" max="100" value={(giraffeCards.length / 10) * 100}></progress>
              <button type="button">Информация</button>
            </div>
          </div>
        )
          : false}

      </div>
    </StyleAviaries>
  )
}

export default Aviaries;
