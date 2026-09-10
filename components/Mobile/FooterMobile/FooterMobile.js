import AccordionMobile from "./AccordionMobile/AccordionMobile";
import DownloadAppMobile from "./DownloadAppMobile/DownloadAppMobile";
import FixedFooter from "./FixedFooter/FixedFooter";
import FooterLinks from "./FooterLinks/FooterLinks";
import MoreMobile from "./MoreMobile/MoreMobile";
import SubcriptionMobile from "./SubcriptionMobile/SubcriptionMobile";
import TopFooter from "./TopFooter/TopFooter";

const FooterMobile = () => {
    return ( 
        <div>
            <TopFooter/>
            <AccordionMobile/>
            <SubcriptionMobile/>
            <MoreMobile/>
            <DownloadAppMobile/>
            <FooterLinks/>
            <FixedFooter/>
        </div>
     );
}
 
export default FooterMobile;