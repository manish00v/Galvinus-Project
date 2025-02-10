import React, { useState } from "react";
import Box from "../../../Box.module.css";

export default function CreateDiscountForm() {

  return (
    <>
      <main className={Box.content}>
        <h2> Create Discount </h2>
        <div className={Box.formContainer}>
          {/* Header Box */}

          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
              <label htmlFor="discount-id">Discount ID(Primary Key)</label>
              <input type="text" id="discount-id" name="discount_id" />

              <label htmlFor="product-id">Product ID</label>
              <input type="text" id="product-id" name="product_id" />
            </form>
          </div>

          {/* Item Box */}
          <div className={Box.box} id="box2">
            <h2>Item</h2>
            <form>
              
              <label htmlFor="discount-criteria">Discount Criteria</label>
              <input type="text" id="discount-criteria" name="discount_criteria" />
              <label htmlFor="product-discount">Product Discount</label>
              <input type="text" id="product-discount" name="product_discount"/>
              <label htmlFor="Customer discount">Customer Discount</label>
              <input type="text" id="customer-discount" name="Customer_discount" />
              <label htmlFor="discount-value">Discount Value</label>
              <input type="text" id="discount-value" name="discount_value" />
              <label htmlFor="discount-eligibility">Discount Eligibility Condition</label>
              <input type="text" id="discount-eligibility" name="discount_eligibility" />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
