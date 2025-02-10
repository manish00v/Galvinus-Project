import React from 'react'
import Key from"../../../Key.module.css"

export default function DisplayTaxConfigurationKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Display Tax Configuration - Mandatory Details</h2>
      <form action="/submit-form" method="POST">

      <label htmlFor="tax-id">Tax ID (Primary Key)</label>
              <input type="number"
                id="tax-id"
                name="tax_id"
                required=""
              />
     
        <label htmlFor="invoice-id">Invoice ID </label>
        <input
          type="text"
          id="invoice-id"
          name="invoice_id"
          required=""
        />
 
      </form>
    </div>
  </div>
</main>

  )
}
