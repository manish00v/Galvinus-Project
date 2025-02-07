
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayCarrierKey from "./DisplayCarrierKey";

const DisplayCarrierPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displaycarrierform");					// Edit this
		setGoBackUrl("/carrier");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayCarrierKey />
		</>
	);
}

export default DisplayCarrierPage;