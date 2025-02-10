
import Box from "../../../Box.module.css";

export default function CreateReturnOrderForm() {
  

  return (
    <>
      <main className={Box.content}>
      <h2> Create Return Order</h2>
        <div className={Box.formContainer}>
          {/* Header Box */}
          
          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
            <label htmlFor="return-id">
             Return ID (Primary Key)
          </label>
          <input
            type="text"
            id="return-id"
            name="return_id"
            required=""
          />
            <label htmlFor="customer-id">Customer ID </label>
          <input type="text" id="customer-id" name="customer_id" required="" />
         

          <label htmlFor="product-id">Product ID </label>
          <input type="text" id="product-id" name="product_id" required="" />
          <label htmlFor="original-order-id">Original Sales Order ID </label>
          <input type="text" id="original-order-id" name="original_order_id" required="" />
         

            </form>
          </div>

          {/* Item Box */}
          <div className={Box.box} id="box2">
            <h2>Item</h2>
            <form>
            <label htmlFor="return-date">Return Date</label>
            <input type="text" id="return-date" name="return_date" required="" />
            <label htmlFor="return-reason">Return for Reason</label>
            <input type="number" id="return-reason" name="return_reason" />

            <label htmlFor="approval-status">Approval Status</label>
              <input type="number" id="approval-status" name="approval_status" />
              <label htmlFor="return-status">Return Status</label>
              <input type="text" id="return-status" name="return-status" />

              <label htmlFor="refund-replacement-status">Refund/Replacement Status</label>
              <input type="number" id="refund-replacement-status" name="refund_replacement_status" />
 
              <label htmlFor="total-refund-amount">Total Refund Amount</label>
              <input type="number" id="total-refund-amount" name="total_refund_amount" />
               
            </form>
          </div>
        </div>

       
      </main>
    </>
  );
}
