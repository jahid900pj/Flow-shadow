import React from 'react';
import './AddPost.css'

const AddPost = () => {
    return (
        <div>
            <div className="hero min-h-screen-[50%] lg:min-h-screen bg-base-200">
                <div className=" w-full hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full lg:w-[600px] shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Upload Image</span>
                                </label>
                                <input id='file-style' type="file" className="file-input file-input-bordered w-full max-w-xs " />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;