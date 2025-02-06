
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";

const CreateWarehousePage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Create");
		setUrl("/warehouse");
		setGoBackUrl("/warehouse");
	}, []);

	return (
		<>
			<FormPageHeader />
		</>
	);
}

export default CreateWarehousePage;