
import Box from "../../../Box.module.css";

export default function EditReturnLineItemsForm() {
  

  return (
    <>
      <main className={Box.content}>
      <h2> Edit Return Line Items</h2>
        <div className={Box.formContainer}>
          {/* Header Box */}
          
          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
            <label htmlFor="line-item-id">
             line item ID (Primary Key)
          </label>
          <input
            type="text"
            id="line-item-id"
            name="line_item_id"
            required=""
          />
 
          <label htmlFor="product-id">Product ID </label>
          <input type="text" id="product-id" name="product_id" required="" />
          <label htmlFor="product-name">Product Name </label>
          <input type="text" id="product-name" name="product_name" required="" />
         

            </form>
          </div>

          {/* Item Box */}
          <div className={Box.box} id="box2">
            <h2>Item</h2>
            <form>
            <label htmlFor="quantity-return">Quantity Return</label>
            <input type="text" id="quantity-return" name="quantity_return" required="" />
            <label htmlFor="return-reason">Return Reason</label>
            <input type="number" id="return-reason" name="return_reason" />
            <label htmlFor="condition-product">Condition of Product</label>
            <input type="text" id="condition-product" name="condition_product" />
            <label htmlFor="original-price">Original Price</label>
            <input type="text" id="original-price" name="original_price" />

              <label htmlFor="refund-amount">Refund Amount</label>
              <input type="number" id="refund-amount" name="refund_amount" />
              <label htmlFor="approval-status">Approval Status</label>
              <input type="number" id="approval-status" name="approval_status" />
              <label htmlFor="replacement-status">Replacement Status</label>
              <input type="number" id="replacement-status" name="replacement_status" />
            </form>
          </div>
        </div>

       
      </main>
    </>
  );
}
