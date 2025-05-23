import './style.scss';
import SideMenu from './SideMenu'
import ToggleTheme from './ToggleTheme';
import { img } from '../../utils/images';
import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ getLang, optionLanguageSelected, data }) => {
  const [theme, setTheme] = useState('light')
  const [show, showSideMenu] = useState(false)

  const alterLanguage = (lang) => {
    window.localStorage.setItem('lang', lang)
    getLang(lang)
  }

  const toggleTheme = (mode) => {
    const link = document.getElementById('theme-style');

    if (mode) {
      window.localStorage.setItem('theme', mode)

      setTheme(mode)
    }

    if (mode && mode === 'dark') {
      link.setAttribute('href', `${process.env.PUBLIC_URL}/styles/dark.css`);
    } else {
      link.setAttribute('href', `${process.env.PUBLIC_URL}/styles/light.css`);
    }
  };

  useEffect(() => {
    const mode = localStorage.getItem('theme');

    toggleTheme(mode)
  }, []);

  return (
    <header className="header light container">
      <SideMenu
        opened={show}
        close={showSideMenu}
        toggleTheme={
          {
            theme,
            toggleTheme
          }
        }
        optionsLanguages={
          {
            alterLanguage,
            languages: data.languages,
            optionLanguageSelected
          }
        }
        menu={data?.header?.menu}
      >
        <nav className='nav'>

          <ul className='nav-list'>

          </ul>
        </nav>
      </SideMenu>

      <div className="options">
        <select
          onChange={e => alterLanguage(e.target.value)}
          value={optionLanguageSelected?.value}
        >
          {data?.languages?.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>

        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
      </div>

      <div className="header-content content">
        <button
          className='button-open-side-bar'
          onClick={() => showSideMenu(true)}
        >
          <GiHamburgerMenu />
        </button>

        <div className="header-logo">
          <img
            src={img[`logo-${theme}`]}
            alt="Logo" width={200}
          />
        </div>

        <nav className='nav'>
          <ul className='nav-list'>
            {data?.header?.menu ?
              data.header.menu.map((item, index) => (
                <li key={item.text}><HashLink smooth to={item.link}>{item.text}</HashLink></li>
              )) : <></>
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;