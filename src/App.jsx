
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SalesOrderPage from "./pages/SalesManagement/SalesOrder/SalesOrderPage";
import LineItemsPage from "./pages/SalesManagement/LineItems/LineItemsPage";
import CustomerPage from "./pages/SalesManagement/Customer/CustomerPage";
import SalesPersonPage from "./pages/SalesManagement/SalesPerson/SalesPersonPage";
import PricingRulesPage from "./pages/Pricing&Discount/PricingRules/PricingRulesPage";
import DiscountRulesPage from "./pages/Pricing&Discount/DiscountRules/DiscountRulesPage";
import ProductPage from "./pages/Pricing&Discount/Product/ProductPage";
import DiscountPage from "./pages/Pricing&Discount/Discount/DiscountPage";
import InventoryPage from "./pages/InventoryManagement/Inventory/InventoryPage";
import ProductMovementPage from "./pages/InventoryManagement/ProductMovement/ProductMovementPage";
import SupplierPage from "./pages/InventoryManagement/Supplier/SupplierPage";
import WarehousePage from "./pages/InventoryManagement/Warehouse/WarehousePage";
import CarrierPage from "./pages/Logistics&Delivery/Carrier/CarrierPage";
import DeliveryRoutePage from "./pages/Logistics&Delivery/DeliveryRoute/DeliveryRoutePage";
import DeliveryVehiclePage from "./pages/Logistics&Delivery/DeliveryVehicle/DeliveryVehiclePage";
import ShipmentPage from "./pages/Logistics&Delivery/Shipment/ShipmentPage";
import CurrencyExchangeRatePage from "./pages/Billing&Invoicing/CurrencyExchangeRate/CurrencyExchangeRatePage";
import InvoicePage from "./pages/Billing&Invoicing/Invoice/InvoicePage";
import PaymentPage from "./pages/Billing&Invoicing/Payment/PaymentPage";
import TaxConfigurationPage from "./pages/Billing&Invoicing/TaxConfiguration/TaxConfigurationPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/salesorder" element={<SalesOrderPage />} />
					<Route path="/lineitems" element={<LineItemsPage />} />
					<Route path="/customer" element={<CustomerPage />} />
					<Route path="/salesperson" element={<SalesPersonPage />} />
					<Route path="/pricingrules" element={<PricingRulesPage />} />
					<Route path="/discountrules" element={<DiscountRulesPage />} />
					<Route path="/product" element={<ProductPage />} />
					<Route path="/discount" element={<DiscountPage />} />
					<Route path="/inventory" element={<InventoryPage />} />
					<Route path="/productmovement" element={<ProductMovementPage />} />
					<Route path="/supplier" element={<SupplierPage />} />
					<Route path="/warehouse" element={<WarehousePage />} />
					<Route path="/carrier" element={<CarrierPage />} />
					<Route path="/deliveryroute" element={<DeliveryRoutePage />} />
					<Route path="/deliveryvehicle" element={<DeliveryVehiclePage />} />
					<Route path="/shipment" element={<ShipmentPage />} />
					<Route path="/currencyexchangerate" element={<CurrencyExchangeRatePage />} />
					<Route path="/invoice" element={<InvoicePage />} />
					<Route path="/payment" element={<PaymentPage />} />
					<Route path="/taxconfiguration" element={<TaxConfigurationPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;