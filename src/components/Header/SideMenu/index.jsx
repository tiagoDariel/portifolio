import './style.scss'
import { IoIosCloseCircleOutline } from "react-icons/io";

const SideMenu = ({open, close}) => {
    return (
        <section className={`side-menu ${open ? 'open' : ''}`}>
            <div className="side-menu__content">
                <div className="close" onClick={() => close(false)}><IoIosCloseCircleOutline /></div>
            </div>
            <div className="side-menu__area-close"  onClick={() => close(false)}></div>
        </section>
    )
}

export default SideMenu;