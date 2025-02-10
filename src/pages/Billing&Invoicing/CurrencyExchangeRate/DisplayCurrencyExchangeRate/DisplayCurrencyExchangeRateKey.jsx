import React from 'react'
import Key from"../../../Key.module.css"

export default function DisplayCurrencyExchangeRateKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Display Currency Exchange Rate - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
     
        <label htmlFor="invoice-id">Invoice ID (Primary Key)</label>
        <input
          type="text"
          id="invoice-id"
          name="invoice_id"
          required=""
        />
 <label htmlFor="order-ID">Order ID</label>
              <input type="number"
                id="order-id"
                name="order_id"
                required=""
              />
      </form>
    </div>
  </div>
</main>

  )
}
