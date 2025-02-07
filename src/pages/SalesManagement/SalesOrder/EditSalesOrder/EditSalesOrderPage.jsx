
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditSalesOrderKey from "./EditSalesOrderKey";
// import EditSalesOrderForm from "./EditSalesOrderForm";

const EditSalesOrderPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editsalesorderform");					// Edit this
		setGoBackUrl("/salesorder");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditSalesOrderKey/>
		</>
	);
}

export default EditSalesOrderPage;