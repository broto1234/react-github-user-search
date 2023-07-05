import UserInfoCard from "./UserInfoCard";

export default function UserInfoList({ users, deleteUser }) {

  return ( 
    <div className='mt-3 lg:mt-10'>
      {users.length === 0 && <p className='text-gray-400 font-semibold w-32 mx-auto'>No Search item</p>}
      {users.map(user => {
        return <UserInfoCard {...user} key={user.id} deleteUser={deleteUser}/>
      })}
    </div>
   );
}