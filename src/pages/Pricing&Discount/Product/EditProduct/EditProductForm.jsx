import React, { useState } from "react";
import Box from '../../../Box.module.css'

export default function EditProductForm() {
  return (
    <>
      <main className={Box.content}>
      <h2> Edit Product</h2>
        <div className={Box.formContainer}>
          {/* Header Box */}
          
          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
             
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
            <label htmlFor="prodect-name">Product Name</label>
            <input
              type="text"
              id="prodect-name"
              name="prodect_name"
              required=""
            />

            <label htmlFor="category">Category</label>
            <input type="text" id="category" name="category"/>

            <label htmlFor="description">Description</label>
            <input type="number" id="description" name="description" />

            <label htmlFor="UOM">UOM</label>  {/*Unit of Meagurement*/}
            <input type="text" id="UOM" name="UOM" />

            <label htmlFor="weight-volume">Weight/Volume</label>
            <input type="text" id="weight-volume" name="weight_volume" />
                {/* <option> <input type="text" id="net-weight" </option> */}


             <label htmlFor="stack-status">Stock Status</label>
            <select id="status" name="status">

                <option value="in-stock">In Stock</option>
                <option value="quterly_sales">Low Stock</option>
                <option value="monthly">Out of Stock</option>
                <option value="monthly">Reserved</option>
                <option value="monthly">Backordered</option>
                <option value="monthly">Damaged</option>
                <option value="monthly">Under Inspection</option>

            </select>
                
          </form>      
          </div>
        </div>
      </main>
    </>
  );
}
