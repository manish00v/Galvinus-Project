
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayDeliveryVehicleKey from "./DisplayDeliveryVehicleKey";
const DisplayDeliveryVehiclePage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displaydeliveryvehicleform");					// Edit this
		setGoBackUrl("/deliveryvehicle");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayDeliveryVehicleKey />
		</>
	);
}

export default DisplayDeliveryVehiclePage;