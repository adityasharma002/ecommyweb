import {useEffect,useState,useContext} from "react";
import {useNavigate} from "react-router-dom";

import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import {Context} from "../../utils/context";
import "./Header.scss";
const Header = () => {
    const [scrolled,setScroll]= useState(false);
    const handleScroll = ()=>{
      const offset= window.scrollY;
      if(offset>200){
        setScroll(true);
      }
      else{
        setScroll(false);
      }
    }
    useEffect(()=>{
       window.addEventListener("scroll",handleScroll);
    },[]);
    return (
        <header className={`main-header ${scrolled ? "sticky-header": ""}`} >
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Category</li>
            </ul>
            <div className="center">ECOMMY</div>
            <div className="right">
                <TbSearch/>
                <AiOutlineHeart/>
                <spam className="cart-icon">
                    <CgShoppingCart/>
                    <span>5</span>
                </spam>
            </div>
        </div>
    </header>)

};

export default Header;
