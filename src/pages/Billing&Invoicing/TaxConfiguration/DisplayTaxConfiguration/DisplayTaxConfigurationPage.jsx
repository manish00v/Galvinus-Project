
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayTaxConfigurationKey from "./DisplayTaxConfigurationKey";
const DisplayTaxConfigurationPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displaytaxconfigurationform");					// Edit this
		setGoBackUrl("/taxconfiguration");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayTaxConfigurationKey />
		</>
	);
}

export default DisplayTaxConfigurationPage;