import { useState, useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../../src/contexts/FormPageHeaderContext"
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader"

import Box from "../../../Box.module.css"



export default function EditSalesOrderForm(){
  const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);
 
  useEffect(() => {
      setBtn("Save");
      setUrl("/salesorder");          // Edit this
      setGoBackUrl("/salesorder");
      
  }, []);

  return (
    <>
    <FormPageHeader />
      <main className={Box.content}>
      <h2> Edit Sales Order</h2>
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
