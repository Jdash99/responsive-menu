import React, { useState } from 'react'
import logo from '../../logo.svg'
import './styles.css'

const Header = ({ items, onItemChange }) => {
  const [classOn, setClassOn] = useState(false)

  return (
    <header>
      <div className='container'>
        <img src={logo} alt='logo' />

        <div
          className={classOn ? 'menu-section on' : 'menu-section'}
          onClick={() => setClassOn(!classOn)}
        >
          <div className='menu-toggle'>
            <div className='one'></div>
            <div className='two'></div>
            <div className='three'></div>
          </div>

          <nav>
            <ul>
              {items.map((item) => (
                <li key={item.id} onClick={() => onItemChange(item)}>
                  <a href='#'>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
