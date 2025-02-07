import React, { useState } from "react";
import Box from "../../../Box.module.css";

export default function EditCarrierForm() {
  
  return (
    <>
      <main className={Box.content}>
        <h2> Edit Carrier </h2>
        <div className={Box.formContainer}>
          {/* Header Box */}

          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
              <label htmlFor="carrier-id">Carrier ID(Primary Key)</label>
              <input type="text" id="carrier-id" name="carrier_id" />

              <label htmlFor="shipment-id">Shipment ID</label>
              <input type="text" id="shipment-id" name="shipment_id" />

              <label htmlFor="order-id">Order ID</label>
              <input type="text" id="order-id" name="order_id" />
            </form>
          </div>

          {/* Item Box */}
          <div className={Box.box} id="box2">
            <h2>Item</h2>
            <form>
              
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="service-type">Service Type</label>
              <input type="text" id="service-type" name="service_type"/>
              <label htmlFor="contact-details">Contact Details</label>
              <input type="text" id="contact-details" name="contact_details" />
              <label htmlFor="cost-structure">Cost Structure</label>
              <input type="text" id="cost-structure" name="cost_structure" />
             
            </form>
          </div>
        </div>

       
      </main>
    </>
  );
}
