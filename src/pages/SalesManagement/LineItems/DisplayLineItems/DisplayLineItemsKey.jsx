import React from 'react'

import Key from"../../../Key.module.css"

export default function DisplayLineItemsKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Display Line Item ID - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
        <label htmlFor="order-line-itemid">Line Item ID (Primary Key)</label>
        <input
          type="text"
          id="order-line-item-id"
          name="order_line_item_id"
          required=""
        />

<label htmlFor="product-id">Product ID (Primary Key)</label>
        <input
          type="text"
          id="product-id"
          name="product_id"
          required=""
        />
      </form>
      
      
    </div>
  </div>
</main>

  )
}
