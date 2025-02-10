
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditProductMovementKey from "./EditProductMovementKey";
const EditProductMovementPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editproductmovementform");					// Edit this
		setGoBackUrl("/productmovement");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditProductMovementKey />
		</>
	);
}

export default EditProductMovementPage;