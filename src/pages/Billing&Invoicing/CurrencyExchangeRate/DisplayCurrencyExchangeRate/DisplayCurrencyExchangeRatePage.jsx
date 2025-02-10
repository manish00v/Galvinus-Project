
import React, { useContext, useEffect } from "react";
import { FormPageHeaderContext } from "../../../../contexts/FormPageHeaderContext";
import FormPageHeader from "../../../../components/Layout/FormPageHeader/FormPageHeader";
import DisplayCurrencyExchangeRateKey from "./DisplayCurrencyExchangeRateKey";
const DisplayCurrencyExchangeRatePage = () => {
	const { setBtn, setUrl, setGoBackUrl } = useContext(FormPageHeaderContext);

	useEffect(() => {
		setBtn("Display");
		setUrl("/displaycurrencyexchangerateform");					// Edit this
		setGoBackUrl("/currencyexchangerate");
	}, []);

	return (
		<>
			<FormPageHeader />
			<DisplayCurrencyExchangeRateKey />
		</>
	);
}

export default DisplayCurrencyExchangeRatePage;