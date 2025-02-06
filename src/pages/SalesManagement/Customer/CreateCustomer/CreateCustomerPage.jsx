
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";

const CreateCustomerPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Create");
		setUrl("/customer");
		setGoBackUrl("/customer");
	}, []);

	return (
		<>
			<FormPageHeader />
		</>
	);
}

export default CreateCustomerPage;