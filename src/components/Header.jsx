import { useNavigate } from "react-router";

function Header(props) {
    
    const navigate = useNavigate();

    return (
        <>
            <div className={"h-[8vh] w-full  top-0 flex justify-end bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "}>

<div className="text-3xl text-white font-bold m-auto ">User DashBoard</div>
<div className="text-3xl text-white font-bold m-auto" onClick={()=>{navigate("/teams")}}>Teams</div>
              
               

            </div>
        </>

    )
}
export default Header;