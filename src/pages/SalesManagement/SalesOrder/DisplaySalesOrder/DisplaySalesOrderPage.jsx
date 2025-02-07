
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplaySalesOrderKey from "./DisplaySalesOrderKey";

const DisplaySalesOrderPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displaysalesorderform");					// Edit this
		setGoBackUrl("/salesorder");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplaySalesOrderKey/>
		</>
	);
}

export default DisplaySalesOrderPage;