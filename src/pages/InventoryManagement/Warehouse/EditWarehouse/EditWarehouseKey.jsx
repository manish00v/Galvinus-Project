import React from 'react'
import Key from"../../../Key.module.css"

export default function EditwarehouseKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Edit Warehouse - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
        <label htmlFor="warehouse-id">Warehouse ID (Primary Key)</label>
        <input
          type="text"
          id="warehouse-id"
          name="warehouse_id"
          required=""
        />
      </form> 
    </div>
  </div>
</main>

  )
}
