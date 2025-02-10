import React, { useState } from "react";
import Box from '../../../Box.module.css'

export default function DisplayPricingRulesForm() {

  return (
    <>
      <main className={Box.content}>
      <h2> Display Pricing Rules</h2>
        <div className={Box.formContainer}>
          {/* Header Box */}
          
          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">

                <label htmlFor="rule-id">Rule ID</label>
              <input type="text" id="rule-id" name="rule_id" />
             
              <label htmlFor="product-id">Product ID</label>
              <input type="text" id="product-id" name="product_id" />

              <label htmlFor="discount-id">Discount ID</label>
              <input type="text" id="discount-id" name="discount_id" />

             
            </form>
          </div>

          {/* Item Box */}
          <div className={Box.box} id="box2">
            <h2>Item</h2>
            <form>
            <label htmlFor="customer-group">Customer Group</label>
            <input
              type="text"
              id="customer-group"
              name="customer_group"
              required=""
            />

            <label htmlFor="region">Region</label>
            <input type="text" id="region" name="region"/>

            <label htmlFor="base-price">Base Price</label>
            <input type="number" id="base-price" name="base_price" />

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
