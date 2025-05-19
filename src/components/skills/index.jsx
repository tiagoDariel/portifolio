import './style.scss';
import { img } from '../../utils/images';

const Skills = ({data}) => {
  const goViewDocs = (link) => {
    window.open(link);
  }

  return (
    <div className="skills content background-primary" id='skills'>
      <h2>{data.title}</h2>
      <div className="skills__description">
        {data.items.map((item, index) => (
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