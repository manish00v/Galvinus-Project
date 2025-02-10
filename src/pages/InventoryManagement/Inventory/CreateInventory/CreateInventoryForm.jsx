import React, { useState } from "react";
import Box from "../../../../pages/Box.module.css";

export default function CreateInventoryForm() {


  return (
    <>
      <main className={Box.content}>
        {/* New Heading Box with Gray Background */}
        <div className={Box.headingBox}>
          <h2>Create Inventory</h2>
        </div>

        <div className={Box.formContainer}>
          {/* Header Box */}
          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
              <label htmlFor="inventory-id">Inventory ID (Primary Key)</label>
              <input
                type="number"
                id="inventory-id"
                name="inventory_id"
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
              <label htmlFor="location-id">Location ID</label>
              <input type="date" id="location-id" name="location_id" required />

              <label htmlFor="stock-level">Stock Level</label>
              <input type="date" id="stock-level" name="stock_level"  />

              <label htmlFor="reorder-level">Reorder Level</label>
              <input type="text" id="reorder-level" name="reorder_level" required />

              <label htmlFor="saafety-stock">Safety Stock</label>
              <input type="text" id="safety-stock" name="safety_stock"></input>
                

              <label htmlFor="lot-number">Lot Number</label>
              <input type="number" id="lot-number" name="lot_number" />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}