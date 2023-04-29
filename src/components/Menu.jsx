import styled from "styled-components"
import {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router"
//icons
import { BsSearch } from 'react-icons/bs'
import { BiCart, BiUser } from 'react-icons/bi'
import { MdAccountCircle } from 'react-icons/md'
import {HiOutlineMenuAlt1} from "react-icons/hi"
//images
import amazonLogo from '../assets/images/amazonLogo.png'

const Drawer = styled.header`
    height: ${({open})=> open ? "100vh" : "80px"} ;
    nav{
        display: ${({open})=> open ? "flex" : "none"} ;
        visibility: ${({open})=> open ? "visible" : "hidden"} ;
        flex-grow: 1;
    }
    
    @media (min-width: 640px){
        width: ${({open})=> open ? "300px" : "80px"} ;
        height: 100vh ;
        nav{
            visibility:visible ;
            display: flex ;
        }
    }
    
`
const Menu = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()
    useEffect(()=>{
        setOpen(false)
    },[location])
    return (
        <>
            <Drawer open={open} className="flex w-full sm:h-screen fixed rounded-r-xl z-50 transition-all bg-white flex-col items-center justify-between p-4 sm:p-8">
                <div className="flex sm:block w-full sm:w-fit items-center justify-between">
                    <Link to="/"className="inline-block w-[60px] aspect-square">
                        <img src={amazonLogo} alt="logo" className="w-full h-full object-containt" /> 
                    </Link>
                    <button className="inline sm:hidden" onClick={()=>setOpen(!open)}><HiOutlineMenuAlt1 className="text-[2rem]"/></button>
                </div>
                
                <nav className="flex items-center flex-col justify-center">
                    <Link to="search"className="flex items-center my-5 gap-4 text-lg"><BsSearch className="text-[1.6rem]"/> {open ? "Search" : ""}</Link>
                    <Link to="basket"className="flex items-center my-5 gap-4 text-lg"><BiCart className="text-[1.6rem]"/> {open ? "Basket" : ""}</Link>
                    <Link to="sign-in"className="flex items-center my-5 gap-4 text-lg"><BiUser className="text-[1.6rem]"/> {open ? "Sign in" : ""}</Link>
                    <Link to="sign-up"className="flex items-center my-5 gap-4 text-lg"><MdAccountCircle className="text-[1.6rem]"/> {open ? "Sign up" : ""}</Link>
                </nav>
                <button className="hidden sm:inline" onClick={()=>setOpen(!open)}><HiOutlineMenuAlt1 className="text-[2rem]"/></button>
            </Drawer>
        </>
        
    )
}
export default Menu