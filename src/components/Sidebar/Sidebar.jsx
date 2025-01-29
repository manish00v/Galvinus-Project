import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
	const [activeMenu, setActiveMenu] = useState(null);
	const [activeSubmenu, setActiveSubmenu] = useState(null);
	const [tips, setTips] = useState("");

	const toggleMenu = (menu) => {
		setActiveMenu(activeMenu === menu ? null : menu);
	};

	const toggleSubmenu = (submenu) => {
		setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
	};

	return (
		<div>
			<aside className="sidebar">
				<h1>Sales and Distribution</h1>

				<ul>
					<li>
						<a href="/home">
						<i className="fas fa-home"></i>Home
						</a>
					</li>

					{/* Sales and Distribution */}
					<li>
						<a onClick={() => toggleMenu("sales&distribution")}>
							<i class="fa-solid fa-boxes-stacked"></i>Sales and Distribution
						</a>

						<ul	className={`submenu ${activeMenu === "sales&distribution" ? "active" : ""}`}>
							<li>
								<a onClick={() => toggleSubmenu("salesManagement")}>
									<i class="fa-solid fa-chart-line"></i>Sales Management
								</a>

								{/* Submenu of Sales Management */}
								<ul	className={`subsubmenu ${activeSubmenu === "salesManagement" ? "active" : ""}`}>
									<li>
										<a onClick={() => setTips("\"Review existing sales orders to avoid duplication before creating a new one.\"")}>
											<i class="fa-solid fa-cart-shopping"></i>Sales Order
										</a>
									</li>
									<li>
										<a onClick={() => setTips("\"Ensure each line item includes essential details like product, quantity price, discounts, and taxes.\"")}>
											<i className="fas fa-tag icon-pricing"></i>Line Items
										</a>
									</li>
									<li>
										<a onClick={() => setTips("\"Accurate and up-to-date customer information is the foundation of strong relationships and streamlined operations.\"")}>
											<i class="fa-solid fa-user"></i>Customer
										</a>
									</li>
									<li>
										<a onClick={() => setTips("\"Accurate and accessible data boosts productivity, enhances client relationships, and drives sales success.\"")}>
											<i class="fa-solid fa-user-tie"></i>Sales Person
										</a>
									</li>
								</ul>
							</li>

							<li>
								<a onClick={() => toggleSubmenu("pricing&discount")}>
									<i class="fa-solid fa-dollar-sign"></i>Pricing and Discount
								</a>

								{/* Submenu of Pricing and Discount */}
								<ul	className={`subsubmenu ${activeSubmenu === "pricing&discount" ? "active" : ""}`}>
									<li>
										<a onClick={() => setTips("\"Effective pricing rules turn complexity into clarity.\"")}>
											<i class="fa-solid fa-money-check"></i>Pricing Rules
										</a>
									</li>
									<li>
										<a onClick={() => setTips("\"Intelligent discount rules drive sustainable sales, not fleeting gains.\"")}>
											<i class="fa-solid fa-receipt"></i>Discount Rules
										</a>
									</li>
									<li>
										<a onClick={() => setTips("\"The heart of any ERP system lies in how it handles your product story.\"")}>
											<i class="fa-solid fa-box"></i>Product
										</a>
									</li>
									<li>
										<a onClick={() => setTips("\"A well-placed discount can inspire loyalty; an ill-planned one can erode value.\"")}>
											<i class="fa-solid fa-percent"></i>Discount
										</a>
									</li>
								</ul>
							</li>

							<li>
								<a onClick={() => toggleSubmenu("inventoryManagement")}>
									<i className="fas fa-warehouse icon-inventory"></i>Inventory Management
								</a>

								{/* Submenu of Inventory Management */}
								<ul	className={`subsubmenu ${activeSubmenu === "inventoryManagement" ? "active" : ""}`}>
									<li>
										<a onClick={() => setTips("\"Regularly update stock levels and leverage real-time tracking to reduce carrying costs and avoid stockouts.\"")}>
											<i className="fas fa-user icon-sales"></i>Inventory
										</a>
									</li>
									<li>
										<a onClick={() => setTips("\"Use optimized layouts and automated processes to maximize space and speed up operations.\"")}>
											<i className="fas fa-tag icon-pricing"></i>Warehouse
										</a>
									</li>
									<li>
										<a onClick={() => setTips("\"Track every movement with precision to ensure seamless delivery and reduce handling errors.\"")}>
											<i className="fas fa-warehouse icon-inventory"></i>Product Movement
										</a>
									</li>
									<li>
										<a onClick={() => setTips("\"Maintain clear communication and evaluate suppliers regularly to ensue quality and reliability.\"")}>
											<i className="fas fa-file-invoice-dollar icon-billing"></i>Supplier
										</a>
									</li>
								</ul>
							</li>

							<li>
								<a onClick={() => toggleSubmenu("billing&invoicing")}>
									<i class="fa-solid fa-file-invoice"></i>Billing and Invoicing
								</a>

								{/* Submenu of Billing Invoicing */}
								<ul	className={`subsubmenu ${activeSubmenu === "billing&invoicing" ? "active" : ""}`}>
									<li>
										<a onClick={() => setTips("\"Accuracy in invoicing builds trust and accelearates cash flow.\"")}>
											<i class="fas fa-user icon-sales"></i>Invoice
										</a>
									</li>
									<li>
										<a onClick={() => setTips("\"Timely payments are the foundation of strong financial relationships.\"")}>
											<i class="fas fa-tag icon-pricing"></i>Payment
										</a>
									</li>
									<li>
										<a onClick={() => setTips("\"Well-configured taxes ensure compliance without complexity.\"")}>
											<i class="fas fa-warehouse icon-inventory"></i>Tax Configuration
										</a>
									</li>
									<li>
										<a onClick={() => setTips("\"Keep pace with exchange rates to stay ahead in the global market\"")}>
											<i class="fas fa-file-invoice-dollar icon-billing"></i>Currency Exchange Rate
										</a>
									</li>
								</ul>
							</li>

							<li>
								<a onClick={() => toggleSubmenu("logistics&delivery")}>
									<i class="fas fa-truck icon-logistics"></i>Logistics and Delivery
								</a>

								{/* Submenu of Logistics and Delivery */}
								<ul className={`subsubmenu ${activeSubmenu === "logistics&delivery" ? "active" : ""}`}>
								<li>
									<a onClick={() => setTips("\"Ensure every shipment is accounted for with real-time visibility to reduce errors and delays.\"")}>
										<i class="fas fa-user icon-sales"></i>Shipment
									</a>
								</li>
								<li>
									<a onClick={() => setTips("\"Leverage route optimization to save time, reduce fuel costs, and improve delivery efficiency.\"")}>
										<i class="fas fa-tag icon-pricing"></i>Delivery Route
									</a>
								</li>
								<li>
									<a onClick={() => setTips("\"Partner with carriers that prioritize timely and secure deliveries to boost custormer satisfaction.\"")}>
										<i class="fas fa-warehouse icon-inventory"></i>Carrier
									</a>
								</li>
								<li>
									<a onClick={() => setTips("\"Maintain a fleet tailored to your delivery needs, emphasizing fuel efficiency and capacity utilization.\"")}>
										<i class="fas fa-file-invoice-dollar icon-billing"></i>Delivery Vehicle
									</a>
								</li>
								</ul>
							</li>
						</ul>
					</li>

					<li>
						<a href="/">
							<i className="fas fa-link"></i>Integration
						</a>
					</li>
					<li>
						<a href="/">
							<i className="fas fa-chart-pie"></i>Reports
						</a>
					</li>
					<li>
						<a href="/">
							<i className="fas fa-file-alt"></i>Document
						</a>
					</li>
				</ul>
			</aside>
		</div>
	);
};

export default Sidebar;
