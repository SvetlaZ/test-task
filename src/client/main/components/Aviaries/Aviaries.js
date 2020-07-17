import React, { useState, useCallback, useEffect } from 'react';
import Card from '../Card/Card';

import motilda from './images/motilda.png';
import goga from './images/goga.png';
import shnur from './images/shnur.png';
import leonid from './images/leonid.png';
import lara from './images/lara.png';

import StyleAviaries from './style.Aviaries';

const giraffes = [
  {
    id: 1,
    src: motilda,
    name: 'Мотильда',
    sex: 'Ж',
    weight: 800,
    height: 4,
    color: 'Стандартный',
    dieta: 'Растительная',
    character: 'Кокетка',
  },
  {
    id: 2,
    src: goga,
    name: 'Гога',
    sex: 'М',
    weight: 900,
    height: 4.9,
    color: 'Жирафовый',
    dieta: 'Шашлычная',
    character: 'Вспыльчивый',
  },
  {
    id: 3,
    src: shnur,
    name: 'Шнур',
    sex: 'М',
    weight: 800,
    height: 5.7,
    color: 'Нездоровый',
    dieta: 'Жвачная',
    character: 'Хулиган',
  },
  {
    id: 4,
    src: leonid,
    name: 'Леонид',
    sex: 'М',
    weight: 1000,
    height: 6,
    color: 'Леонидовый',
    dieta: 'Ест детей',
    character: 'Нарцисс',
  },
  {
    id: 5,
    src: lara,
    name: 'Лара',
    sex: 'Ж',
    weight: 850,
    height: 5,
    color: 'Пятнистый',
    dieta: 'Диетическая',
    character: 'Покладистый',
  }
]

if (!localStorage.getItem('giraffes')) {
  localStorage.setItem('giraffes', JSON.stringify(giraffes));
}

const Aviaries = () => {
  const [giraffeCards, setGiraffeCards] = useState(JSON.parse(localStorage.getItem('giraffes')));

  const onDelete = useCallback((id) => {
    console.log('id', id)
    const currentGiraffesList = giraffeCards.filter((item) => (item.id !== id));
    setGiraffeCards(currentGiraffesList);
    // console.log('after filter: ', giraffeCards);
    // console.log('after filter: ', currentGiraffesList);
  }, [giraffeCards]);

  useEffect(() => {
    console.log('giraffeCards useEffect: ', giraffeCards)
    localStorage.setItem('giraffes', JSON.stringify(giraffeCards));
  }, [giraffeCards]);

  return (
    <StyleAviaries>
      {console.log('rend: ', giraffeCards)}
      {
        giraffeCards.map((item) => {
          const { id, src, name, sex, weight, height, color, dieta, character } = item;
          return (< Card
            key={id}
            src={src}
            name={name}
            sex={sex}
            weight={weight}
            height={height}
            color={color}
            dieta={dieta}
            character={character}
            onDelete={() => onDelete(id)}
          />)
        })
      }
    </StyleAviaries>
  )
}

export default Aviaries;
