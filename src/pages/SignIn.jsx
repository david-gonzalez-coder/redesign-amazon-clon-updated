import { Link } from "react-router-dom"
import store3d from "../assets/images/store3d.png"

const SignIn = () => {
    return (
        <section className="flex h-full bg-white">
            <div className=" flex-col w-[40%] h-full bg-[#FFDEB1] items-center gap-14 justify-center rounded-r-xl hidden sm:flex">
                <span className="title text-[#DC7F00] ">Not Amazon</span>
                <img src={store3d} alt="" />
            </div>
            <div className="w-full sm:w-[60%] flex flex-col p-4">
                <header className="flex justify-end items-center h-[10vh] p-8 gap-4">
                    <span>Not a member?</span>
                    <Link to="/sign-up"className="text-sky-500 rounded-lg px-4 py-2 hover:bg-sky-100 transition-all">Sign up now</Link>
                </header>
                <section className="grow flex justify-center items-center">
                    <div className="w-full max-w-[400px]">
                        <h2 className="sub-title mb-8">Sign in to Not-Amazon</h2>
                        <form className="flex flex-col gap-8 ">
                            <div>
                                <span>E-mail</span>
                                <input disabled placeholder="disabled function"className="outline-none border border-transparent focus:bg-white focus:border-slate-500 mt-2 rounded-lg px-4 py-2 w-full bg-[#f2f2f2]" type="email" />
                            </div>
                            <div>
                                <span>Password</span>
                                <input disabled placeholder="disabled function"className="outline-none border border-transparent focus:bg-white focus:border-slate-500 mt-2 rounded-lg px-4 py-2 w-full bg-[#f2f2f2]" type="password" name=""/>
                            </div>
                        </form>
                    </div>
                    
                </section>
            </div>
        </section>
    )
}
export default SignIn