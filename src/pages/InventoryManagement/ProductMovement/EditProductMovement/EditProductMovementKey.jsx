import React from 'react'
import Key from"../../../Key.module.css"

export default function EditProductMovementKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Edit Product Movement - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
        <label htmlFor="movement-id">Movement ID (Primary Key)</label>
        <input
          type="text"
          id="movement-id"
          name="movement_id"
          required=""
        />


      
      </form>

     
      
    </div>
  </div>
</main>

  )
}
