import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Logo, PostCard } from '../components'
import appwriteServices from '../appwrite/config'



function AllPosts(props) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        
    }, [])

    appwriteServices.getPosts([]).then((posts)=> {
        if (posts){
            
            setPosts(posts.documents)
        }
    })
     

    return (
        <>
        <div className='w-full py-8'>
            <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
                
            </div>
            
            
            </Container>
    </div>
        </>
    )
}

export default AllPosts
