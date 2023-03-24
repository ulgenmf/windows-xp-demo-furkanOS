import "./globals.css";
import { useEffect } from "react";
import "../styles/App.scss";
import "../pages/splash/Splash.scss";
import "../components/DefaultWindow/DeafultWindow.scss";
import React, { createContext, useState } from "react";
import { useContext } from "react";
export const MyContext = createContext({
	userName: "",
	isFormHidden: "",
	isMessageSent: "",
	setUserName: () => {},
	setIsFormHidden: () => {},
	setIsMessageSent: () => {},
});

export default function App({ Component, pageProps }) {
	const [userName, setUserName] = useState("");
	const [isFormHidden, setIsFormHidden] = useState(true);
	const [isMessageSent, setIsMessageSent] = useState(false);

	return (
		<MyContext.Provider
			value={{
				userName,
				setUserName,
				isFormHidden,
				setIsFormHidden,
				isMessageSent,
				setIsMessageSent,
			}}
		>
			<Component {...pageProps} />;
		</MyContext.Provider>
	);
}
