import React, { useEffect, useState } from 'react'

const Users = () => {
    const [user, setUsers] = useState([])
    const [search, setsearch] = useState("")
    useEffect( () => {
        //used immediately invoked function for execution without calling it
        ;(async () => {
        try {
            const users = await fetch("https://https://jsonplaceholder.typicode.com/users");
            const value = await users.json()
            setUsers(value)
        } catch (error) {
            throw error
        }
        console.log(user)
        })();
    }, [])


    // let usertitle =  user.map((post) => (
    //     <div key = {post.id}>
    //         {post.title}
    //     </div>
    // ))

    let filterusername = user.filter(({name}) => {
        return title.indexOf(search) >= 0;
        
     }).map((name) => (
        <div key = {post.id}>
            {post.name}
        </div>))


  return (
    <>
    <div>
       
        <input type="text" value={search} onChange={(e) => (setsearch(e.target.value))}/>
       
        
    </div>
     <div>{
        filterusername
    }</div></>
   
  )
}

export default Users;