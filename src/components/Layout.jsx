
import { Outlet, } from "react-router"

import {Menu} from "./index"


const Layout = () => {
    
    return (
        <div className="gap-4 sm:gap-0 grid-rows-[80px,1fr] sm:grid-rows-1 grid-cols-1 sm:grid-cols-[80px,1fr] grid grid w-full min-h-screen ">
            <Menu />
            <div></div>
            <div>
                <Outlet />
            </div>
            
        </div>
    )
}
export default Layout