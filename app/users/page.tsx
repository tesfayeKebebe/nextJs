import Link from 'next/link'
import React from 'react'
interface userList {
  id: number;
  name: string
}

const page = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users" )
    //{cache:'no-store'} if we don't catch data
    //{next:{revalidate:10}} refresh data every ten second
  const userLists: userList[] = await response.json();
  return (
    <div>
     <div>Users
    </div>
    {userLists.map((user)=>
    <div key={user.id}>
           <div>{user.name}    </div> 
           <div>{new Date().toLocaleString()}  
          </div>
          <div><Link href="/users/add">add</Link>  
          </div>
    </div>

      
      )}
    <div >

    </div>
      </div>

   
  )
}

export default page