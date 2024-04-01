import { Link, useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdExitToApp,
  MdPeople,
} from "react-icons/md";
import {clearData} from "../ReduxStore/teamStore";
import { useDispatch } from "react-redux";

const buttonStyle = {
	boxShadow : "0px 19px 38px 0px rgba(0, 50, 0, 0.30), 0px 15px 12px 0px rgba(0, 50, 0, 0.22)"
}

const commonClass = "flex justify-center w-full text-xl items-center m-2 my-4 bg-white rounded-md px-4 py-2 hover:bg-[#f2fbe8] border hover:border-[#7cc529] duration-200";



const AdminSidebar = ()=>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
	

	return (
    <div className="h-full p-2 py-5 flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-between items-center   min-w-[300px] w-1/4">
      <div className="w-[70%]">
        Dashboard
          <button onClick={() => navigate("/") } className={commonClass} style={buttonStyle}>

          <MdDashboard />&nbsp;&nbsp;Dashboard
          </button>

          <button onClick={() =>{ navigate("/") ; dispatch(clearData())} } className={commonClass} style={buttonStyle}>

          <MdPeople className="text-3xl" />&nbsp;&nbsp;Teams
          </button>
       
      </div>

      <div className="w-[70%]">
        <button
			onClick={()=>{
      }}
          className="flex justify-center w-full text-xl items-center m-2 bg-white rounded-md border px-4 py-2 text-red-500 hover:border-red-600 hover:bg-red-50 duration-200"
          style={{ boxShadow: "0px 5px 15px 0px rgba(50, 0, 0, 0.35)" }}
        >
        <MdExitToApp/>  Log&nbsp;out
        </button>
      </div>
    </div>
  );
}


export default AdminSidebar;