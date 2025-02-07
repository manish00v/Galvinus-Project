import React from 'react'
import { Link } from 'react-router-dom'
import Key from"../../../Key.module.css"

export default function EditLineItemsKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Edit Line Item ID - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
        <label htmlFor="order-line-itemid">Line Item ID (Primary Key)</label>
        <input
          type="text"
          id="order-line-item-id"
          name="order_line_item_id"
          required=""
        />
      </form>
      <div className={Key.btnContainerSubmit}>
        <button>
          <i className="fas fa-edit" />
             <Link to = "/EditLineItems"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Edit Line Items
         </Link>
        </button>
      </div>
    </div>
  </div>
</main>

  )
}
