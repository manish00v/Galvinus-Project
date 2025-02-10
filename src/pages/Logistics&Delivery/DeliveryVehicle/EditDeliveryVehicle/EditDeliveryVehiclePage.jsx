
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditDeliveryVehicleKey from "./EditDeliveryVehicleKey";
const EditDeliveryVehiclePage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editdeliveryvehicleform");					// Edit this
		setGoBackUrl("/deliveryvehicle");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditDeliveryVehicleKey />
		</>
	);
}

export default EditDeliveryVehiclePage;