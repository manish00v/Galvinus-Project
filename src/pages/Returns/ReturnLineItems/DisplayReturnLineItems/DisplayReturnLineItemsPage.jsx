
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayReturnLineItemsKey from "./DisplayReturnLineItemsKey";

const DisplayReturnLineItemsPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displayreturnlineitemsform");
		setGoBackUrl("/returnlineitems");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayReturnLineItemsKey />
		</>
	);
}

export default DisplayReturnLineItemsPage;