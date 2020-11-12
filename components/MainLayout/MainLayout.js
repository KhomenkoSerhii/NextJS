
import Header from "../Header/index";
import Footer from "../../components/Footer/index";

const Mainlayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Mainlayout;
