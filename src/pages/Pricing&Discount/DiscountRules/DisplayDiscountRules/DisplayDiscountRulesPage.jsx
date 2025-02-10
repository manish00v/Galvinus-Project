
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayDiscountRulesKey from "./DisplayDiscountRulesKey";

const DisplayDiscountRulesPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displaydiscountrulesform");					// Edit this
		setGoBackUrl("/discountrules");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayDiscountRulesKey />
		</>
	);
}

export default DisplayDiscountRulesPage;