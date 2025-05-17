import './style.scss';
import { img } from '../../utils/images';
import data from './data.json';

const Skills = () => {
  const goViewDocs = (link) => {
    window.open(link);
  }

  return (
    <div className="skills content">
      <h2>Skills</h2>
      <div className="skills__description">
        {data.frams.map((item, index) => (
          <div key={index} className='skills__description-item' onClick={() => goViewDocs(item.link)}>
            {img[item.name] ? <img src={img[item.name]} alt={`${item.name} logo`} width={50}/> : item.name.toUpperCase()}
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;