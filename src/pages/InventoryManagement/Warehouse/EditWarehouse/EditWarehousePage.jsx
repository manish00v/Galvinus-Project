
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditwarehouseKey from "./EditWarehouseKey";
const EditWarehousePage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editwarehouseform");					// Edit this
		setGoBackUrl("/warehouse");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditwarehouseKey />
		</>
	);
}

export default EditWarehousePage;