import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        axios.post('https://limitless-island-29520.herokuapp.com/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Inserted Successfully');
                reset();
            }
        })
    };
    return (
        <div className = "add-service">
            <h2>Please Add Services here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder = 'Name' />
                <textarea {...register("description")} placeholder = "Description" />
                <input type="number" {...register("price")} placeholder = 'price' />
                <input {...register("img")} placeholder ='image url' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;