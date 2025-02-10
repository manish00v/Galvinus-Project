import React from 'react'
import Key from"../../../Key.module.css"

export default function DisplayDeliveryRouteKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Display Delivery Route - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
     
        <label htmlFor="invoice-id">Invoice ID (Primary Key)</label>
        <input
          type="text"
          id="invoice-id"
          name="invoice_id"
          required=""
        />
    
    <label htmlFor="order-id">Order ID </label>
        <input
          type="text"
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
