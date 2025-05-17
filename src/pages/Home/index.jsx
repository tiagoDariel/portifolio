import { Presentation, Skills, Projects, Experience } from "../../components";
import { TemplateBase } from "../../templates";

const Home = () => {
	return (
		<>
			<TemplateBase>
				<Presentation />
				<Skills />
				<Projects />
				<Experience />
				{/* <Contact /> */}
			</TemplateBase>
		</>
	);
}

export default Home();