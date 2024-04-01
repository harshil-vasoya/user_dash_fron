import { useEffect, useState } from 'react';
function useGetAllUsers()
{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [numberofuser, setNumberofUser] = useState(users.length);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}api/v1/user`)
        .then(response => response.json())
        .then((response) => {
                setUsers(response.users);
                setLoading(false);
                setNumberofUser(response.totalLength);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return [users , setUsers , loading , setLoading  , numberofuser , setNumberofUser]
}
export default useGetAllUsers;