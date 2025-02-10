
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplaywarehouseKey from "./DisplayWarehouseKey";
const DisplayWarehousePage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displaywarehouseform");					// Edit this
		setGoBackUrl("/warehouse");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplaywarehouseKey />
		</>
	);
}

export default DisplayWarehousePage;