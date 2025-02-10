import React, { useState } from "react";
import Box from "../../../../pages/Box.module.css";

export default function EditProductMovementForm() {


  return (
    <>
      <main className={Box.content}>
        {/* New Heading Box with Gray Background */}
        <div className={Box.headingBox}>
          <h2>Edit Product Movement</h2>
        </div>

        <div className={Box.formContainer}>
          {/* Header Box */}
          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
              <label htmlFor="movement-id">Movement ID (Primary Key)</label>
              <input
                type="number"
                id="movement-id"
                name="movement_id"
                required=""
              />
              <label htmlFor="product-id">Product ID</label>
              <input type="number" id="product-id" name="product_id" />
              
              <label htmlFor="warehouse-id">Warehouse ID</label>
              <input type="number" id="warehouse-id" name="warehouse_id" />
             
            </form>
          </div>

          {/* Item Box */}
          <div className={Box.box} id="box2">
            <h2>Item</h2>
            <form>
              <label htmlFor="inventory-id">Inventory ID</label>
              <input type="date" id="inventory-id" name="inventory_id" required />

              <label htmlFor="source-location">Source Location</label>
              <input type="date" id="source-location" name="source_location"  />

              <label htmlFor="destination-location">Destination Location</label>
              <input type="text" id="destination-location" name="destination_location" required />

              <label htmlFor="quantity">Quantity</label>
              <input type="text" id="quantity" name="quantity"></input>
                

              <label htmlFor="movement-date">Movement Date</label>
              <input type="number" id="movement-date" name="Movement_date" />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}