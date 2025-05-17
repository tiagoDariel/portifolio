import logo from '../../assets/img/logo.png';
import './style.scss';

const Header = () => {
  return (
    <>
        <header className="header container">
          <div className="header-content content">
            <div className="header-name">
              <img src={logo} alt="Logo" width={50} />
              <span className='name'>TIAGO DARIEL</span>
            </div>
            <nav className='nav'>
                <ul className='nav-list'>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
          </div>
        </header>
    </>
  );
}

export default Header;