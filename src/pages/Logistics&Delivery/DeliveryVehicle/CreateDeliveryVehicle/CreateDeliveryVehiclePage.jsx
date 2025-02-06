
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";

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
		</>
	);
}

export default CreateDeliveryVehiclePage;