import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import './home.css'
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <div>
      <Header></Header>
     
      <h2 className="text">welcome to my home page</h2>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;