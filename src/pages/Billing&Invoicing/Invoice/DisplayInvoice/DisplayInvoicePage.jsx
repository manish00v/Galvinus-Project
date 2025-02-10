
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayInvoiceKey from "./DisplayInvoiceKey";
const DisplayInvoicePage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displayinvoiceform");					// Edit this
		setGoBackUrl("/invoice");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayInvoiceKey />
		</>
	);
}

export default DisplayInvoicePage;