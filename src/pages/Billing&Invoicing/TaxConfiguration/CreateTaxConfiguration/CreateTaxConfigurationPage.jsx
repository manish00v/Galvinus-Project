
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";

const CreateTaxConfigurationPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Create");
		setUrl("/taxconfiguration");
		setGoBackUrl("/taxconfiguration");
	}, []);

	return (
		<>
			<FormPageHeader />
		</>
	);
}

export default CreateTaxConfigurationPage;