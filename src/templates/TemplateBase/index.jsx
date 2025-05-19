import { Footer, Header } from "../../components";
import en from '../../assets/langs/en.json'
import pt from '../../assets/langs/pt.json'
import es from '../../assets/langs/es.json'
import { useEffect, useState } from "react";

const TemplateBase = ({children, showLang}) => {
  const [language, setLanguage] = useState(null)
  
  const getLang = (lang) => {
    const langNormalized = (lang || '').toLowerCase();

    const item = langNormalized === 'inglês' ? en : langNormalized === 'espanhol' ? es : pt
    
    showLang(item);
  };

  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'Inglês';

    setLanguage(lang);

    getLang(lang);
  }, []);
  
  return (
    <>
      <Header getLang={getLang} optionLanguageSelected={language}/>
      <main className="main-content container">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default TemplateBase;