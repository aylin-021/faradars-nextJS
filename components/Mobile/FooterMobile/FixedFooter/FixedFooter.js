import Bottom from "./Bottom/Bottom";
import Top from "./Top/Top";


const FixedFooter = () => {
    return ( 
        <div className="fixed bottom-0 left-0 right-0 z-100">
            <Top/>
            <Bottom/>
        </div>
     );
}
 
export default FixedFooter;