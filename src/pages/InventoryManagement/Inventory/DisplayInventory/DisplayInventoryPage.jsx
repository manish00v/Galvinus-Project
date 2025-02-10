
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayInventoryKey from "./DisplayInventoryKey";

const DisplayInventoryPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displayinventoryform");					// Edit this
		setGoBackUrl("/inventory");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayInventoryKey />

		</>
	);
}

export default DisplayInventoryPage;