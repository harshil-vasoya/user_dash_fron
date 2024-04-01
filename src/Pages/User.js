import { useEffect, useState } from "react";

import useGetAllUsers from "../hooks/useGetAllUsers";
import Usercard from "../Cards/userCard";


function User()
{
    const [useData, setUserData ,loading , setLoading, numberofuser , setNumberofUser] = useGetAllUsers();
    const [page, setPage] = useState(1);

   

    //filter filed
    const [domain, setDomain] = useState("");
    const [name, setName] = useState("");
    const [available, setAvailable] = useState(false);
    const [gender, setGender] = useState("");



    function getData()
    {
        
        fetch(`${process.env.REACT_APP_SERVER_URL}api/v1/user?page=${page}&domain=${domain}&available=${available}&gender=${gender}`)
        .then(response => response.json())
        .then((response) => {
            setUserData(response.users);
            setNumberofUser(response.totalLength);
        })
    }
    function showmore()
    {
        fetch(`${process.env.REACT_APP_SERVER_URL}api/v1/user?page=${page}&domain=${domain}&available=${available}&gender=${gender}`)
        .then(response => response.json())
        .then((response) => {
            setUserData([...useData,...response.users]);
            setNumberofUser(response.totalLength);
        })
    }

    return (
        <div>

            {/* serch */}

            <div className="border border-dark h-full w-full px-4  ">
            <div
      className="flex flex-wrap md:flex-row items-center 
    md:justify-between bg-transparent"
    >
      <input
        className="w-full bg-transparent rounded-full md:my-5 md:w-[40%] h-10 
        py-2 pl-4 pr-2 border border-blue-500  
    focus:outline-none focus:ring-2 focus:ring-opacity-50  text-black placeholder-gray-400"
        type="text"
        placeholder="Enter name or email"
        onChange={(e) => setName(e.target.value)}
      />
      {/* domain */}
      <input
        className="flex-grow md:flex-none mr-2 md:mr-0 bg-transparent rounded-full my-2 md:my-5  h-10  py-2 pl-4 pr-2 border border-blue-500 
    focus:outline-none focus:ring-2 focus:ring-opacity-50 text-black placeholder-gray-400
  "
        type="text"
        placeholder="Enter Domain"
        onChange={(e) => setDomain(e.target.value)}
      />
      {/* gender */}
      <select
        name=""
        id=""
        onChange={(e) => setGender(e.target.value)}
        className="
    rounded-md  py-1 pl-4 border border-blue-500  pr-2
    focus:outline-none focus:ring-2 focus:ring-opacity-50 text-black placeholder-gray-400
  "
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="">other</option>
      </select>
      {/* status */}
      <select
        name=""
        id=""
        onChange={(e) => setAvailable(e.target.value)}
        className="ml-auto md:ml-0 mr-2 md:mr-0
    rounded-md  py-1 pl-4 border border-blue-500 
    focus:outline-none focus:ring-2 focus:ring-opacity-50 text-black placeholder-gray-400"
      >
        <option value="all">Status</option>
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>
      <button
        onClick={getData}
        className="mr-auto md:mr-0
  text-black flex items-center justify-center
 border px-3 py-1 border-blue-500 rounded-md focus:outline-none focus:ring-0 focus:ring-opacity-50 placeholder-gray-400"
      >
       click
      </button>
    </div>
    </div>
          
          {useData.length > 0 ? (
          useData.map((user) => <Usercard user={user} key={user._id} />)
        ) : (
          <div className="h-full w-full flex flex-col justify-center items-center">
            <p>Please wait!</p>
          </div>
        )}

<button className="bg-blue-400 py-2 px-2 m-4 text-white border rounded-md" onClick={()=>{setPage(pre=>pre+1);showmore()}} >show more</button>

        </div>
    );
}
export default User;