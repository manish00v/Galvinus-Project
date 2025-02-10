
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayPaymentKey from "./DisplayPaymentKey";
const DisplayPaymentPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displaypaymentform");					// Edit this
		setGoBackUrl("/payment");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayPaymentKey />
		</>
	);
}

export default DisplayPaymentPage;