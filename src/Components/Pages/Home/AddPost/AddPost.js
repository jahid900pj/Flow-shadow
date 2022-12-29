import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { json } from 'react-router-dom';
import './AddPost.css'

const AddPost = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imgHostingKey = process.env.REACT_APP_imgbb_key;
    // console.log(imgHostingKey)

    const handleAddPost = (data) => {
        // console.log(data.image[0])
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(formData => {
                // console.log(formData)
                if (formData.success) {
                    console.log(formData.data.url)
                    const postData = {
                        message: data.message,
                        image: formData.data.url
                    }

                    fetch(`http://localhost:5000/post`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(postData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('hallo')
                                reset()
                            }
                        })
                        .catch(error => console.log(error))
                }
            })


    }
    return (
        <div>
            <div className="hero min-h-screen-[50%] lg:min-h-screen bg-base-200">
                <div className=" w-full hero-content">
                    <div className="card flex-shrink-0 w-full lg:w-[600px] shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleAddPost)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea name='message'
                                        {...register('message', { required: true })}
                                        className="textarea textarea-bordered" placeholder="Message"></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Upload Image</span>
                                    </label>
                                    <input name='file'
                                        {...register('image', { required: false })}
                                        id='file-style' type="file" className="file-input file-input-bordered w-full max-w-xs " />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;