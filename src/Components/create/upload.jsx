import React, { useState } from "react";
import "./create.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// uploaded images 

function ThumbnailUpload({ onFileChange }) {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setPreview(event.target.result);
      reader.readAsDataURL(file);
    }
    onFileChange(file);
  };

  return (
    <div className="upload-image">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <div className="placeholder" style={{ display: preview ? "none" : "block" }}>
        <div className="icon">📷</div>
        <p>Upload Image</p>
      </div>
      {preview && ( <img src={preview} alt="Thumbnail Preview" className="thumbnail-preview" /> )}
    </div>
  );
}

export function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);

  // images 
  const handleImageChange = (file, index) => {
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  // description sizs
  const autoResizeTextarea = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

// back button 
  const HandleBack = () => {
    navigate("/home");
  };

  // public data 
  const HandlePublic = async (e) => {
    e.preventDefault();
    if (!title || !stock || !price || !location) {
      alert("All fields are required.");
      return;
    }

    if (isNaN(stock) || isNaN(price)) {
      alert("Stock and price must be numeric values.");
      return;
    }

    const formData = { Title: title, Description: description, Stock: Number(stock), Price: Number(price), Location: location, Files: images};

    try {
      const response = await axios.post( "https://ownfield-f0187-default-rtdb.firebaseio.com/public.json", formData );
      console.log(response.data);
         navigate("/home");
        alert("Product uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while uploading the product.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Crop Details</h2>
      </div>
      <div id="Crop-details">
        <form onSubmit={HandlePublic}>
          <div className="F-title same">
            <label className="label4" htmlFor="title"> Title (required)  </label>
            <input className="data" type="text"  name="title" id="title"  placeholder="Add a title that describes your crop" required  maxLength={100}  value={title}  onChange={(e) => setTitle(e.target.value)}  /> </div>

          <div className="F-description same">
            <label className="label4" htmlFor="description"> Description  </label>
            <textarea  className="data"  name="description"  id="description"  placeholder="Enter Product Description"  value={description} onChange={(e) => setDescription(e.target.value)}  rows={1}  maxLength={500}  onInput={autoResizeTextarea} />
          </div>

          <div className="F-Stock same">
            <label className="label4" htmlFor="Stock"> Stock (required in Kg) </label>
            <input className="data"   type="number" name="Stock" id="Stock" placeholder="Enter Stock" required value={stock}  onChange={(e) => setStock(e.target.value)} />
          </div>

          <div className="F-Price same">
            <label className="label4" htmlFor="Price">  Price (required in Rs) </label>
            <input  className="data"  type="number" name="Price" id="Price" placeholder="Enter Price for every 100kg" required value={price}  onChange={(e) => setPrice(e.target.value)}  />
          </div>

          <div className="F-Location same">
            <label className="label4" htmlFor="Location">
              Location (required)
            </label>
            <select name="Location"  className="data1" id="Location" required value={location} onChange={(e) => setLocation(e.target.value)} >
              <option value="">Select</option>
              <option value="alwar">Alwar</option>
              <option value="jaipur">Jaipur</option>
            </select>
          </div>

          <div className="thumbnail">
            <h2>Crop Images</h2>
            <div className="files">
              {[0, 1, 2, 3].map((index) => (
                <ThumbnailUpload key={index} onFileChange={(file) => handleImageChange(file, index)} />
              ))}
            </div>


            <div className="Back-Save">
              <button className="btn btn-primary" onClick={HandleBack}> Back </button>
              <button className="btn btn-secondary" type="submit"> Upload </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
