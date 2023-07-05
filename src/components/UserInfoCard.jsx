export default function UserInfoCard({ id, user, deleteUser }) {

  return ( 
    <>
      <div className="mainHeader">
        <div className="p-1 text-center md:flex justify-center items-center">
          <div className="flex justify-center">
            <img className="h-12 lg:h-16 w-12 lg:w-16 rounded-full" src={user.avatar_url} alt="user avatar" />
          </div>
          <div className="lg:ml-4">
            <h3 className="lg:text-xl leading-6 font-bold text-gray-900">
            {user.name}
            </h3>
            <p className="text-sm leading-5 text-gray-600">User Login ID: <span className="text-black font-semibold">@{user.login}</span></p>
            <p className="text-sm leading-5 text-gray-500">
              Repos: <span className="text-black font-semibold">{user.public_repos}</span>. User since <span className="text-black font-semibold">{user.created_at.slice(0,4)}</span>.
            </p>
          </div>
          <div className="my-2 md:my-0 md:ml-10"> 
              <a href={user.html_url} target="_blank">
                <button 
                  type='button'
                  className="profileButton"
                >
                  <span>Profile</span></button>
              </a>
          </div>
        </div>
        <div className="text-center ">
          <button type="button"
            className="deleteButton"
            onClick={()=> deleteUser(id)}
          >Delete</button>
        </div>
      </div>
    </>
  );
}