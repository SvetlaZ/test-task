import React, { useState, useCallback } from 'react';
import logo from './logo.png'
import StyleWrapper from './style.Wrapper';

import Aviaries from '../Aviaries/Aviaries'
const classNames = require('classnames');

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faHorseHead } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'

const menu = [
  {
    icon: <FontAwesomeIcon icon={faHome} />,
    name: 'Главная',
    choosen: false,
  },
  {
    icon: <FontAwesomeIcon icon={faTasks} />,
    name: 'Управление',
    choosen: false,
  },
  {
    icon: <FontAwesomeIcon icon={faHorseHead} />,
    name: 'Жирафы',
    choosen: true,
  },
  {
    icon: <FontAwesomeIcon icon={faUserFriends} />,
    name: 'Сотрудники',
    choosen: false,
  },
  {
    icon: <FontAwesomeIcon icon={faCog} />,
    name: 'Настройки',
    choosen: false,
  },
  {
    icon: <FontAwesomeIcon icon={faTools} />,
    name: 'Поддержка',
    choosen: false,
  },
];

const Wrapper = () => {
  const [info, setInfo] = useState(true);

  return (
    <StyleWrapper>
      <div className="menu">
        <div className="farm_name">
          <img src={logo} alt="" />
          <div className="farm_text">
            <p className="farm_farm">Ферма Заслуженных Жирафов</p>
            <p>России и СНГ</p>
          </div>
        </div>

        <ul className="menuItems">
          {menu.map(({ icon, name, choosen }, index) => {
            return (
              <li
                key={index}
                className={classNames('item', { choose: choosen })}
              >
                {icon}
                <p>{name}</p>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="aviaries">
        <header>
          <div>
            <ul>
              <li>Вольер 1</li>
              <li>Вольер 2</li>
              <li>Вольер 3</li>
            </ul>
            <FontAwesomeIcon icon={faPlusCircle} />
          </div>
          <div>
            <FontAwesomeIcon icon={faBell} />
            <img src={logo} alt="" />
            <span>hello@giraffe.com</span>
          </div>
        </header>
        <progress id="av" max="100" value="5"></progress>

        <div className="headerName">
          <h1>Жирафы</h1>
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
        <Aviaries />
        {info ? (
          <div className="info">
            <label htmlFor="farm"><span>75%</span>Заполнение вольера</label>
            <progress id="farm" max="100" value="75"></progress>
            <button type="button">Информация</button>
          </div>
        )
          : false}

      </div>
    </StyleWrapper>
  )
}

export default Wrapper;
