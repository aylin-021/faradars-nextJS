import BottomFooter from "./BottomFooter/BottomFooter";
import FooterFirst from "./FooterFirst/FooterFirst";
import FooterFive from "./FooterFive/FooterFive";
import FooterFour from "./FooterFour/FooterFour";
import FooterThree from "./FooterThree/FooterThree";
import FooterTwo from "./FooterTwo/FooterTwo";

const Footer = () => {
    return ( 
        <div>
            <FooterFirst/>
            <FooterTwo/>
            <FooterThree/>
            <FooterFour/>
            <FooterFive/>
            <BottomFooter/>
        </div>
     );
}
 
export default Footer;