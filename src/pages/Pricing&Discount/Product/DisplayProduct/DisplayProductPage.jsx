
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayProductKey from "./DisplayProductKey";

const DisplayProductPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displayproductform");					// Edit this
		setGoBackUrl("/product");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayProductKey />
		</>
	);
}

export default DisplayProductPage;