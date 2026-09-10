import AllAccess from "../../components/Desktop/AllAccess/AllAccess";
import Banner from "../../components/Desktop/Banner/Banner";
import CategoriesSubject from "../../components/Desktop/CategoriesSubject/CategoriesSubject";
import Footer from "../../components/Desktop/Footer/Footer";
import Header from "../../components/Desktop/Header/Header";
import Numbers from "../../components/Desktop/Numbers/Numbers";
import Popular from "../../components/Desktop/Popular/Popular";
import UniversityMajors from "../../components/Desktop/UniversityMajors/UniversityMajors";
import AllAccessMobile from "../../components/Mobile/AllAccessMobile/AllAccessMobile";
import BannerMobile from "../../components/Mobile/BannerMobile/BannerMobile";
import CategoriesSubjectMobile from "../../components/Mobile/CategoriesSubject/CategoriesSubject";
import FooterMobile from "../../components/Mobile/FooterMobile/FooterMobile";
import HeaderMobile from "../../components/Mobile/Header/HeaderMobile";
import NumbersMobile from "../../components/Mobile/NumbersMobile/NumbersMobile";
import PopularMobile from "../../components/Mobile/PopularMobile/PopularMobile";
import UniversityMobile from "../../components/Mobile/UniversityMobile/UniversityMobile";

const App = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden lg:flex flex-col">
        <Header />
        <Banner />
        <CategoriesSubject />
        <Popular/>
        <Numbers/>
        <UniversityMajors/>
        <AllAccess/>
        <Footer/>
      </div>

      {/* Mobile + Tablet */}
      <div className="flex flex-col lg:hidden w-full">
        <HeaderMobile/>
        <BannerMobile/>
        <CategoriesSubjectMobile/>
        <PopularMobile/>
        <NumbersMobile/>
        <UniversityMobile/>
        <AllAccessMobile/>
        <FooterMobile/>
      </div>
    </div>
  );
};

export default App;