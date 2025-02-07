import React, { useState } from "react";
import Box from "../../../../pages/Box.module.css";

export default function CreateSalesOrderForm() {
  const [showCreateAlert, setShowCreateAlert] = useState(false);
  const [showSaveAlert, setShowSaveAlert] = useState(false);

  return (
    <>
      <main className={Box.content}>
      <h2> Create Sales Order</h2>
        <div className={Box.formContainer}>
          {/* Header Box */}
          
          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
              <label htmlFor="customer-id">Customer ID (Primary Key)</label>
              <input
                type="number"
                id="customer-id"
                name="customer_id"
                required=""
              />
              <label htmlFor="order-id">Order ID</label>
              <input type="number" id="order-id" name="order_id" />
              <label htmlFor="product-id">Product ID </label>
              <input
                type="text"
                id="product-id"
                name="product_id"
                required=""
              />
            </form>
          </div>

          {/* Item Box */}
          <div className={Box.box} id="box2">
            <h2>Item</h2>
            <form>
              <label htmlFor="order-date">Order Date</label>
              <input type="date" id="order-date" name="order_date" required />

              <label htmlFor="required-date">Required Date</label>
              <input type="date" id="required-date" name="required_date" step={1} required />

              <label htmlFor="delivery-block">Delivery Block</label>
              <input type="text" id="delivery-block" name="delivery_block" required />

              <label htmlFor="order-status">Order Status</label>
              <select id="order-status" name="order_status">
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <label htmlFor="payment-status">Payment Status</label>
              <select id="payment-status" name="payment_status">
                <option value="unpaid">Unpaid</option>
                <option value="partially_paid">Partially Paid</option>
                <option value="fully_paid">Fully Paid</option>
              </select>

              <label htmlFor="total">Total</label>
              <input type="number" id="total" name="total" />
            </form>
          </div>
        </div>

      
      </main>
    </>
  );
}
