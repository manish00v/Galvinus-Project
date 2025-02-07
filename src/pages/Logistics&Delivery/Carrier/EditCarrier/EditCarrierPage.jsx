
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditCarrierKey from "./EditCarrierKey";

const EditCarrierPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editcarrierform");					// Edit this
		setGoBackUrl("/carrier");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditCarrierKey />
		</>
	);
}

export default EditCarrierPage;