
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayDeliveryRouteKey from "./DisplayDeliveryRouteKey";

const DisplayDeliveryRoutePage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displaydeliveryrouteform");					// Edit this
		setGoBackUrl("/deliveryroute");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayDeliveryRouteKey />
		</>
	);
}

export default DisplayDeliveryRoutePage;