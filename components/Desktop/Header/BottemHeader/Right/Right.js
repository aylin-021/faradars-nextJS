import MegaMenu from "./MegaMenu/MegaMenu";
import SearchHeader from "./SearchHeader";

const Right = () => {
    return ( 
        <>
            <div className="flex flex-row gap-10">
                <img src="https://faradars.org/wp-content/uploads/2025/05/28/headerlogo.svg" alt="logo" />
                <MegaMenu/>
                <SearchHeader/>
            </div>
        </>
     );
}
 
export default Right;