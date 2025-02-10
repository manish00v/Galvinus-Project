import React from 'react'
import Key from"../../../Key.module.css"

export default function EditPricingRulesKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Edit Pricing Rules - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
     
        <label htmlFor="rule-id">Rule ID</label>
        <input
          type="text"
          id="rule-id"
          name="rule_id"
          required=""
        />

       
      </form>
    </div>
  </div>
</main>

  )
}
