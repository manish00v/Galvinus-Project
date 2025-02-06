
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";

const CreateCurrencyExchangeRatePage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Create");
		setUrl("/currencyexchangerate");
		setGoBackUrl("/currencyexchangerate");
	}, []);

	return (
		<>
			<FormPageHeader />
		</>
	);
}

export default CreateCurrencyExchangeRatePage;