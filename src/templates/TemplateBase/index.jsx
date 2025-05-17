import { Footer, Header } from "../../components";

const TemplateHome = ({children}) => {
  return (
    <>
      <Header />
      <main className="main-content container">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default TemplateHome;