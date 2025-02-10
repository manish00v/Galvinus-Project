import React, { useState } from "react";
import Box from "../../../Box.module.css";

export default function CreateShipmentForm() {
  
  return (
    <>
      <main className={Box.content}>
        <h2> Create Shipment </h2>
        <div className={Box.formContainer}>
          {/* Header Box */}

          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">

              <label htmlFor="shipment-id">Shipment ID(Primary Key)</label>
              <input type="text" id="shipment-id" name="shipment_id" />

              <label htmlFor="order-id">Order ID(Forigen Key)</label>
              <input type="text" id="order-id" name="order_id" />

              
              <label htmlFor="carrier-id">Carrier ID</label>
              <input type="text" id="carrier-id" name="carrier_id" />

            </form>
          </div>

          {/* Item Box */}
          <div className={Box.box} id="box2">
            <h2>Item</h2>
            <form>
              
              <label htmlFor="tracking-number">Tracking Number</label>
              <input type="text" id="tracking-number" name="tracking_number" />
              <label htmlFor="shipment-status">Shipment Status</label>
              <input type="text" id="shipment-status" name="shipment_status"/>
              <label htmlFor="dispatch-date">Dispatch Date</label>
              <input type="text" id="dispatch-date" name="dispatch_date" />
              <label htmlFor="delivery-date">Estimated Delivery Date</label>
              <input type="text" id="delivery-date" name="delivery_date" />
              
             
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
