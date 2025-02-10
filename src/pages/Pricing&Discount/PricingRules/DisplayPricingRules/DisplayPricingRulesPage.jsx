
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayPricingRulesKey from "./DisplayPricingRulesKey";
const DisplayPricingRulesPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displaypricingrulesform");					// Edit this
		setGoBackUrl("/pricingrules");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayPricingRulesKey />
		</>
	);
}

export default DisplayPricingRulesPage;