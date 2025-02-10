import React, { useState } from "react";
import Box from "../../../Box.module.css";

export default function DisplayDeliveryVehicleForm() {
  
  return (
    <>
      <main className={Box.content}>
        <h2> Display Delivery Vehicle </h2>
        <div className={Box.formContainer}>
          {/* Header Box */}

          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
              <label htmlFor="vehicle-id">Vehicle ID(Primary Key)</label>
              <input type="text" id="vehicle-id" name="vehicle_id" />

              <label htmlFor="shipment-id">Shipment ID</label>
              <input type="text" id="shipment-id" name="shipment_id" />

              <label htmlFor="order-id">Order ID</label>
              <input type="text" id="order-id" name="order_id" />

              
              <label htmlFor="carrier-id">Carrier ID</label>
              <input type="text" id="carrier-id" name="carrier_id" />

            </form>
          </div>

          {/* Item Box */}
          <div className={Box.box} id="box2">
            <h2>Item</h2>
            <form>
              
              <label htmlFor="vehicle-type">Vehicle Type</label>
              <input type="text" id="vehicle-type" name="vehicle_type" />
              <label htmlFor="vehicle-capacity">Vehicle Capacity</label>
              <input type="text" id="vehicle-capacity" name="vehicle_capacity"/>
              <label htmlFor="assigned-driver">Assigned Driver</label>
              <input type="text" id="assigned-driver" name="assigned_driver" />
              
             
            </form>
          </div>
        </div>

       
      </main>
    </>
  );
}
