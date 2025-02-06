
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";

const EditSalesPersonPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/");					// Edit this
		setGoBackUrl("/salesperson");
	}, []);

	return (
		<>
			<FormPageHeader />
		</>
	);
}

export default EditSalesPersonPage;