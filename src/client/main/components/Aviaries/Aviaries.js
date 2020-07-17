import React, { useState, useCallback } from 'react';
import Card from '../Card/Card';


import motilda from './images/motilda.png';
import goga from './images/goga.png';
import shnur from './images/shnur.png';
import leonid from './images/leonid.png';
import lara from './images/lara.png';

import StyleAviaries from './style.Aviaries';

const giraffes = [
  {
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

  return (
    <StyleAviaries>
      {
        giraffeCards.map((item, index) => {
          const { src, name, sex, weight, height, color, dieta, character } = item;
          console.log('компонент: ', dieta);
          return (< Card
            key={index}
            src={src}
            name={name}
            sex={sex}
            weight={weight}
            height={height}
            color={color}
            dieta={dieta}
            character={character}
          />)
        })
      }
    </StyleAviaries>
  )
}

export default Aviaries;
