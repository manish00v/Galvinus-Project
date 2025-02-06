
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";

const CreatePricingRulesPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Create");
		setUrl("/pricingrules");
		setGoBackUrl("/pricingrules");
	}, []);

	return (
		<>
			<FormPageHeader />
		</>
	);
}

export default CreatePricingRulesPage;