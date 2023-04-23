import { Outlet } from "react-router"
import {Menu} from "./index"
import styled from "styled-components"

const Wrapper = styled.div`
    display: grid ;
    grid-template-columns: 80px 1fr ;
`

const Layout = () => {
    
    return (
        <Wrapper className="w-full min-h-screen ">
            <Menu />
            <div></div>
            <div>
                <Outlet />
            </div>
            
        </Wrapper>
    )
}
export default Layout