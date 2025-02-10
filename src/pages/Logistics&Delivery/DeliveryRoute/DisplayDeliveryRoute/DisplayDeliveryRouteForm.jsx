import React, { useState } from "react";
import Box from "../../../Box.module.css";

export default function DisplayDeliveryRouteForm() {

  return (
    <>
      <main className={Box.content}>
        <h2> Display Delivery Route </h2>
        <div className={Box.formContainer}>
          {/* Header Box */}

          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
              <label htmlFor="route-id">Route ID(Primary Key)</label>
              <input type="text" id="route-id" name="route_id" />

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
              
              <label htmlFor="source-location">Source Location</label>
              <input type="text" id="source-location" name="source_location" />
              <label htmlFor="destination-location">Destination Location</label>
              <input type="text" id="destination-location" name="service_type"/>
              <label htmlFor="route-time">Route Time</label>
              <input type="text" id="route-time" name="route_time" />
              <label htmlFor="distance">Distance</label>
              <input type="text" id="distance" name="distance" />
             
            </form>
          </div>
        </div>

      </main>
    </>
  );
}
