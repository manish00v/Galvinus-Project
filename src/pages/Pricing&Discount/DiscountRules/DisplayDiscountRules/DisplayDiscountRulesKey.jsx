import React from 'react'
import Key from"../../../Key.module.css"

export default function DisplayDiscountRulesKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Display Discount Rules - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
     
        <label htmlFor="discount-id">Discount ID</label>
        <input
          type="text"
          id="discount-id"
          name="discount_id"
          required=""
        />

        <label htmlFor="product-ID">Product ID</label>
              <input type="number"
                id="product-ID"
                name="product_ID"
                required=""
              />


      </form>
    </div>
  </div>
</main>

  )
}
