
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditInventoryKey from "./EditInventoryKey";

const EditInventoryPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editinventoryform");					// Edit this
		setGoBackUrl("/inventory");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditInventoryKey />
		</>
	);
}

export default EditInventoryPage;