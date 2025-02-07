
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayLineItemsKey from "./DisplayLineItemsKey";

const DisplayLineItemsPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displaylineitemsform");					// Edit this
		setGoBackUrl("/lineitems");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayLineItemsKey />
		</>
	);
}

export default DisplayLineItemsPage;