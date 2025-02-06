
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";

const CreateDeliveryRoutePage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Create");
		setUrl("/deliveryroute");
		setGoBackUrl("/deliveryroute");
	}, []);

	return (
		<>
			<FormPageHeader />
		</>
	);
}

export default CreateDeliveryRoutePage;