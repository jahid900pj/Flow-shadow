import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostDetail from '../PostDetail/PostDetail';

const PostDetails = () => {
    const postDetails = useLoaderData()
    console.log(postDetails)
    return (
        <div className=' bg-base-200 pt-10 pb-10'>
            <div className='max-w-[1340px] mx-auto'>
                <div className='gap-8'>

                    {
                        postDetails.map(detail => <PostDetail
                            key={detail._id}
                            detail={detail}
                        ></PostDetail>)
                    }

                </div>
            </div>
        </div>

    );
};

export default PostDetails;