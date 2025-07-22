import { useState } from "react";

export default function UserForm({ onSubmit }) {

  const [user, setUser] = useState('')
  
  async function handleSubmit(event){
    event.preventDefault();

    const response = await fetch(`https://api.github.com/users/${user}`)

    if (response.status === 200) {
      const data = await response.json()
      onSubmit(data)
      setUser('')
    } else {
      alert('Username not found.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto px-2 md:px-0">
      <div className="mt-4 md:mt-10 flex">
        <input 
          className="form-input block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          name = 'user'
          value={user}
          onChange={e => setUser(e.target.value)}
          placeholder = "Write your github user Id"          
        />
        <button type="submit" className="ml-2 py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none ">
          Search</button>
      </div>
    </form>
  )
}