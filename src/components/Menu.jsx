import styled from "styled-components"
import {useState} from "react"
import { Link } from "react-router-dom"
//icons
import { BsSearch } from 'react-icons/bs'
import { BiCart, BiUser } from 'react-icons/bi'
import { RiLayoutGridFill } from 'react-icons/ri'
import { MdAccountCircle } from 'react-icons/md'
import {HiOutlineMenuAlt1} from "react-icons/hi"
//images
import amazonLogo from '../assets/images/amazonLogo.png'


const Drawer = styled.header`
    grid-area: menu ;
    width: ${({open})=> open ? "300px" : "80px"} ;
`
const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <Drawer open={open} className="h-screen fixed rounded-r-xl z-50 transition-all bg-white  flex flex-col items-center justify-between p-4 sm:p-8">
            <Link to="/"className="inline-block w-[60px] aspect-square">
                <img src={amazonLogo} alt="logo" className="w-full h-full object-containt" /> 
            </Link>
            <nav>
                <Link to="search"className="flex items-center my-8 gap-4 text-lg"><BsSearch className="text-[1.6rem]"/> {open ? "Search" : ""}</Link>
                {/* <Link to="deparments"className="flex items-center my-8 gap-4 text-lg"><RiLayoutGridFill className="text-[1.6rem]"/> {open ? "Deparments" : ""}</Link> */}
                <Link to="basket"className="flex items-center my-8 gap-4 text-lg"><BiCart className="text-[1.6rem]"/> {open ? "Basket" : ""}</Link>
                <Link to="sign-in"className="flex items-center my-8 gap-4 text-lg"><BiUser className="text-[1.6rem]"/> {open ? "Sign in" : ""}</Link>
                <Link to="sign-up"className="flex items-center my-8 gap-4 text-lg"><MdAccountCircle className="text-[1.6rem]"/> {open ? "Sign up" : ""}</Link>
            </nav>
            <button onClick={()=>setOpen(!open)}><HiOutlineMenuAlt1 className="text-[2rem]"/></button>
        </Drawer>
    )
}
export default Menu