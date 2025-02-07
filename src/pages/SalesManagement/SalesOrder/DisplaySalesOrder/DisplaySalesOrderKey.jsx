import React from 'react'
import { Link } from 'react-router-dom'
import Key from"../../../Key.module.css"

export default function DisplaySalesOrderKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Display Sales Order - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
        <label htmlFor="order-line-itemid">Sales Order ID (Primary Key)</label>
        <input
          type="text"
          id="order-line-item-id"
          name="order_line_item_id"
          required=""
        />

<label htmlFor="customer-id">Customer ID </label>
        <input
          type="text"
          id="customer-id"
          name="customer_id"
          required=""
        />
      
      </form>

     
      
    </div>
  </div>
</main>

  )
}
