import NewArrived from "../../Sections/NewArrived";
import MostOrdered from "../../Sections/MostOrdered";
import "./home.scss";
import { Link } from "react-router-dom";
import ContactUs from "../../Sections/ContactUs/ContactUs";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-wrapper">
          <h1 className="big-title">الأناقة</h1>
          <p> ليست مجرد خيار، بل هو أسلوب حياة.</p>
        </div>
      </div>
      {/* ----------------------------- */}
      <div className="categories">
        <div className="container">
          <Link to="/man" className="man">
            <b>رجالي</b>
          </Link>
          <Link to="/women" className="women">
            <b>نسائي</b>
          </Link>
          <Link to="/kids" className="kids">
            <b>اطفال</b>
          </Link>
          <Link to="/shoes" className="shoes">
            <b>احذية</b>
          </Link>
          <Link to="/accessories" className="accessories">
            <b>اكسسوارت</b>
          </Link>
        </div>
      </div>
      {/* ------------------------------------ */}
      <NewArrived />
      <MostOrdered />
      <ContactUs />
    </div>
  );
}

export default Home;
