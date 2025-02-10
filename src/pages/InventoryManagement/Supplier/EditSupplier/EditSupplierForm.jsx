import React, { useState } from "react";
import Box from "../../../../pages/Box.module.css";

export default function EditSupplierForm() {


  return (
    <>
      <main className={Box.content}>
        {/* New Heading Box with Gray Background */}
        <div className={Box.headingBox}>
          <h2>Edit Supplier</h2>
        </div>

        <div className={Box.formContainer}>
          {/* Header Box */}
          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
              <label htmlFor="supplier-id">Supplier ID (Primary Key)</label>
              <input
                type="number"
                id="supplier-id"
                name="supplier_id"
                required=""
              />
                <label htmlFor="inventory-id">Inventory ID</label>
              <input type="number" id="inventory-id" name="inventory_id" />
             
              <label htmlFor="product-id">Product ID</label>
              <input type="number" id="product-id" name="product_id" />
              
            
            </form>
          </div>

          {/* Item Box */}
          <div className={Box.box} id="box2">
            <h2>Item</h2>
            <form>
              <label htmlFor="supplier-name">Supplier Name</label>
              <input type="date" id="supplier-name" name="supplier_name" required />

              <label htmlFor="supplier-contact">Supplier Contact</label>
              <input type="date" id="supplier-contact" name="supplier_contact"  />

              <label htmlFor="supplier-mail">Supplier E-mail</label>
              <input type="text" id="supplier-mail" name="supplier_mail" required />

              <label htmlFor="lead-time">Lead Time</label>
              <input type="text" id="lead-time" name="lead_time"></input>
                
            </form>
          </div>
        </div>
      </main>
    </>
  );
}