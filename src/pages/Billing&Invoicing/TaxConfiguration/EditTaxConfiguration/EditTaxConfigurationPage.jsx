
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditTaxConfigurationKey from "./EditTaxConfigurationKey";
const EditTaxConfigurationPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/edittaxconfigurationform");					// Edit this
		setGoBackUrl("/taxconfiguration");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditTaxConfigurationKey />
		</>
	);
}

export default EditTaxConfigurationPage;