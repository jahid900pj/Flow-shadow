import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    // console.log(post)
    const { message, image, _id } = post;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure >
                <img className='h-60 w-full' src={image} alt="Shoes" />
            </figure>
            <div className="card-body ">
                <div className=''>
                    <h2 className="card-title ">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className=' items-start text-start mt-2 mb-2'>{message.length > 50 ? message.slice(0, 50) + "..." : message}</p>
                    <div className="card-actions justify-between ">
                        <div className=''>
                            <div className="badge badge-outline mr-2">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                        <div className="">
                            <Link to={`/post/${_id}`}><button className="btn btn-primary btn-sm">More ..</button></Link>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default PostCard;