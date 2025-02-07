
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplaySalesPersonKey from "./DisplaySalesPersonKey";

const DisplaySalesPersonPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/DisplaySalesPersonForm");					// Edit this
		setGoBackUrl("/salesperson");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplaySalesPersonKey />
		</>
	);
}

export default DisplaySalesPersonPage;