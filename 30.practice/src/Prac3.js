import React, { useEffect, useState } from 'react'
import PostText from './PostText';
import axios from 'axios';


// const fakePosts = [
//     {
//       id: 1,
//       title:
//         "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
//     },
//     {
//       id: 2,
//       title: "qui est esse",
//       body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
//     },
//     {
//       id: 3,
//       title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//       body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
//     },
//     {
//       id: 4,
//       title: "eum et est occaecati",
//       body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
//     },
//     {
//       id: 5,
//       title: "nesciunt quas odio",
//       body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",
//     },
//     {
//       id: 6,
//       title: "dolorem eum magni eos aperiam quia",
//       body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
//     },
//     {
//       id: 7,
//       title: "magnam facilis autem",
//       body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas",
//     },
//     {
//       id: 8,
//       title: "dolorem dolore est ipsam",
//       body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae",
//     },
//     {
//       id: 9,
//       title: "nesciunt iure omnis dolorem tempora et accusantium",
//       body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas",
//     },
//     {
//       id: 10,
//       title: "optio molestias id quia eum",
//       body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error",
//     },
//   ];

export default function Prac3() {

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
        // return <PostItem key={post.id} post = {post.id} />
        })) : (<h2>Loading...</h2>)}
    </div>
  )
}



///////-----------------------------------------

// import React, { useEffect ,useState } from 'react'

// const PostList = () => {
//   const [posts, setPosts]=useState([]);
//   const fakePosts = [
//     {
//         id: 1,
//         title: "GJNHDFKJNl mkdjsd jsdk",
//         body: "sdklfjsdklfjsd lskdfj sldkjf slkdjf lksdfj sldkjf sldkjf sldkjf sldkjf sdlfkj"
//     },
//     {
//         id: 2,
//         title: "ASDJKLFSDF JNl sdjk sdf",
//         body: "sdkjflk jsdklf jlsdkjf lksdjf lskdjf lskdjf sldkjf lsdjkf sldkjf slkdfj"
//     },
//     {
//         id: 3,
//         title: "DFLKJWEF JLKJ lsdjk lsdj",
//         body: "sdkjf lsdkfj lskdfj lskdjl lskdjf lskdfj lskdf jlkd sldkfj lskdjf"
//     },
//     {
//         id: 4,
//         title: "POIUYTRDFGHJK Lkjl ksd",
//         body: "sdlfkj sldkjf sldkjf lksjd lksdfj lskdjf sldkjf lsdjkf slkdjf"
//     },
//     {
//         id: 5,
//         title: "QWERTYUIOP Zxcv bnm",
//         body: "lksdfj sldkjf lksjd lskdjf slkdjf lskdfj lskd jf lsdjkf"
//     },
//     {
//         id: 6,
//         title: "ZXCVBNM Mnbvcx zxcv",
//         body: "sldkjf sldkjf sldkjf sldkfj lskd jfkldjf lksjd lsdjk lksdj"
//     },
//     {
//         id: 7,
//         title: "PLMNBVCXZ Poiu",
//         body: "lkjd slkdj lskdfj lskjd lsdjkl skdfj sldkjf lskdj lksd"
//     },
//     {
//         id: 8,
//         title: "ASDFGHJKL Qwert",
//         body: "sdkj lksdfj lsdjkl sldkjf lksdjf slkdfj sldkjf sldkfj lskdf"
//     },
//     {
//         id: 9,
//         title: "MNBVCXZ Aasdf",
//         body: "sdjkf lksjd lksdj lskdfj lskdf lksd lksdjf sldkf lsdjk"
//     },
//     {
//         id: 10,
//         title: "QWERTYUI Opasdf",
//         body: "sdklj lsdjf lskdf lksdjf lskdf sldkjf lskdj lskdjf lsdjf"
//     }];

//   useEffect(()=>{
//     setTimeout(()=>{
//       setPosts(fakePosts);
//     }, 2000);
//   },[]);


//   return (
//     <>
//       <div className='header'> <p>PostList</p> </div>
//       <div className='post-list'>
//         {posts.map((value)=>{ return (
//           <div className='post-wrapper'>
//               <p className='post-title'><span className='post-title-postno'>NO.{value.id}</span> - <span className='post-title-title'>{value.title}</span></p>
//               <p className='post-body'>{value.body}</p>
//           </div>);
//         })}
//       </div>
//     </>
//   )
// }

// export default PostList


