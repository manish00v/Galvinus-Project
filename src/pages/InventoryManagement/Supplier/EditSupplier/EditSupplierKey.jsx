import React from 'react'
import Key from"../../../Key.module.css"

export default function EditSupplierKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Edit Supplier - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
        <label htmlFor="Supplier-id">Supplier ID (Primary Key)</label>
        <input
          type="text"
          id="supplier-id"
          name="supplier_id"
          required=""
        />
      
      </form>

     
      
    </div>
  </div>
</main>

  )
}
