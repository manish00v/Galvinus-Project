import React, { useState } from "react";
import Box from "../../../Box.module.css";

export default function DisplayTaxConfigurationForm() {

  return (
    <>
      <main className={Box.content}>
        <h2> Display Tax Configuration </h2>
        <div className={Box.formContainer}>
          {/* Header Box */}

          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">

            <label htmlFor="tax-id">Tax ID(Primary Key)</label>
              <input type="text-id" id="tax-id" name="tax_id" />

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
              
              <label htmlFor="region">Region</label>
              <input type="text" id="region" name="region" />
              <label htmlFor="tax-type">Tax Type</label>
              <input type="date" id="tax-type" name="tax_type"/>
              <label htmlFor="tax-percentage">Tax Percentage</label>
              <input type="text" id="tax-percentage" name="tax_percentage" />         
              
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
