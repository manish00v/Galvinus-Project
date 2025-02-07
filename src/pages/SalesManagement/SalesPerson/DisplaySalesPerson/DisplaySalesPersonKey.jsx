import React from 'react'
import { Link } from 'react-router-dom'
import Key from"../../../Key.module.css"

export default function DisplaySalesPersonKey() {
  return (
    <main className={Key.content}>
  <div className={Key.formContainer}>
    <div className={Key.box} id="box1">
      <h2>Display Sales Person - Mandatory Details</h2>
      <form action="/submit-form" method="POST">
      <label htmlFor="sales-person-id">Sales Person ID (Primary Key)</label>
              <input type="number"
                id="sales-person-id"
                name="sales_person_id"
                required=""
              />
        <label htmlFor="product-id">Product ID</label>
        <input
          type="text"
          id="product-id"
          name="product_id"
          required=""
        />

<label htmlFor="customer-id">Customer ID</label>
        <input
          type="text"
          id="customer-id"
          name="customer_id"
          required=""
        />


      </form>
      <div className={Key.btnContainerSubmit}>
        <button>
          <i className="fas fa-edit" />
             <Link to = "/DisplaySalesPerson"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Display Customer ID
         </Link>
        </button>
      </div>
    </div>
  </div>
</main>

  )
}
