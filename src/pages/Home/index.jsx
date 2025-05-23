import { Presentation, Skills, Projects, Experience, About, Contact } from "../../components";
import { TemplateBase } from "../../templates";
import { useState } from "react";

const Home = () => {
	const [data, setData] = useState(null);

	const getLang = (data) => {
		setData(data);
	};

	return (
		<TemplateBase showLang={getLang}>
			{data ?
			<>
				<Presentation data={data.presentation} />
				<About  data={data.about}/>
				<Projects data={data.projects}/>
				<Experience data={data.experience} />
				<Contact title={data.contacts.title}/>
				<Skills data={data.skills}/>
			</>
			: <></>	}
		</TemplateBase>
	);
};

export default Home;
