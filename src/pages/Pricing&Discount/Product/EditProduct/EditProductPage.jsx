
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditProductKey from "./EditProductKey";
const EditProductPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editproductform");					// Edit this
		setGoBackUrl("/product");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditProductKey />
		</>
	);
}

export default EditProductPage;