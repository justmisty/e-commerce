import React, { useState } from "react";
import "./AddProduct.css";
import axios from "axios";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";

const AddProduct = ({ url }) => {
  // manage state for image upload
  const [image, setImage] = useState(false);

  // manage state for data change
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  // function for handling data changes
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // submit addProduct form to backend
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className='add'>
      <form onSubmit={onSubmitHandler} className='flex-col'>
        <div className='image-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=''
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type='file'
            id='image'
            hidden
            required
          />
        </div>
        <div className='product-name flex col'>
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type='text'
            name='name'
            placeholder='type name here'
            required
          />
        </div>
        <div className='product-description flex-col'>
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name='description'
            rows='6'
            placeholder='type description here'
            required
          ></textarea>
        </div>
        <div className='category-price'>
          <div className='category flex-col'>
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name='category'
            >
              <option value='Salad'>Salad</option>
              <option value='Rolls'>Rolls</option>
              <option value='Deserts'>Deserts</option>
              <option value='Sandwich'>Sandwich</option>
              <option value='Cake'>Cake</option>
              <option value='Pure Veg'>Pure Veg</option>
              <option value='Pasta'>Pasta</option>
              <option value='Noodles'>Noodles</option>
            </select>
          </div>
          <div className='price flex-col'>
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type='Number'
              name='price'
              placeholder='$20'
            />
          </div>
        </div>
        <button className='add-btn' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
