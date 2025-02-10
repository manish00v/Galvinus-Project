
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditReturnLineItemsKey from "./EditReturnLineItemsKey";
const EditReturnLineItemsPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editreturnlineitemsform");
		setGoBackUrl("/returnlineitems");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditReturnLineItemsKey />
		</>
	);
}

export default EditReturnLineItemsPage;