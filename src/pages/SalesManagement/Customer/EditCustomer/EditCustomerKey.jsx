import React from 'react'

import Key from"../../../Key.module.css"

export default function EditCustomerKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Edit Customer ID - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
      <label htmlFor="customer-id">Customer ID (Primary Key)</label>
              <input type="number"
                id="customer-id"
                name="customer_id"
                required=""
              />
        <label htmlFor="product-id">Product ID</label>
        <input
          type="text"
          id="product-id"
          name="product_id"
          required=""
        />

<label htmlFor="order-id">Order ID</label>
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
