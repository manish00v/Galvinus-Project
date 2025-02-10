
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditSupplierKey from "./EditSupplierKey";
const EditSupplierPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editsupplierform");					// Edit this
		setGoBackUrl("/supplier");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditSupplierKey />
		</>
	);
}

export default EditSupplierPage;