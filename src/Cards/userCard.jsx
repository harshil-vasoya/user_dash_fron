
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../ReduxStore/teamStore";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const TeamUser = useSelector((state) => state.teamState.users);


  return (

    
    <div className="w-full flex items-center justify-around py-2 px-4 border border-gray-500  " >


      {/* image */}
      
      <span
        className="w-full md:basis-[40%]  md:ml-2 flex items-center 
      justify-start md:gap-3 "
      >
        <input
          type="checkbox"
          className="mr-6 h-4 w-4 accent-slate-100 rounded-sm 
    focus:outline-none focus:ring-2 focus:ring-opacity-50 
    bg-transparent cursor-pointer"
          onChange={() => dispatch(addUser(user))}
        />
        <img
          src={user.avatar}
          height={35}
          width={35}
          className="rounded-full bg-gray-200"
          alt={`user-{user.id}`}
        />{" "}
        <div className="ml-3 md:ml-0 text-sm md:text-base">
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p className="text-xs text-gray-400">{user.domain}</p>

          {user.gender =="Female" ?
          <p className="text-xs text-pink-600">{user.gender}</p>:
          <p className="text-xs text-blue-400">{user.gender}</p>


          }

        </div>
      </span>

      <div className=" md:basis-[20%]">
        <button
          className="
    flex items-center justify-center
    bg-white  h-6  p-2 rounded-full text-black
     hover:bg-gray-100  font-semibold py-1 px-2  shadow 
  "
        >
          {user.available ? (
            <span
              className="flex items-center gap-2
            leading-3
            text-blue-500 text-xs md:font-bold"
            >
              Available
            </span>
          ) : (
            <span className="md:flex items-center md:gap-2 leading-none text-red-400 text-xs md:font-bold">
              Not Available
            </span>
          )}
        </button>
      </div>

      <p className="hidden md:flex md:basis-[30%] text-start">{user.email}</p>


      <Popup trigger=
                {<button> view profile </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal border rounded-lg'>
                            <div className='content w-[40vw] h-[15vh] flex p-3 border rounded-md'>
                              <div>
        <img
          src={user.avatar}
          height={35}
          width={35}
          className="rounded-full bg-gray-200"
          alt={`user-{user.id}`}
        />{" "}
        </div>
        <div>
        <div className="ml-3 md:ml-0 text-sm md:text-base">
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p className="text-xs text-gray-400">{user.domain}</p>

          {user.gender =="Female" ?
          <p className="text-xs text-pink-600">{user.gender}</p>:
          <p className="text-xs text-blue-400">{user.gender}</p>


          }

        </div>

      <div className=" md:basis-[20%]">
        <button
          className="
    flex items-center justify-center
    bg-white  h-6  p-2 rounded-full text-black
     hover:bg-gray-100  font-semibold py-1 px-2  shadow 
  "
        >
          {user.available ? (
            <span
              className="flex items-center gap-2
            leading-3
            text-blue-500 text-xs md:font-bold"
            >
              Available
            </span>
          ) : (
            <span className="md:flex items-center md:gap-2 leading-none text-red-400 text-xs md:font-bold">
              Not Available
            </span>
          )}
        </button>
      </div>

      <p className="hidden md:flex md:basis-[30%] text-start">{user.email}</p>
                              </div>
                            </div>
                            <div>
                                <button className="bg-red-500 p-2 text-white border rounded-lg" onClick=
                                    {() => close()}>
                                        Close 
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
    

    </div>
  );
};

export default UserCard;
