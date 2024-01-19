import React, { useEffect, useState } from 'react'

const Posts = () => {
    const [Posts, setPosts] = useState([])
    const [search, setsearch] = useState("")
    useEffect( () => {
        //used immediately invoked function for execution without calling it
        ;(async () => {
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
        const value = await posts.json()
        setPosts(value)
        console.log(value)
        })();
    }, [])


    let usertitle =  Posts.map((post) => (
        <div key = {post.id}>
            {post.title}
        </div>
    ))

    let filterusertitle = Posts.filter(({title}) => {
        return title.indexOf(search) >= 0;
        
     }).map((post) => (
        <div key = {post.id}>
            {post.title}
        </div>))


  return (
    <>
    <div>
       
        <input type="text" value={search} onChange={(e) => (setsearch(e.target.value))}/>
       
        
    </div>
     <div>{
        filterusertitle
    }</div></>
   
  )
}

export default Posts;