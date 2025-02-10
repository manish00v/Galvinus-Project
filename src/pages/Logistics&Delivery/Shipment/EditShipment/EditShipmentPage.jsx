
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditShipmentKey from "./EditShipmentKey";

const EditShipmentPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editshipmentform");					// Edit this
		setGoBackUrl("/shipment");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditShipmentKey />
		</>
	);
}

export default EditShipmentPage;