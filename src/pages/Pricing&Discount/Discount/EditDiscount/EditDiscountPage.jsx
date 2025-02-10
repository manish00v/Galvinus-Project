
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditDiscountKey from "./EditDiscountKey";

const EditDiscountPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editdiscountform");					// Edit this
		setGoBackUrl("/salesorder");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditDiscountKey/>
		</>
	);
}

export default EditDiscountPage;