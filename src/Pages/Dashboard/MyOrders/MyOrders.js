import React, { useEffect, useState } from "react";
import { Badge, Table } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://frozen-taiga-35843.herokuapp.com/myOrders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Package Name</th>
          <th>Address</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>{order.name}</td>
            <td>{order.title}</td>
            <td>{order.address}</td>
            <td>{order.price}</td>
            <td>
              <Badge pill bg="warning" text="dark">
                {order.status}
              </Badge>{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default MyOrders;
