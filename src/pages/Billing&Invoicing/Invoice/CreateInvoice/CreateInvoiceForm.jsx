import React, { useState } from "react";
import Box from "../../../Box.module.css";

export default function CreateInvoiceForm() {

  return (
    <>
      <main className={Box.content}>
        <h2> Create Invoice Form </h2>
        <div className={Box.formContainer}>
          {/* Header Box */}

          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
              <label htmlFor="invoice-id">Invoice ID(Primary Key)</label>
              <input type="text" id="invoice-id" name="invoice_id" />

              <label htmlFor="order-id">Order ID</label>
              <input type="text" id="order-id" name="order_id" />

              <label htmlFor="customer-id">Customer ID</label>
              <input type="text" id="customer-id" name="customer_id" />
            </form>
          </div>

          {/* Item Box */}
          <div className={Box.box} id="box2">
            <h2>Item</h2>
            <form>
              
              <label htmlFor="invoice-date">Invoice Date</label>
              <input type="text" id="invoice-date" name="invoice_date" />
              <label htmlFor="total-amount">Total Amount</label>
              <input type="text" id="total-amount" name="total_amount"/>
              <label htmlFor="tax">Tax</label>
              <input type="text" id="tax" name="tax" />
              <label htmlFor="payment-status">Payment Status</label>
              <select id="payment-status" name="payment_status">
                <option value="unpaid">Unpaid</option>
                <option value="partially_paid">Partially Paid</option>
                <option value="fully_paid">Fully Paid</option>
              </select>
              
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
