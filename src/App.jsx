import { useState } from "react"
import UserForm from "./components/UserForm"
import UserInfoList from "./components/UserInfoList"

export default function App() {

  const [users, setUsers] = useState([]);

  const addNewUser = user => {
    setUsers( newUsers => {
      return [{id: crypto.randomUUID(), user}, ...newUsers,]
    })
  }

  const deleteUser = id => {
    setUsers( newUsers => {
      return newUsers.filter( user => user.id !== id)
    })
  }

  return (
    <>
      <div className="githubHeading">Search a GitHub User</div>
      <UserForm onSubmit={addNewUser}/>
      <UserInfoList users = {users} deleteUser = {deleteUser} />
    </>
  )
}