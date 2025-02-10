
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditDeliveryRouteKey from "./EditDeliveryRouteKey";

const EditDeliveryRoutePage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editdeliveryrouteform");					// Edit this
		setGoBackUrl("/deliveryroute");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditDeliveryRouteKey />
		</>
	);
}

export default EditDeliveryRoutePage;