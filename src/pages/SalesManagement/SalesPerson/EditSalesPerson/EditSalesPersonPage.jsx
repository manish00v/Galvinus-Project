
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditSalesPersonKey from "./EditSalesPersonKey";

const EditSalesPersonPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/EditSalesPersonForm");					// Edit this
		setGoBackUrl("/salesperson");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditSalesPersonKey />
		</>
	);
}

export default EditSalesPersonPage;