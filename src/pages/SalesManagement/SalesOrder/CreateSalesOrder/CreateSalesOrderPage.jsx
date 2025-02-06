
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";

const CreateSalesOrderPage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Create");
		setUrl("/salesorder");
		setGoBackUrl("/salesorder");
	}, []);

	return (
		<>
			<FormPageHeader />
		</>
	);
}

export default CreateSalesOrderPage;