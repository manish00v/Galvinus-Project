
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayCustomerKey from "./DisplayCustomerKey";

const DisplayCustomerPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displaycustomerform");					// Edit this
		setGoBackUrl("/customer");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayCustomerKey />
		</>
	);
}

export default DisplayCustomerPage;