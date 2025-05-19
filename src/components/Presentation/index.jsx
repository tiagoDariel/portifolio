import './style.scss'
import Eu from '../../assets/img/eu.png'
const Presetation = ({data}) => {

  return (
    <div className="presentation background-primary" id='about'>
		<div className="presentation__content content" >
			<div className="presentation__content-dialog">
				<div className="presentation__content-dialog-hello">
					{data.title}
				</div>
				<div className="presentation__content-dialog-profission">{data.subtitle}</div>
			</div>
			<div className="presentation__content-image">
				<img src={Eu} alt="eu" width={300}/>
			</div>
		</div>
    </div>
  );
}

export default Presetation;