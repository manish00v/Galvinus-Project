
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayReturnOrderKey from "./DisplayReturnOrderKey";

const DisplayReturnOrderPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displayreturnorderform");
		setGoBackUrl("/returnorder");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayReturnOrderKey />
		</>
	);
}

export default DisplayReturnOrderPage;