
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditReturnOrderKey from "./EditReturnOrderKey";
const EditReturnOrderPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editreturnorderform");
		setGoBackUrl("/returnorder");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditReturnOrderKey />
		</>
	);
}

export default EditReturnOrderPage;