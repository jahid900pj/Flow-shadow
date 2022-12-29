import React from 'react';

const PostDetail = ({ detail }) => {
    const { image, message } = detail;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-16">
            <div className='lg:w-[500px]'>
                <figure><img className='lg:w-[600px] lg:h-[400px]' src={image} alt="Album" /></figure>
            </div>
            <div className="card-body">
                <p className='text-start'>{message}</p>
                {/* <h2 className="card-title text-secondary">Bike Name : {title}</h2>
                <p className=''>{description}</p>
                <h5 className='text-info'>Original Price : $ {original_price}</h5>
                <h5 className='text-xl'>Resale Price : $ {resale_price}</h5>
                <p className='text-info'>location : {location}</p>
                <p className='text-info'>posted : {published_date}</p>
                {
                    verified === true ? <p className='text-info flex'>Published by : <img src="https://i.ibb.co/bQqwFst/valid-vector-icon-png-260889.jpg" className='w-6 bg-base-100' alt="" />{seller}</p> : <p className='text-info'>Published by : {seller}</p>
                } */}



                {/* <div className='md:flex md:justify-between'>
                    <div>
                        <p className='text-info '>used : {used}</p>
                        <p className='text-info'>Condition  : {condition}</p>
                        <p className='text-info'>Phone Number : {phoneNumber}</p>
                    </div>
                    <div className="card-actions justify-start mt-2">
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-primary "
                            onClick={() => setBooking(bike)}
                        > Book Now
                        </label>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default PostDetail;