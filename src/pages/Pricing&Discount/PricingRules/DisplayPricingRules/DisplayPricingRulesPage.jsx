
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";

const DisplayPricingRulesPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/");					// Edit this
		setGoBackUrl("/pricingrules");
	}, []);

	return (
		<>
			<FormPageHeader />
		</>
	);
}

export default DisplayPricingRulesPage;