
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayShipmentKey from "./DisplayShipmentKey";

const DisplayShipmentPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displayshipmentform");					// Edit this
		setGoBackUrl("/shipment");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayShipmentKey />
		</>
	);
}

export default DisplayShipmentPage;