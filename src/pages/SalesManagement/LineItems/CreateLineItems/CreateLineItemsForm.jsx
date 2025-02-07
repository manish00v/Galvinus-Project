
import Box from "../../../Box.module.css";

export default function CreateLineItemsForm() {
  

  return (
    <>
      <main className={Box.content}>
      <h2> Create Line Items</h2>
        <div className={Box.formContainer}>
          {/* Header Box */}
          
          <div className={Box.box} id="box1">
            <h2>Header</h2>
            <form action="/submit-form" method="POST">
            <label htmlFor="order-line-itemid">
            Order line item ID (Primary Key)
          </label>
          <input
            type="text"
            id="order-line-item-id"
            name="order_line_item_id"
            required=""
          />
          <label htmlFor="order-id">Order ID</label>
          <input type="text" id="order-id" name="order_id" />
          <label htmlFor="product-id">Product ID </label>
          <input type="text" id="product-id" name="product_id" required="" />
          <label htmlFor="costomer-id">Customer ID </label>
          <input type="text" id="costomer-id" name="costomer_id" required="" />
         

            </form>
          </div>

          {/* Item Box */}
          <div className={Box.box} id="box2">
            <h2>Item</h2>
            <form>
            <label htmlFor="quantity">Quantity</label>
            <input type="text" id="quantity" name="quantity" required="" />
            <label htmlFor="unit-price">Unit Price</label>
            <input type="number" id="unit-price" name="unit_price" step={1} />
            <label htmlFor="discount">Discount (%)</label>
            <input type="text" id="discount" name="discount" />
            <label htmlFor="tax">Tax (%)</label>
            <input type="text" id="tax" name="tax" />

              <label htmlFor="total">Total</label>
              <input type="number" id="total" name="total" />
            </form>
          </div>
        </div>

       
      </main>
    </>
  );
}
