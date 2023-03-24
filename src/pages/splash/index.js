import React, { useContext } from "react";
import { FiArrowDown } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MyContext } from "../_app";
import images from "../../constants/images";
// import { MyName } from "../../components/Name/MyName";
import Name from "../../components/Name/Name";
import { RiAwardFill } from "react-icons/ri";
import TypeIt from "typeit-react";
import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
function Splash() {
	const [isVisible, setIsvisible] = useState("hidden");
	const { userName, setUserName } = useContext(MyContext);
	const Layer1 = images.Layer1;

	const router = useRouter();
	console.log(userName);

	function changeHanlder(e) {
		e.preventDefault();
		setUserName(e.target.value);
		localStorage.setItem("userName", userName);
	}

	const scaleVariants = {
		whileInView: {
			scale: [0.1, 0.7],
			opacity: [0.5, 1],
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};
	const icon = <RiAwardFill size={30} fill={"blue"} />;
	const sentence1 =
		"	Award Module Operating System v4.00APQ," +
		"" +
		"An Star Module Copy Right 1994-2024, Award Software, Inc." +
		"B1W1WC/BIW2WM BRIOS V10.2";
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsvisible("");
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	const command = "Please write your input here";

	return (
		<>
			<div className="mobile-device text-5xl text-center items-center flex  text-purple-400 h-screen w-screen bg-black font-V3">
				<p className="p-2">
					I see you are on a mobile device, sorry to inform you responsive
					configuration hasnt been completed yet, please try with bigger screen
				</p>
			</div>
			<div className="body__body flex  text-white flex-col  bg-black h-screen">
				<Image
					className="h-28 w-44 absolute  duration-150 body__img right-[3%] top-[3%]"
					src={Layer1}
					alt=""
				/>

				<div className="  w-full font-V3 text-3xl flex flex-col  relative">
					<TypeIt className=" tablet:hidden pc:hiddenm">Please wait...</TypeIt>
					<TypeIt options={{ speed: 5, cursor: false }}>
						{" "}
						<div className="flex name flex-row mt-2">
							<RiAwardFill size={40} fill={"blue"} />
							{sentence1}
						</div>
						<div className="flex flex-col mt-10 ml-3">
							<div id="expand " className="name">
								<p>Platform: MacIntel</p>
								<p>
									Agent: Mozilla/5.0 (Machintosh;Intel Mac Os X 10_15_7
									AppleWebKit/537/.36 (KHTML, like Gexkho) Chrome/99.0.4844.52
									Safari/537.36
								</p>
								<p>Vendor: GoooggLe Inc.</p>
							</div>
							<div className="ml-4">
								<p>Name:Muhammed Furkan Ulgen</p>
								<p>Bhirtday: 16.04.1994</p>
								<p>Place Of Birth: Istanbul/ Turkey</p>
								<p>Profession: Software Developer</p>
								<p>Place: Leipzig/ Germany</p>
							</div>
							<p className="text-lime-500 me ml-1">
								Hey, My name is Furkan, I am a junior software developer. I wanted to
								create a portfolio with my own ideas. However it is a bit more
								complicated than I expected, you can see what I was able accomplish so
								far. Excuse me if some of the features might now work as intented.
							</p>
						</div>
					</TypeIt>
				</div>
				<div
					className={` ${isVisible} self-center flex items-center flex-col name absolute bottom-[25%] text-center`}
				>
					<form
						onSubmit={(e) => e.preventDefault()}
						className="ml-3 mt-7 text-3xl font-V3  flex flex-col  text-yellow-500"
					>
						<p>Please enter your name ; </p>
						<input
							className="bg-black outline-none  placeholder-inherit border-b-2 pb-2 border-white  text-white font-V3 text-3xl"
							type="text"
							placeholder="..."
							name=""
							onChange={changeHanlder}
							id=""
						/>{" "}
						<Link
							href={"../start"}
							className=" rounded-full text-3xl text-purple-500 py-2 hover:bg-green-500 duration-200  hover:scale-105 hover:text-yellow-400 shadow-lg shadow-purple-500 bg-gray-100 mt-6"
						>
							Proceed
						</Link>
					</form>
				</div>

				<p className="absolute   bottom-2 left-2 font-V3 text-lg">
					Please wait untill booting is completed. Do not press F1 or DEL to enter
					any BIOS settings
					<br />
					<span>02/09/2022-NF-CK09920-AA029LLLIQ-PP-002</span>
				</p>
			</div>
		</>
	);
}

export default Splash;
