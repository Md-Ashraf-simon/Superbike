import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

function ManageProducts() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://frozen-taiga-35843.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`https://frozen-taiga-35843.herokuapp.com/deleteProduct/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingProducts = products.filter((pd) => pd._id !== id);
            setProducts(remainingProducts);
          }
        });
    }
  };

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((pd) => (
          <tr key={pd._id}>
            <td>{pd._id}</td>
            <td>{pd.name}</td>
            <td>{pd.price}</td>
            <td>{pd.rating}</td>
            <td>
              <button
                onClick={() => handleDelete(pd?._id)}
                className="btn btn-danger"
              >
                DELETE
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ManageProducts;
