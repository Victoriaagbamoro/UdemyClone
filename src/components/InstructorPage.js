import React, {useState,  useEffect} from 'react';
import {useForm} from 'react-hook-form'
import {CloudinaryContext, Video} from 'cloudinary-react'
import { fetchPhotos, openUploadWidget } from "./CloudinaryService";
import './InstructorPage.css'



function InstructorPage(){
    const [images, setImages] = useState([])

    const beginUpload = tag => {
    const uploadOptions = {
        cloudName: "victoria-agbamoro",
        tags: [tag, 'anImage'],
        uploadPreset: "Victoria"
    };
    openUploadWidget(uploadOptions, (error, photos) => {
        if (!error) {
        console.log(photos);
        if(photos.event === 'success'){
            setImages([...images, photos.info.public_id])
        }
        } else {
        console.log(error);
        }
    })
    }
    useEffect (() =>{
        fetchPhotos("images", setImages);
    }, []);
        const image = require('../images/teachone.jpg');
        const secStyles = {
        position: 'relative',
        backgroundImage: `linear-gradient(135deg, #50A68480 30%, #115E6780 40%),url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        borderRadius: '5px',
        top:'0' ,
        left: '0',
        height: '85vh',
        width: '100%'
        }
        const image2 = require('../images/analyst.jpg')
        const {register, handleSubmit} = useForm();
        const onSubmit = data => console.log(data)
    return(
        
        
            <div className="InstructorPage">
                <div className="" style={secStyles}>
                    <div className="headers">
                        <h2 className="heads">Make a global impact</h2>
                        <p className="paras">Create an online video course and earn money by teaching children around the world.</p>
                        <button className="btne">Become an instructor</button>
                    </div>
                
                </div>
                <div className="instructSec">
                    <h2 className="instructone">Help Children Learn around the world</h2>
                    <div className="border"></div>
                    <p className="instructtwo">Sign up as a Instructor to create content to fooster children development.</p>
                    <button className="btne">Register now</button>
                </div>
                <div>
                    <img className="analyst" src={image2} alt="analyst"></img>
                </div>
                <div className="instructSec">
                    <h2 className="instructone">With the right teachers children can learn</h2>
                    <div className="border"></div>
                    <p className="instructtwo">Sign up as a Instructor to create content to fooster children development.</p>
                    <button className="btne">Signup now</button>
                </div>
                <div className="formsec">
                    <div className="formhandle">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>First Name</label>
                            <input type="texts" ref={register} name="firstName"  placeholder="Your first name.."/>
                            <label>Second Name</label>
                            <input type="texts" ref={register} name="firstName"  placeholder="Your second name.."/>
                            <label>Course</label>
                            <input type="texts" ref={register} name="firstName"  placeholder="Course .."/>
                            <label>Course title</label>
                            <input type="texts" ref={register} name="firstName"  placeholder="Course title.."/>
                            <label>Region</label>
                            <select id="country" name="country">
                                <option value="australia">Nigeria</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                            <CloudinaryContext cloudName="victoria-agbamoro">
                                <button className="click" onClick={() => beginUpload()}>Upload Files</button>
                                {images.map(i => {
                                console.log(i)
                                return (
                                <Video key={i} publicId={i} fetch-format="auto" quality="auto" controls={true} width="1000px" />
                                
                                )})}
                                
                                <button className="submit">Submit</button>
                        
                            
                            </CloudinaryContext>
                            
                        
                        </form>
                    </div>

                    
                </div>
            </div>
    )
}

export default InstructorPage