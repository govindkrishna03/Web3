import {BrowserRouter,Routes,Route} from "react-router-dom";
import { LandingPage } from "./components/landing";
import {Register} from "./components/Register"
import {Login} from "./components/Login"
import Home from './components/home'
import UploadDetails from './components/upload'
import PaymentForm from "./components/paymentform";
import Logout from "./components/logout";
import FlippableCards from "./components/fllippablecard";



function App() {
  return (
  <BrowserRouter>

  <Routes>
    <Route path ="/" element ={<LandingPage />} />
    <Route path ="/register" element ={<Register/>} />
    <Route path ="/login" element ={<Login/>} />
    <Route path ="/donate" element ={< Home/>} />
    <Route path ="/startfundraiser" element={<UploadDetails/>}/>
    <Route path ="/makepayment" element={<PaymentForm/>}/>
    <Route path ="/logout" element={<Logout />}/>
    <Route path ="/cards" element={<FlippableCards />}/>



  </Routes>
  </BrowserRouter>
  );
}

export default App;