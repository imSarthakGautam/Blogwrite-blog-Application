import React from 'react'
import { Container, PostCard } from '../components'
import appwriteServices from '../appwrite/config'


export function AllPosts(props) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        
    }, [])

    appwriteServices.getPosts([]).then((posts)=> {
        if (posts){
            setPosts(posts)
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
