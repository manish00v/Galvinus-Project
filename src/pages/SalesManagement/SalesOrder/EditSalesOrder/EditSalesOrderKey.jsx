import React from 'react'
import { Link } from 'react-router-dom'
import Key from"../../../../pages/Key.module.css"

export default function EditSalesOrderKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Edit Sales Order - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
        <label htmlFor="order-line-itemid">Sales Order ID (Primary Key)</label>
        <input
          type="text"
          id="order-line-item-id"
          name="order_line_item_id"
          required=""
        />
      </form>
    
    </div>
  </div>
</main>

  )
}
