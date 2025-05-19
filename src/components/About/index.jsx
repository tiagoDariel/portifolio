import './style.scss'
const About = ({data}) => {
  return(
    <div className="about content">
      <h2>{data.title}</h2>

      <p>{data.description}</p>
      <div id="projects"></div>
    </div>
  );
}

export default About;