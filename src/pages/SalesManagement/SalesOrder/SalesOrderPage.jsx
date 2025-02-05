
import React, { useContext, useEffect } from "react";
import Tips from "../../../components/Tips/Tips";
import { TipsPageHeaderContext } from "../../../contexts/TipsPageHeaderContext";
import TipsPageHeader from "../../../components/Layout/TipsPageHeader/TipsPageHeader";

const SalesOrderPage = () => {
	const { setCreateBtn, setEditBtn, setDisplayBtn, setCreateUrl, setEditUrl, setDisplayUrl } = useContext(TipsPageHeaderContext);

	useEffect(() => {
		setCreateBtn("Create Order");
		setEditBtn("Edit Order");
		setDisplayBtn("Display Order");
		setCreateUrl("/createorder");
		setEditUrl("/editorder");
		setDisplayUrl("/displayorder");
	}, []);

	return (
		<>
			<TipsPageHeader />
			<Tips />
		</>
	);
}

export default SalesOrderPage;