import React, { useState } from "react";
import Box from "../../../Box.module.css";

export default function CreateDiscountRulesForm() {
  return (
    <>
      <main className={Box.content}>
        <h2> Create Discount Rules</h2>
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
              <label htmlFor="Application-to">Application to</label>
              <select value="Application-to" name="application_to">
                <option value="product">Product</option>
                <option value="catogory">Catogory</option>
                <option value="order-total">Order Total</option>
              </select>
              <label htmlFor="criteria">Criteria</label>{" "}
              {/* Min order Quantity */}
              <input type="text" id="criteria" name="criteria" />
              <label htmlFor="discount-type">Discount Type</label>
              <select value="discount-type" name="discount_type">
                <option value="flat">Flat</option>
                <option value="percentage">Percentage</option>
              </select>
              <label htmlFor="discount-value">Discount Value</label>
              <input type="text" id="discount-value" name="discount_value" />
              <label htmlFor="effective-date">Effective Date</label>
              <input type="text" id="effective-date" name="effective_date" />
              <label htmlFor="expiry-date">Expiry Date</label>
              <input type="text" id="expiry-date" name="expiry_date" />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
