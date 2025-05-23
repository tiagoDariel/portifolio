import './style.scss'
import ToggleTheme from '../ToggleTheme';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { HashLink } from 'react-router-hash-link';
import Eu from '../../../assets/img/eu.png'



const SideMenu = ({ opened, close, toggleTheme, optionsLanguages, menu }) => {
  return (
    <section className={`side-menu ${opened ? 'open' : ''}`}>
      <div className="side-menu__body">
        <div className="side-menu__body-header">
          <div className="side-menu__body-header-toggle-theme">
            <ToggleTheme theme={toggleTheme.theme} toggleTheme={toggleTheme.toggleTheme} />
          </div>

          <div
            className="close"
            onClick={() => close(false)}
          >
            <IoIosCloseCircleOutline />
          </div>

          <select
            onChange={e => optionsLanguages.alterLanguage(e.target.value)}
          >
            {optionsLanguages.languages?.map((lang) => (
              <option key={lang.value} value={JSON.stringify(lang)} selected={optionsLanguages.optionLanguageSelected === lang}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        <div className="side-menu__body-content">
          <nav className="side-menu__body-content-list">
            <ul>
              {menu ?
                menu.map((item) => (
                  <li key={item.text} onClick={() => close(false)}><HashLink smooth to={item.link}>{item.text}</HashLink></li>
                )) : <></>
              }
            </ul>
          </nav>
        </div>

        <div className="side-menu__body-image">
          <img src={Eu} alt="eu" width={150}/>
        </div>
      </div>

      <div
        className="side-menu__area-close"
        onClick={() => close(false)}
      />
    </section>
  )
}

export default SideMenu;