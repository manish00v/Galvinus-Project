
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import CreateDeliveryRouteForm from "../../DeliveryRoute/CreateDeliveryRoute/CreateDeliveryRouteForm";

const CreateDeliveryVehiclePage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Create");
		setUrl("/deliveryvehicle");
		setGoBackUrl("/deliveryvehicle");
	}, []);

	return (
		<>
			<FormPageHeader />
			<CreateDeliveryRouteForm />
		</>
	);
}

export default CreateDeliveryVehiclePage;