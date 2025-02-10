
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplaySupplierKey from "./DisplaySupplierKey";
const DisplaySupplierPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displaysupplierform");					// Edit this
		setGoBackUrl("/supplier");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplaySupplierKey />
		</>
	);
}

export default DisplaySupplierPage;