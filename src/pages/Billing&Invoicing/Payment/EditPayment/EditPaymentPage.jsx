
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditPaymentKey from "./EditPaymentKey";
const EditPaymentPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editpaymentform");					// Edit this
		setGoBackUrl("/payment");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditPaymentKey/>
		</>
	);
}

export default EditPaymentPage;