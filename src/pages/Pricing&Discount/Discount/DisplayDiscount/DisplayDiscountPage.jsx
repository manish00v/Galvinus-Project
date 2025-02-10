
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayDiscountKey from "./DisplayDiscountKey";

const DisplayDiscountPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displaydiscountform");					// Edit this
		setGoBackUrl("/discount");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayDiscountKey />
		</>
	);
}

export default DisplayDiscountPage;