
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import EditCurrencyExchangeRateKey from "./EditCurrencyExchangeRateKey";
const EditCurrencyExchangeRatePage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Edit");
		setUrl("/editcurrencyexchangerateform");					// Edit this
		setGoBackUrl("/currencyexchangerate");
	}, []);

	return (
		<>
			<FormPageHeader />
			<EditCurrencyExchangeRateKey />
		</>
	);
}

export default EditCurrencyExchangeRatePage;