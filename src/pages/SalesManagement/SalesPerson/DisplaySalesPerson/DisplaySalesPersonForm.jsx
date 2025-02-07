import React, { useState } from "react";
// import "./CreateCustomer.css";
import Box from '../../../Box.module.css'

export default function DisplaySalesPersonForm() {
  const [showCreateAlert, setShowCreateAlert] = useState(false);
//   const [showSaveAlert, setShowSaveAlert] = useState(false);

  return (
    <>
      <main className={Box.content}>
      <h2> Display Sales Person</h2>
        <div className={Box.formContainer}>
          {/* Header Box */}
          
          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
              <label htmlFor="sales-person-id">Sales Person ID (Primary Key)</label>
              <input type="text" id="sales-person-id" name="sales_person_id" required />

              <label htmlFor="customer-id">Customer ID </label>
              <input type="text" id="customer-id" name="customer_id" required />

              <label htmlFor="order-id">Order ID</label>
              <input type="text" id="order-id" name="order_id" />

              <label htmlFor="product-id">Product ID</label>
              <input type="text" id="product-id" name="product_id" />

              
              
            </form>
          </div>

          {/* Item Box */}
          <div className={Box.box} id="box2">
            <h2>Item</h2>
            <form>
            <label htmlFor="sales-person-name">Sales Person Name</label>
            <input
              type="text"
              id="sales-person-name"
              name="sales_person_name"
              required=""
            />

            <label htmlFor="contact-email">Contact Email ID</label>
            <input type="text" id="contact-email" name="contact_email"/>

            <label htmlFor="phone-number">Phone Number</label>
            <input type="number" id="phone-number" name="phone_number" />

            <label htmlFor="region">Region</label>
            <input type="text" id="region" name="region" />

        

            <label htmlFor="target">Target </label>
            <select id="target" name="target">
              <option value="monthly">Monthly</option>
              <option value="quterly_sales">Quterly Target In Sales</option>
            </select>

            

          </form>      
          </div>
        </div>

       
      </main>
    </>
  );
}
