
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditInvoiceKey from "./EditInvoiceKey";
const EditInvoicePage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editinvoiceform");					// Edit this
		setGoBackUrl("/invoice");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditInvoiceKey />
		</>
	);
}

export default EditInvoicePage;