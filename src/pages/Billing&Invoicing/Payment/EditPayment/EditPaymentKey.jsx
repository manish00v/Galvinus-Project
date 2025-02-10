import React from 'react'
import Key from"../../../Key.module.css"

export default function EditPaymentKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Edit Payment - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
      
      <label htmlFor="payment-ID">Payment ID (Primary Key)</label>
              <input type="number"
                id="payment-id"
                name="payment_id"
                required=""
              />
 
      </form>
    </div>
  </div>
</main>

  )
}
