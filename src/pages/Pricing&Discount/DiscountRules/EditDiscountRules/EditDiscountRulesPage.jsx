
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditDiscountRulesKey from "./EditDiscountRulesKey";

const EditDiscountRulesPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editdiscountrulesform");					// Edit this
		setGoBackUrl("/discountrules");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditDiscountRulesKey />
		</>
	);
}

export default EditDiscountRulesPage;