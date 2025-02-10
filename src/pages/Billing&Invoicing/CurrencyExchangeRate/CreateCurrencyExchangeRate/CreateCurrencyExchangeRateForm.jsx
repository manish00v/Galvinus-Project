import React, { useState } from "react";
import Box from "../../../Box.module.css";

export default function CreateCurrencyExchangeRateForm() {

  return (
    <>
      <main className={Box.content}>
        <h2> Create Currency Exchange Rate Form </h2>
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
              
              <label htmlFor="currency-code">Currency Code</label>
              <input type="text" id="currency-code" name="currency_code" />
              <label htmlFor="exchange-rate">Exchange Rate</label>
              <input type="text" id="exchange-rate" name="exchange_rate"/>
              <label htmlFor="effective-date">Effective Date</label>
              <input type="text" id="effective-date" name="effective_date" />
              
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
