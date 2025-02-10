import React from 'react'

import Key from"../../../Key.module.css"

export default function DisplayReturnLineItemsKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Display Return Line Item ID - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
        <label htmlFor="line-item-id">Line Item ID (Primary Key)</label>
        <input
          type="text"
          id="line-item-id"
          name="line_item_id"
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
