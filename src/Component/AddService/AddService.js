import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
const AddService = () => {
  const handleaddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.servicename.value;
    const Price = form.Price.value;
    const ImgLink = form.ImgLink.value;
    const description = form.description.value;


    const addService = {
      name: name,
      price: Price,
      img: ImgLink,
      description,
    }

    fetch('https://sports-server.vercel.app/sports', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',

      },
      body: JSON.stringify(addService)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast.success('Add Service submit Succesfully', { autoClose: 500 })
          form.reset();

        }
      })
      .catch(er => console.error(er));

  }
  useEffect(()=>{
    document.title="Add Service"
  })
  return (
    <>
      <h2 className='text-2xl text-center font-bold'>Add Your service</h2>

      <div className="w-60 mx-auto mt-6">
        <form action="" onSubmit={handleaddService}>
          <label for="name">Team Name:</label>
          <input type="text" name="servicename" placeholder="Service Name" className="input input-bordered w-full max-w-xs" /><br></br>
          <label for="price">Price:</label>
          <input type="text" name="Price" placeholder="Price" className="input input-bordered w-full max-w-xs" /><br></br>
          <label for="price">ImgLink:</label>
          <input type="text" name="ImgLink" placeholder="ImgLink" className="input input-bordered w-full max-w-xs" /><br></br>
          <label for="review">Description:</label>
          <textarea className="textarea  input-bordered w-full max-w-xs" placeholder="description" name="description"></textarea><br></br>
          <input type="submit" value="Submit" className='btn btn-primary bg-cyan-400' />
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default AddService;