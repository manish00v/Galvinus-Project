import React from 'react'
import Key from"../../../Key.module.css"

export default function EditShipmentKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Edit Shipment - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
     
       
    
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
