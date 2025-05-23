
import { FaLinkedin, FaLocationDot, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa6";
import './style.scss'

const Contato = ({title}) => {
    return (
        <section id="contact" className="content contact">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
                {title}
            </h2>

            <div className="contacts">
                <div className="contacts__info">
                    <FaEnvelope /> tdariel2@gmail.com
                </div>
                <div className="contacts__info">
                    <FaWhatsapp /> (62) 99500-9668
                </div>
                <div className="contacts__info">
                    <FaLinkedin /> <a href="https://www.linkedin.com/in/tiago-dariel-a7904a144/">Linkedin</a>
                </div>
                <div className="contacts__info">
                    <FaGithub /> <a href="https://github.com/tiagodariel">github</a>
                </div>
                <div className="contacts__info">
                    <FaLocationDot /> Aparecida de Goiânia - GO, Brasil
                </div>
            </div>
        </section>
    );
};

export default Contato;