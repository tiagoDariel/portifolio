import logo from '../../assets/img/logo.png';
import nightLight from '../../assets/img/nightLight.png';
import clound from '../../assets/img/clound.png';
import './style.scss';
import { useEffect, useState } from 'react';

const Header = ({ getLang, optionLanguageSelected }) => {
  const [theme, setTheme] = useState()
  const languages = ['Português', 'Inglês', 'Espanhol']

  const alterLanguage = (lang) => {
    window.localStorage.setItem('lang', lang)
    getLang(lang)
  }

  const toggleTheme = (mode) => {
    const link = document.getElementById('theme-style');

    window.localStorage.setItem('theme', mode)
    setTheme(mode)

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
      <div className="header-content content">
        <div className="header-name">
          <img src={logo} alt="Logo" width={50} />
          <span className='name'>TIAGO DARIEL</span>
        </div>
        <nav className='nav'>
          <ul className='nav-list'>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </nav>

        <div className="options">
          <select onChange={e => alterLanguage(e.target.value)}>
            {
              languages.map(lang => (
                <option key={lang} value={lang} selected={lang === optionLanguageSelected}>{lang}</option>
              ))
            }
          </select>
        </div>

        <div className='night-light' onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>
            <div className="swap-time">
              <img src={nightLight} alt="noite" className={theme + ' moon-sun'}/>
              <img src={clound} alt="noite" className={theme + '-clound clounds'}/>
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header;