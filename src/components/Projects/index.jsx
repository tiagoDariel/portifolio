import './style.scss';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub  } from "react-icons/fa";
import { useState } from 'react';
import { img } from '../../utils/images';





const Projects = () => {
  const [activeSpoilerViewOne, activeSpoilerViewPrjectOne] = useState('')
  const [activeSpoilerViewTwo, activeSpoilerViewPrjectTwo] = useState('')
  

  return (
    <div className="project">
      <div className="project__content content">
        <h2>Projects</h2>
        <p>Here are some of my projects:</p>
        <div className="project__content-list">
          <div className="project__content-list-item first">
            <img src={img.jk} alt="jk solar system" width={100}/>
            <h3>JK Solar System</h3>
            <p>Project created in WordPress</p>
            <a
              href="https://jksolarsystem.com.br/"
              className='view-project'
              target="_blank"
              rel="noopener noreferrer">
                View Project <FaArrowRightLong />
            </a>

          </div>
          <div className="project__content-list-item">
            <h3>course project form</h3>
            <div className="languages">
              <img src={img.languages} alt="html" width={100} />
              <dio className="languages-percent">
                <span>38%</span>
                <span>19%</span>
                <span>43%</span>
              </dio>
            </div>
            <div className='description'>Project to develop form skills</div>

            <div className="view-project-options">
              <a
                href="https://tiago-dariel-dnc.netlify.app/"
                className='view-project'
                target="_blank"
                onMouseEnter={() => activeSpoilerViewPrjectOne('spoiler-active')}
                onMouseLeave={() => activeSpoilerViewPrjectOne('')}
                rel="noopener noreferrer">
                View Project <FaArrowRightLong />
              </a>
              <a
                href="https://github.com/tiagoDariel/RID218815_Desafio01"
                className='view-project-github'
                target="_blank"
                rel="noopener noreferrer">
                  Project GitHub <FaGithub />
              </a>
            </div>
            <div className={`view-spoiler ${activeSpoilerViewOne}`}>
              <img src={img.projeto1} alt="Project 1" width="100%"/>
            </div>
          </div>

          <div className="project__content-list-item">
            <h3>course project responsive</h3>
            <div className="languages">
              <img src={img.languages} alt="html" width={100} />
              <dio className="languages-percent">
                <span>15%</span>
                <span>47%</span>
                <span>38%</span>
              </dio>
            </div>

            <div className='description'>Project to develop responsive skills</div>

            <div className="view-project-options">
              <a
                href="https://tiago-dariel-desafio2.netlify.app/"
                className='view-project'
                target="_blank"
                onMouseEnter={() => activeSpoilerViewPrjectTwo('spoiler-active')}
                onMouseLeave={() => activeSpoilerViewPrjectTwo('')}
                rel="noopener noreferrer">
                View Project <FaArrowRightLong />
              </a>
              <a
                href="https://github.com/tiagoDariel/RID218815_Desafio02"
                className='view-project-github'
                target="_blank"
                rel="noopener noreferrer">
                  Project GitHub <FaGithub />
              </a>
            </div>
            <div className={`view-spoiler ${activeSpoilerViewTwo}`}>
              <img src={img.projeto2} alt="Project 2" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;