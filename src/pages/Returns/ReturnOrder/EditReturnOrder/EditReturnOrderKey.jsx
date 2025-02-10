import React from 'react'

import Key from"../../../Key.module.css"

export default function EditReturnOrderKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Edit Return Order - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
        <label htmlFor="return-id">Return ID (Primary Key)</label>
        <input
          type="text"
          id="return-id"
          name="return_id"
          required=""
        />
      </form>
      
      
    </div>
  </div>
</main>

  )
}
