import { Route} from "react-router";
import { Routes } from "react-router-dom";
import LyaToken from "../pages/LyaToken";

const Content = () => {
    return ( <div className="Container">
        

        <Routes>
        <Route path="/lyatoken" element={<LyaToken />}></Route>
        <Route path="/" element={<LyaToken />}></Route>
?

        </Routes>
        

        
    </div> );
}
 
export default Content;