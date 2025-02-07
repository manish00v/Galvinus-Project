
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditCustomerKey from "./EditCustomerKey";

const EditCustomerPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editcustomerform");					// Edit this
		setGoBackUrl("/customer");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditCustomerKey />
		</>
	);
}

export default EditCustomerPage;