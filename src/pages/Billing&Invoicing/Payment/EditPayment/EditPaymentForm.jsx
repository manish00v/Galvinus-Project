import React, { useState } from "react";
import Box from "../../../Box.module.css";

export default function EditPaymentForm() {

  return (
    <>
      <main className={Box.content}>
        <h2> Edit Payment Form </h2>
        <div className={Box.formContainer}>
          {/* Header Box */}

          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">

            <label htmlFor="payment-id">Payment ID(Primary Key)</label>
              <input type="text" id="payment-id" name="payment_id" />

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
              
              <label htmlFor="amount-paid">Amount Paid</label>
              <input type="text" id="amount-paid" name="amount_paid" />
              <label htmlFor="payment-date">Payment Date</label>
              <input type="date" id="payment-date" name="payment_date"/>
              <label htmlFor="payment-mode">Payment Mode</label>
              <input type="text" id="payment-mode" name="payment_mode" />
              <label htmlFor="transaction-ref-number">Transaction Ref Number</label>
              <input type="number" id="transaction-ref-number" name="transaction_ref_number"/>
             
              
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
