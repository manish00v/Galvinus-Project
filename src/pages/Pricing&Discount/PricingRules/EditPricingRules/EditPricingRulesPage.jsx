
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditPricingRulesKey from "./EditPricingRulesKey";

const EditPricingRulesPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editpricingrulesform");					// Edit this
		setGoBackUrl("/pricingrules");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditPricingRulesKey />
		</>
	);
}

export default EditPricingRulesPage;