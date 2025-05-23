import "./style.scss";
import { img } from '../../../utils/images';

const ToggleTheme = ({ theme, toggleTheme }) => {
  return (
    <div className='toggle-theme' onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>
      <div className="swap-time">
        <img src={img.nightLight} alt="night light" className={theme + ' moon-sun'} />
        <img src={img.clound} alt="clound" className={theme + '-clound clounds'} />
      </div>
    </div>
  )
}

export default ToggleTheme;