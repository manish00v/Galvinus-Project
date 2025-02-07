import React from "react";
import Box from "../../../Box.module.css"
export default function DisplaySalesOrderForm() {
  return (
    <>
      
        
     
       <main className={Box.content}>
       <h2> Display Sales Order</h2>
         <div className={Box.formContainer}>
           <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
              <label htmlFor="order-id">Order ID (Primary Key)</label>
              <input type="text" id="order-id" name="order_id" required="" />
              <label htmlFor="customer-id">
                Product ID (Foreign Key to custmer)
              </label>
              <input
                type="text"
                id="customer-id"
                name="customer_id"
                required=""
              />
              <label htmlFor="product-id">Discount ID</label>
              <input type="text" id="product-id" name="product_id" />
            </form>
          </div>
          <div className={Box.box} id="box2">
            <h2>Item</h2>
            <form>
              <label htmlFor="order-date">Order Date</label>
              <input
                type="date"
                id="order-date"
                name="order_date"
                required=""
              />
              <label htmlFor="required-date">Required Date</label>
              <input
                type="date"
                id='required-date"'
                name="required_date"
                required=""
              />
              <label htmlFor="delivery-block">Delivery Block</label>
              <input
                type="text"
                id="delivery-block"
                name="delivery_block"
                required=""
              />
              <label htmlFor="order-status">Order Status </label>
              <input
                type="text"
                id="delivery-block"
                name="delivery_block"
                required=""
              />
              <label htmlFor="payment-status">Payment Status</label>
              <input
                type="text"
                id="delivery-block"
                name="delivery_block"
                required=""
              />
              <label htmlFor="total">Total</label>
              <input type="number" id="total" name="total" />
            </form>
          </div>
        
        </div>
      </main>
    </>
  );
}
