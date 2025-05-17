import './style.scss'
import Eu from '../../assets/img/eu.png'
const Presetation = () => {
  return (
    <div className="presentation">
		<div className="presentation__content content">
			<div className="presentation__content-dialog">
				<div className="presentation__content-dialog-hello">
					Hello, I'm Tiago Dariel
				</div>
				<div className="presentation__content-dialog-profission">Full-stack develop specialing in back-end and front-end sytems</div>
			</div>
			<div className="presentation__content-image">
				<img src={Eu} alt="eu" width={300}/>
			</div>
		</div>
    </div>
  );
}

export default Presetation;