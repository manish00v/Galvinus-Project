import React from 'react'
import Key from"../../../Key.module.css"

export default function DisplayProductKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Display Sales Person - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
     
        <label htmlFor="product-id">Product ID</label>
        <input
          type="text"
          id="product-id"
          name="product_id"
          required=""
        />

        <label htmlFor="product-catogory">Product Category</label>
              <input type="number"
                id="product-catogory"
                name="product_catogory"
                required=""
              />


      </form>
    </div>
  </div>
</main>

  )
}
