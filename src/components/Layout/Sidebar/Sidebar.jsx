
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { TipsContext } from "../../../contexts/TipsContext";

const Sidebar = () => {
	const [activeMenu, setActiveMenu] = useState(null);
	const [activeSubmenu, setActiveSubmenu] = useState(null);
	const { setTips } = useContext(TipsContext);

	const toggleMenu = (menu) => {
		setActiveMenu(activeMenu === menu ? null : menu);
	};

	const toggleSubmenu = (submenu) => {
		setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
	};

	return (
		<>
			<aside className="sidebar">
				<h1>Sales and Distribution</h1>

				<ul>
					<li>
						<Link to="/">
							<i className="fas fa-home"></i><b>Home</b>
						</Link>
					</li>

					{/* Sales and Distribution */}
					<li>
						<button onClick={() => toggleMenu("sales&distribution")}>
							<i className="fa-solid fa-truck-ramp-box"></i><b>Sales and Distribution</b>
						</button>

						<ul	className={`submenu ${activeMenu === "sales&distribution" ? "active" : ""}`}>
							{/* Sales Management */}
							<li>
								<button onClick={() => toggleSubmenu("salesManagement")}>
									<i className="fa-solid fa-chart-line"></i><b>Sales Management</b>
								</button>

								{/* Submenu of Sales Management */}
								<ul	className={`subsubmenu ${activeSubmenu === "salesManagement" ? "active" : ""}`}>
									<li>
										<Link to="/salesorder" onClick={() => setTips("\"Review existing sales orders to avoid duplication before creating a new one.\"")}>
											<i className="fa-solid fa-cart-shopping"></i><b>Sales Order</b>
										</Link>
									</li>
									<li>
										<Link to="/lineitems" onClick={() => setTips("\"Ensure each line item includes essential details like product, quantity price, discounts, and taxes.\"")}>
											<i className="fas fa-tag icon-pricing"></i><b>Line Items</b>
										</Link>
									</li>
									<li>
										<Link to="/customer" onClick={() => setTips("\"Accurate and up-to-date customer information is the foundation of strong relationships and streamlined operations.\"")}>
											<i className="fa-solid fa-user"></i><b>Customer</b>
										</Link>
									</li>
									<li>
										<Link to="/salesperson" onClick={() => setTips("\"Accurate and accessible data boosts productivity, enhances client relationships, and drives sales success.\"")}>
											<i className="fa-solid fa-user-tie"></i><b>Sales Person</b>
										</Link>
									</li>
								</ul>
							</li>

							{/* Pricing and Discount */}
							<li>
								<button onClick={() => toggleSubmenu("pricing&discount")}>
									<i className="fa-solid fa-dollar-sign"></i><b>Pricing and Discount</b>
								</button>

								{/* Submenu of Pricing and Discount */}
								<ul	className={`subsubmenu ${activeSubmenu === "pricing&discount" ? "active" : ""}`}>
									<li>
										<Link to="/pricingrules" onClick={() => setTips("\"Effective pricing rules turn complexity into clarity.\"")}>
											<i className="fa-solid fa-money-check"></i><b>Pricing Rules</b>
										</Link>
									</li>
									<li>
										<Link to="/discountrules" onClick={() => setTips("\"Intelligent discount rules drive sustainable sales, not fleeting gains.\"")}>
											<i className="fa-solid fa-receipt"></i><b>Discount Rules</b>
										</Link>
									</li>
									<li>
										<Link to="/product" onClick={() => setTips("\"The heart of any ERP system lies in how it handles your product story.\"")}>
											<i className="fa-solid fa-box"></i><b>Product</b>
										</Link>
									</li>
									<li>
										<Link to="/discount" onClick={() => setTips("\"A well-placed discount can inspire loyalty; an ill-planned one can erode value.\"")}>
											<i className="fa-solid fa-percent"></i><b>Discount</b>
										</Link>
									</li>
								</ul>
							</li>

							{/* Inventory Management */}
							<li>
								<button onClick={() => toggleSubmenu("inventoryManagement")}>
									<i className="fas fa-warehouse icon-inventory"></i><b>Inventory Management</b>
								</button>

								{/* Submenu of Inventory Management */}
								<ul	className={`subsubmenu ${activeSubmenu === "inventoryManagement" ? "active" : ""}`}>
									<li>
										<Link to="/inventory" onClick={() => setTips("\"Regularly update stock levels and leverage real-time tracking to reduce carrying costs and avoid stockouts.\"")}>
											<i className="fas fa-user icon-sales"></i><b>Inventory</b>
										</Link>
									</li>
									<li>
										<Link to="/warehouse" onClick={() => setTips("\"Use optimized layouts and automated processes to maximize space and speed up operations.\"")}>
											<i className="fas fa-tag icon-pricing"></i><b>Warehouse</b>
										</Link>
									</li>
									<li>
										<Link to="/productmovement" onClick={() => setTips("\"Track every movement with precision to ensure seamless delivery and reduce handling errors.\"")}>
											<i className="fas fa-warehouse icon-inventory"></i><b>Product Movement</b>
										</Link>
									</li>
									<li>
										<Link to="/supplier" onClick={() => setTips("\"Maintain clear communication and evaluate suppliers regularly to ensue quality and reliability.\"")}>
											<i className="fas fa-file-invoice-dollar icon-billing"></i><b>Supplier</b>
										</Link>
									</li>
								</ul>
							</li>

							{/* Logistics and Delivery */}
							<li>
								<button onClick={() => toggleSubmenu("logistics&delivery")}>
									<i className="fas fa-truck icon-logistics"></i><b>Logistics and Delivery</b>
								</button>

								{/* Submenu of Logistics and Delivery */}
								<ul className={`subsubmenu ${activeSubmenu === "logistics&delivery" ? "active" : ""}`}>
								<li>
									<Link to="/shipment" onClick={() => setTips("\"Ensure every shipment is accounted for with real-time visibility to reduce errors and delays.\"")}>
										<i className="fas fa-user icon-sales"></i><b>Shipment</b>
									</Link>
								</li>
								<li>
									<Link to="/deliveryroute" onClick={() => setTips("\"Leverage route optimization to save time, reduce fuel costs, and improve delivery efficiency.\"")}>
										<i className="fas fa-tag icon-pricing"></i><b>Delivery Route</b>
									</Link>
								</li>
								<li>
									<Link to="/carrier" onClick={() => setTips("\"Partner with carriers that prioritize timely and secure deliveries to boost custormer satisfaction.\"")}>
										<i className="fas fa-warehouse icon-inventory"></i><b>Carrier</b>
									</Link>
								</li>
								<li>
									<Link to="/deliveryvehicle" onClick={() => setTips("\"Maintain a fleet tailored to your delivery needs, emphasizing fuel efficiency and capacity utilization.\"")}>
										<i className="fas fa-file-invoice-dollar icon-billing"></i><b>Delivery Vehicle</b>
									</Link>
								</li>
								</ul>
							</li>

							{/* Billing and Invoicing */}
							<li>
								<button onClick={() => toggleSubmenu("billing&invoicing")}>
									<i className="fa-solid fa-file-invoice"></i><b>Billing and Invoicing</b>
								</button>

								{/* Submenu of Billing Invoicing */}
								<ul	className={`subsubmenu ${activeSubmenu === "billing&invoicing" ? "active" : ""}`}>
									<li>
										<Link to="/invoice" onClick={() => setTips("\"Accuracy in invoicing builds trust and accelearates cash flow.\"")}>
											<i className="fas fa-user icon-sales"></i><b>Invoice</b>
										</Link>
									</li>
									<li>
										<Link to="/payment" onClick={() => setTips("\"Timely payments are the foundation of strong financial relationships.\"")}>
											<i className="fas fa-tag icon-pricing"></i><b>Payment</b>
										</Link>
									</li>
									<li>
										<Link to="/taxconfiguration" onClick={() => setTips("\"Well-configured taxes ensure compliance without complexity.\"")}>
											<i className="fas fa-warehouse icon-inventory"></i><b>Tax Configuration</b>
										</Link>
									</li>
									<li>
										<Link to="/currencyexchangerate" onClick={() => setTips("\"Keep pace with exchange rates to stay ahead in the global market\"")}>
											<i className="fas fa-file-invoice-dollar icon-billing"></i><b>Currency Exchange Rate</b>
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</li>

					<li>
						<Link to="/">
							<i className="fas fa-link"></i><b>Integration</b>
						</Link>
					</li>
					<li>
						<Link to="/">
							<i className="fas fa-chart-pie"></i><b>Reports</b>
						</Link>
					</li>
					<li>
						<Link to="/">
							<i className="fas fa-file-alt"></i><b>Document</b>
						</Link>
					</li>
				</ul>
			</aside>
		</>
	);
};

export default Sidebar;