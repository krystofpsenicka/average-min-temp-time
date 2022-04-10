import React, { useEffect, useState } from "react";
import "./customers.css";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  });

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => {
          return (
            <li key={customer.id}>
              {customer.firstName} {customer.lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Customers;
