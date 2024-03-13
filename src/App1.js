import './App.css';
import { useState } from 'react';

function App1() {
  let products = [
    {
      id: 1,
      name: "Banh Beo",
      price: 200,
      quantity: 2
    },
    {
      id: 2,
      name: "Banh My",
      price: 300,
      quantity: 3
    }
  ];
  const initialProduct = 
  { id: "", name: "", price: "", quantity: "" }
  const [data, setData] = useState(products);
  const [product, setProduct] = useState(initialProduct);
  const [isUpdate, setIsUpdate] = useState(false);
  function handleChangeInput(e){
     let{name,value} = e.target;
     setProduct({...product,[name]:value});
  }
  function handleSumit(e){
    e.preventDefault();
    if(isUpdate){
      console.log("ban dang thuc hien update ha");
      let result = data.map(item=>{
        if(item.id == product.id){
          return product;
        }else{
          return item;
        }
      });
      setData(result);
    }else{
      console.log("ban dang thuc hien add ha");
      let dataSubmit = {
        ...product,
        id:data.length+1
      }
      setData([...data,dataSubmit]);
    }
    setProduct(initialProduct)
  }
  function handleDelete(id){
    let result = data.filter(item=>item.id != id);
    setData(result);
  }
  function handleEdit(item){
    setProduct(item);
    setIsUpdate(true);
  }
  return (
    <div className="container">
      <div className='row'>
        <h3>Form Product</h3>
        <form onSubmit={handleSumit} method='POST'>
          <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" className="form-control"
            onChange={handleChangeInput}
            value={product.name}
              placeholder="Enter name" name="name" />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="price" className="form-label">Price:</label>
            <input type="number" className="form-control"
             value={product.price}
             onChange={handleChangeInput}
              placeholder="Enter price" name="price" />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="quantity" className="form-label">Quantity:</label>
            <input type="number" className="form-control"
             value={product.quantity}
            onChange={handleChangeInput}
              placeholder="Enter quantity" name="quantity" />
          </div>
          <button type="submit" className="btn btn-primary">{isUpdate?'Update':'Add'}</button>
        </form>
      </div>
      <div className='row'>
        <h2>Product List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td><button className='btn btn-danger'
                     onClick={()=>handleDelete(item.id)}>Delete</button>
                     <button className='btn btn-warning'
                     onClick={()=>handleEdit(item)}>Edit</button>
                     </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
      <button className='btn btn-primary'>Click</button>
    </div>
  );
}

export default App1;
