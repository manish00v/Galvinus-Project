import React, { useState } from "react";
import Box from "../../../../pages/Box.module.css";

export default function EditWarehouseForm() {


  return (
    <>
      <main className={Box.content}>
        {/* New Heading Box with Gray Background */}
        <div className={Box.headingBox}>
          <h2>Edit Warehouse</h2>
        </div>

        <div className={Box.formContainer}>
          {/* Header Box */}
          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
              <label htmlFor="warehouse-id">Warehouse ID (Primary Key)</label>
              <input
                type="number"
                id="warehouse-id"
                name="warehouse_id"
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
              <label htmlFor="warehouse-name">Warehouse Name</label>
              <input type="date" id="warehouse-name" name="warehouse_name" required />

              <label htmlFor="warehouse-adress">Warehouse Adress</label>
              <input type="date" id="warehouse-address" name="warehouse_address"  />

              <label htmlFor="warehouse-capacity">Warehouse Capacity</label>
              <input type="text" id="warehouse-capacity" name="warehouse_capacity" required />

              <label htmlFor="warehouse-type">Warehouse Type </label>
              <select id="warehouse-type" name="warehouse_type">

                <option value="owned">Owned</option>
                <option value="3rd-party">3rd Party</option>
                </select>
                
            </form>
          </div>
        </div>
      </main>
    </>
  );
}