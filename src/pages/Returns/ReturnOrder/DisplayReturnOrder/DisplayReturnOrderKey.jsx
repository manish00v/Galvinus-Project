import React from 'react'

import Key from"../../../Key.module.css"

export default function DisplayReturnOrderKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Display Return Order - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
        <label htmlFor="return-id">Return ID (Primary Key)</label>
        <input
          type="text"
          id="return-id"
          name="return_id"
          required=""
        />

<label htmlFor="customer-id">Customer ID (Primary Key)</label>
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
