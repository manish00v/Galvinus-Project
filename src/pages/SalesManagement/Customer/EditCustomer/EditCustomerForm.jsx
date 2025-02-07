import React, { useState } from "react";

import Box from '../../../Box.module.css'

export default function EditCustomerForm() {
  

  return (
    <>
      <main className={Box.content}>
      <h2> Edit Customer Details</h2>
        <div className={Box.formContainer}>
          {/* Header Box */}
          
          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
              <label htmlFor="order-id">Order ID (Primary Key)</label>
              <input type="text" id="order-id" name="order_id" required />

              <label htmlFor="customer-id">Product ID (Foreign Key to customer)</label>
              <input type="text" id="customer-id" name="customer_id" required />

              <label htmlFor="product-id">Discount ID</label>
              <input type="text" id="product-id" name="product_id" />
            </form>
          </div>

          {/* Item Box */}
          <div className={Box.box} id="box2">
            <h2>Item</h2>
            <form>
            <label htmlFor="customer-name">Customer Name</label>
            <input
              type="text"
              id="customer-name"
              name="customer_name"
              required=""
            />

            <label htmlFor="email">Email ID</label>
            <input type="text" id="email" name="email"/>

            <label htmlFor="phone-number">Phone Number</label>
            <input type="number" id="phone-number" name="phone_number" />

            <label htmlFor="billing-address">Billing Address</label>
            <input type="text" id="billing-address" name="billing_address" />

            <label htmlFor="shipping-address">Shipping Address</label>
            <input
              type="text"
              id="shipping-address"
              name="shipping_address"
            />

            <label htmlFor="customer-group">Customer group </label>
            <select id="customer-group" name="customer_group">
              <option value="whole-sale">Whole Sale</option>
              <option value="retail">Retail</option>
            </select>

            <label htmlFor="credit-limit">Credit Limit</label>
            <input type="text" id="credit-limit" name="credit_limit" />

            <label htmlFor="status">Status</label>
            <select id="status" name="status">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

          </form>      
          </div>
        </div>

       
      </main>
    </>
  );
}
