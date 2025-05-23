import { Footer, Header } from "../../components";
import en from '../../assets/langs/en.json'
import pt from '../../assets/langs/pt.json'
import es from '../../assets/langs/es.json'
import { useCallback, useEffect, useState } from "react";

const TemplateBase = ({ children, showLang }) => {
  const [languageSelected, selectLanguage] = useState(null)
  const [data, setData] = useState({})

  const getLang = useCallback((lang) => {
    const language = JSON.parse(lang)
    
    const item = {en, pt, es}[language.value]

    selectLanguage(item.languages.find(l => l.value === language.value))

    setData(item)

    showLang(item);
  }, [showLang]);

  useEffect(() => {
    const lang = localStorage.getItem('lang') || {label:"Inglês", value:"en"};
    
    getLang(lang);
  }, [getLang]);

  return (
    <>
      <Header getLang={getLang} optionLanguageSelected={languageSelected} data={data}/>
      <main className="main-content container">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default TemplateBase;