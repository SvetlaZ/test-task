import React from 'react';
import Card from '../Card/Card';

import StyleAviaries from './style.Aviaries';

const girafes = [
  {
    name: 'Мотильда',
    // avatar: 'image/f1926aba2300fda67144c2cd9b71755c.jpg',
    sex: 'Ж',
    weight: 800,
    height: 4,
    color: 'Стандартный',
    dieta: 'Растительная',
    character: 'Кокетка',
  },
  {
    name: 'Гога',
    // avatar: 'image/f1926aba2300fda67144c2cd9b71755c.jpg',
    sex: 'М',
    weight: 900,
    height: 4.9,
    color: 'Жирафовый',
    dieta: 'Шашлычная',
    character: 'Вспыльчивый',
  },
]

const Aviaries = () => {
  return (
    <StyleAviaries>
      <Card />
      <Card />
    </StyleAviaries>
  )
}

export default Aviaries;
