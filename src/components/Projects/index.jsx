import './style.scss';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';
import { img } from '../../utils/images';

const Projects = ({ data }) => {
  const [activeSpoilerIndex, setActiveSpoilerIndex] = useState(null);

  return (
    <div className="project background-primary">
      <div className="project__content content">
        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>

        <div className="project__content-list">
         
          {data.items.map((item, i) => (
            <div key={i} className={`project__content-list-item ${!i ? 'first' : ''}`}>
              {
                item.logo ? <img src={img[item.logo]} alt="jk solar system" width={100} /> : <></>
              }
              <h3>{item.title}</h3>

              {item.percents.length > 0 && (
                <div className="languages">
                  <img src={img.languages} alt="html" width={100} />
                  <div className="languages-percent">
                    {item.percents.map((percents, idx) => (
                      <span key={idx}>{percents}%</span>
                    ))}
                  </div>
                </div>
              )}

              <div className='description'>{item.subtitle}</div>

              <div className="view-project-options">
                <a
                  href={item.link}
                  className='view-project'
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActiveSpoilerIndex(i)}
                  onMouseLeave={() => setActiveSpoilerIndex(null)}
                >
                  View Project <FaArrowRightLong />
                </a>

                {item.gitHub && (
                  <a
                    href={item.gitHub}
                    className='view-project-github'
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project GitHub <FaGithub />
                  </a>
                )}
              </div>
              {item.image ?
                <div className={`view-spoiler ${activeSpoilerIndex === i ? 'spoiler-active' : ''}`}>
                  <img src={img[item.image]} alt="Project" style={{ width: '100%' }} />
                </div> : <></>
              }
            </div>
          ))}
        </div>
      </div>
      <div id="experience"></div>
    </div>
  );
};

export default Projects;
