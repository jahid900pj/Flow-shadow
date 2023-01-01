import React from 'react';
import { useQuery } from '@tanstack/react-query'
import PostCard from '../PostCard/PostCard';
import Loading from '../../../Shared/Loading/Loading';

const PostCards = () => {

    const { data: posts = [], isLoading } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await fetch(`https://shadow-server.vercel.app/posts`)
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        <Loading></Loading>
    }


    return (
        <div className='bg-base-200 pb-10'>
            <div className='text-start w-10/12 mx-auto mb-12 pt-5'>
                <h3 className='text-xl font-bold text-primary uppercase'> All post</h3>
            </div>
            <div className='lg:w-10/12 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>

                {
                    posts.map(post =>
                        <PostCard
                            key={post._id}
                            post={post}>
                        </PostCard>)
                }
            </div>
        </div>
    );
};

export default PostCards;