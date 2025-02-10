
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayProductMovementKey from "./DisplayProductMovementKey";
const DisplayProductMovementPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displayproductmovementform");					// Edit this
		setGoBackUrl("/productmovement");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayProductMovementKey />
		</>
	);
}

export default DisplayProductMovementPage;