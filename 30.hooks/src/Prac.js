import React, { useEffect, useState } from 'react'
import PostText from './Posttext';
import axios from 'axios';


export default function Prac() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        setTimeout(() => {
            getPosts();
          }, 2000);

        const getPosts =(async() => {
          const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts`
          );
          setPosts(res.data);
        });

      }, []);
    

  return (
    <div >
        <div className='header'> 🥸 Post List</div>
      {posts.length > 0 ? (
        posts.map((post) => {
            return <PostText key={post.id} post={post} />
        })) : (<h2>Loading...</h2>)}
    </div>
  )
}