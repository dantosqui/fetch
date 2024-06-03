import { useEffect, useState } from "react";
import Card from "../Card/Card";
import './userslist.css'

const UsersList = () => {
  const urlApi = "https://randomuser.me/api/?results=5";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.log("Hubo un error " + error));
  }, []);

  return (
    <div>
      <h1>Listado: </h1>
      <div id="listacards">
      

      {users.map((user,index) => (
        <Card nameCompleto={user.name.title+ " "+ user.name.first+ " "+ user.name.last} 
        email={user.email}
        username={user.login.username}
        foto={user.picture.medium}
        fotoperogrande={user.picture.large}
        address={user.location.street.name + " " + user.location.street.number}
        country={user.location.country}
        ></Card>
      ))}
      </div>
        
        
        
      
    </div>
  );
};
export default UsersList;
