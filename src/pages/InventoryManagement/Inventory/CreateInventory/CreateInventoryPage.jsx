
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";

const CreateInventoryPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Create");
		setUrl("/inventory");
		setGoBackUrl("/inventory");
	}, []);

	return (
		<>
			<FormPageHeader />
		</>
	);
}

export default CreateInventoryPage;