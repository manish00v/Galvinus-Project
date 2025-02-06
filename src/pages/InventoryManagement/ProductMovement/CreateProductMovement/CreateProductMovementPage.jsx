
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";

const CreateProductMovementPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Create");
		setUrl("/productmovement");
		setGoBackUrl("/productmovement");
	}, []);

	return (
		<>
			<FormPageHeader />
		</>
	);
}

export default CreateProductMovementPage;