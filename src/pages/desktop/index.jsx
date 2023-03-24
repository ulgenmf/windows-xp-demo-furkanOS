import React, { useContext } from "react";
import Draggable from "react-draggable";
import GridLayout from "react-grid-layout";
import { Error } from "react-windows-xp";
import Image from "next/image";
import images from "../../constants/images";
import { meArray } from "@/components/DefaultWindow/functions";
import { FcSettings } from "react-icons/fc";
import { BiMailSend } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ContactForm from "@/components/ContactForm/ContactForm";
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
	SkillsWindow,
	WorksWindow,
} from "../../components/DefaultWindow/DefaultWindow";
import Link from "next/link";
import { MeWindow } from "../../components/DefaultWindow/DefaultWindow";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { Resizable } from "re-resizable";
import { FcFolder } from "react-icons/fc";
import { MyContext } from "../_app";
import { wp1 } from "../../assets/wallpaper/astronaut.jpg";
import { SliderPicker } from "react-color";
import { BsArrowsExpand } from "react-icons/bs";
import { useRouter } from "next/router";
function Index() {
	useEffect(() => {
		const storedName = localStorage.getItem("userName"); // retrieve the name from local storage
		if (storedName) {
			setUserName(storedName);
		}
	}, []);

	const [theme, setTheme] = useState({
		color: "#105960f8",
		picture: "https://giffiles.alphacoders.com/212/212369.gif",
		showing: false,
		settings: false,
	});

	const wallpapers = [
		{ pic: images.wp, name: "Neon-Sunset" },
		{ pic: images.wp1, name: "Astronaut" },
		{ pic: images.wp2, name: "Neon-Night" },
		{ pic: images.wp3, name: "Sky-At-Night" },
		{ pic: images.wp4, name: "Solar-Eclipse" },
	];

	const [settings, setSettings] = useState(true);

	const { userName, setUserName, isFormHidden, setIsFormHidden, isMessageSent } =
		useContext(MyContext);

	const [skillsFolder, setSkillsFolder] = useState(true);
	const [worksFolder, setWorksFolder] = useState(true);
	const [meFolder, setMeFolder] = useState(true);
	const itemVariants = {
		open: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", stiffness: 100, damping: 4 },
		},
		closed: { opacity: 0, y: 50, transition: { duration: 0.2 } },
	};
	function settingsHandle() {
		theme.showing ? () => setTheme({ ...theme, settings: false }) : "";
	}
	settingsHandle();

	function contactFormHandler() {
		isMessageSent ? toaster() : setIsFormHidden(false);
	}
	function toaster() {
		toast.error("You have already sent a message ", {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}
	console.log(isMessageSent, "meseeeeesaage");
	const imagee = images.about01;
	const array = new Array(10).fill("2");

	return (
		<div className="flex flex-col w-screen overflow-clip h-screen">
			<ToastContainer></ToastContainer>
			<div
				className={` w-full bg-contain  duration-[2s] flex __bar   `}
				style={{ backgroundColor: theme.color }}
			>
				<div className="flex justify-center items-center">
					<div className="active:animate-flicker">
						<Image src={images.kedi} height={80} className=" animate-flicker" />
					</div>
					<p className="text-center text-white font-mono text-3xl">{`Welcome ${userName}`}</p>
				</div>
				<motion.nav
					initial={false}
					animate={theme.showing ? "open" : "closed"}
					className=" absolute -right-1   "
				>
					<motion.div
						className=" px-5 bg-transparent "
						whileTap={{ scale: 0.7 }}
						onClick={() =>
							setTheme({ ...theme, showing: !theme.showing, settings: false })
						}
					>
						<motion.div
							variants={{
								open: { rotate: -180 },
								closed: { rotate: 180 },
							}}
							// animate={{ scale: 1 }}
							transition={{ duration: 0.9 }}
							// style={{ originY: 0 }}
							className={`p-2    bg-[${theme.color}] `}
						>
							<FcSettings
								size={60}
								className="m-auto p-2 hover:scale-105 duration-200  cursor-pointer bg-white rounded-full bg-opacity-50"
							/>
						</motion.div>
					</motion.div>
					<motion.ul
						className="bg-white   font-jet text-lg   flex gap-5  flex-col p-5"
						variants={{
							open: {
								clipPath: "inset(0% 0% 0% 0% round 4px)",
								transition: {
									type: "spring",
									bounce: 0,
									duration: 0.7,
									delayChildren: 0.3,

									staggerChildren: 0.1,
								},
							},
							closed: {
								clipPath: "inset(0% 0% 100% 0% round 10px)",
								transition: {
									type: "spring",
									bounce: 0,
									duration: 0.3,
									delay: 0.6,
									delayChildren: 0.4,
								},
							},
						}}
						style={{ pointerEvents: theme.showing ? "auto" : "none" }}
					>
						<motion.li variants={itemVariants}>
							<div className="text-center flex flex-col items-center">
								<BiMailSend
									onClick={contactFormHandler}
									size={30}
									className=" hover:scale-110 duration-200 cursor-pointer"
								/>
								<p className="text-lg font-jet"> send me a Message</p>
							</div>
						</motion.li>
						<motion.li variants={itemVariants}>
							<div className="text-center flex flex-col items-center">
								<Link
									className="outline-none underline-none  hover:scale-110 duration-200 text-black"
									href={"https://github.com/ulgenmf"}
									target="_blank"
								>
									<AiFillGithub size={30} />
								</Link>
								<p className="text-lg font-jet"> take me to GitHub</p>
							</div>
						</motion.li>
						<motion.li variants={itemVariants}>
							<div className="text-center flex flex-col items-center">
								<Link
									className="outline-none underline-none  hover:scale-110 duration-200 text-black"
									style={{ textDecorationStyle: "none" }}
									href={"https://www.linkedin.com/in/mfulgen/"}
									target="_blank"
								>
									<AiFillLinkedin size={30} />
								</Link>

								<p className="text-lg font-jet"> take me to Linkedin</p>
							</div>
						</motion.li>
						<motion.li>
							<p className="text-center   border-b-2 bg-transparent border-slate-700">
								Theme
							</p>
							<motion.div
								whileTap={{ scale: 1.2 }}
								onClick={() => setTheme({ ...theme, settings: !theme.settings })}
								variants={{
									open: { rotate: 360 },
									closed: { rotate: 0 },
								}}
								transition={{ duration: 0.5 }}
								style={{ originY: 0.55 }}
							>
								<BsArrowsExpand className="m-auto mt-3 hover:scale-105 " size={30} />
							</motion.div>
						</motion.li>
					</motion.ul>
					<motion.nav
						initial={false}
						animate={theme.settings ? "open" : "closed"}
						className="settings"
					>
						<motion.ul
							className="bg-white -mt-2 "
							variants={{
								open: {
									clipPath: "inset(0% 0% 0% 0% round 10px)",
									transition: {
										type: "spring",
										bounce: 0,
										duration: 1,

										staggerChildren: 0.05,
									},
								},
								closed: {
									clipPath: "inset(0 0 100% 0% round 10px)",
									transition: {
										type: "Inertia",
										bounce: 0,
										duration: 0.5,
										velocity: 20,
									},
								},
							}}
							style={{ pointerEvents: theme.settings ? "auto" : "none" }}
						>
							<motion.li className="h-auto w-full">
								<SliderPicker
									color={theme.color}
									onChange={(c) => setTheme({ ...theme, color: c.hex })}
								/>
							</motion.li>

							<motion.div className="flex flex-col font-jet text-lg text-center pt-2 furr left-0">
								{/* zzzzzzzzzzzzzzzz */}
								{wallpapers.map((x) => (
									<div
										onClick={() =>
											setTheme({ theme, picture: x.pic.src, color: theme.color })
										}
										className="border-y-2 cursor-pointer hover:text-white hover:scale-105 duration-200 active:scale-110 active:bg-rose-400 hover:bg-blue-500"
									>
										{x.name}
									</div>
								))}
							</motion.div>
						</motion.ul>
					</motion.nav>{" "}
				</motion.nav>
			</div>

			<div
				className={` bg-cover  bg-center duration-200 desktop flex flex-shrink-0 layout`}
				style={{
					backgroundImage: `url(${theme.picture})`,
				}}
			>
				<Draggable bounds=".desktop">
					<div
						onDoubleClick={() => setSkillsFolder(false)}
						className="  h-28 mt-2 active:scale-105  items-center cursor-pointer flex flex-col hover:bg-blue-400 active:bg-blue-600 hover:bg-opacity-20 bg-opacity-[0.01] rounded-lg  "
					>
						<FcFolder size={100} />

						<p className="text-white text-center font-semibold text-md bg-opacity-10 ">
							Skills
						</p>
					</div>
				</Draggable>
				<Draggable bounds=".desktop">
					<div
						onDoubleClick={() => setWorksFolder(false)}
						className=" h-28  mt-2 active:scale-110  cursor-pointer  hover:scale-125 items-center flex flex-col hover:bg-blue-400 active:bg-blue-600 hover:bg-opacity-20 bg-opacity-[0.01] rounded-lg  "
					>
						<FcFolder size={120} />
						<p className="text-white  text-center font-semibold text-md bg-opacity-10 ">
							Works
						</p>
					</div>
				</Draggable>

				<Draggable bounds=".desktop" handle=".here1">
					<div className=" h-fit  z-40 absolute right-[40%]">
						<ContactForm />
					</div>
				</Draggable>

				<Draggable bounds=".desktop">
					<div
						onDoubleClick={() => setMeFolder(false)}
						className=" h-28 mt-2 active:scale-105  cursor-pointer  items-center flex flex-col hover:bg-blue-400 active:bg-blue-600 hover:bg-opacity-20 bg-opacity-[0.01] rounded-lg  "
					>
						<FcFolder size={100} />
						<p className="text-white text-center font-semibold text-md bg-opacity-10 ">
							Me
						</p>
					</div>
				</Draggable>
				<div hidden={skillsFolder}>
					<SkillsWindow skillClick={() => setSkillsFolder(true)} />{" "}
				</div>
				<div hidden={false}>
					<MeWindow isHidden={meFolder} meClick={() => setMeFolder(true)} />
				</div>
				<div className="z-50" hidden={worksFolder}>
					<WorksWindow worksClick={() => setWorksFolder(true)} />
				</div>
			</div>
		</div>
	);
}

export default Index;
