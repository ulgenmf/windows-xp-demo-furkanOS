import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{" "}
				<link
					href="https://fonts.googleapis.com/css2?family=Monoton&family=VT323&display=swap"
					rel="stylesheet"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="/node_modules/react-grid-layout/css/styles.css"
				/>
				<link
					rel="stylesheet"
					href="/node_modules/react-resizable/css/styles.css"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
