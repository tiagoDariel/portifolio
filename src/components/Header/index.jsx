import { img } from '../../utils/images';
import './style.scss';
import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { GiHamburgerMenu } from "react-icons/gi";
import SideMenu from './SideMenu'

const Header = ({ getLang, optionLanguageSelected }) => {
  const [theme, setTheme] = useState('dark')
  const [open, openSideMenu] = useState(false)
  const languages = ['Português', 'Inglês', 'Espanhol']

  const alterLanguage = (lang) => {
    window.localStorage.setItem('lang', lang)
    getLang(lang)
  }

  const toggleTheme = (mode) => {
    const link = document.getElementById('theme-style');
    
    if(mode) {
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
      <SideMenu open={open} close={openSideMenu}/>

      <div className="options">
          <select onChange={e => alterLanguage(e.target.value)}>
            {
              languages.map(lang => (
                <option key={lang} value={lang} selected={lang === optionLanguageSelected}>{lang}</option>
              ))
            }
          </select>
          <div className='night-light' onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>
            <div className="swap-time">
              <img src={img.nightLight} alt="noite" className={theme + ' moon-sun'}/>
              <img src={img.clound} alt="noite" className={theme + '-clound clounds'}/>
            </div>
          </div>
        </div>
      <div className="header-content content">
        <button className='button-open-side-bar' onClick={() => openSideMenu(true)}>
          <GiHamburgerMenu />
        </button>
        <div className="header-name">
          <img src={img[`logo-${theme}`]} alt="Logo" width={200} />
        </div>
        <nav className='nav'>
          <ul className='nav-list'>
            <li><HashLink smooth to="#about">About</HashLink></li>
            <li><HashLink smooth to="#projects">Projects</HashLink></li>
            <li><HashLink smooth to="#experience">Experience</HashLink></li>
            <li><HashLink smooth to="#contact">Contact</HashLink></li>
            <li><HashLink smooth to="#skills">Skills</HashLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;