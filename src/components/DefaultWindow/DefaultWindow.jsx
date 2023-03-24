import React, { Children, useContext, useRef } from "react";
import styled from "styled-components";
import GridLayout from "react-grid-layout";
import { GiResize } from "react-icons/gi";
import { Resizable } from "re-resizable";
import { basePath } from "next.config";
import "xp.css/dist/XP.css";
import { useState } from "react";
import { skillsArray } from "./functions";
import Image from "next/image";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Draggable from "react-draggable";
import { MdMinimize } from "react-icons/md";
import images from "../../constants/images";
import { stringify } from "postcss";
import { AiFillGithub } from "react-icons/ai";

export function SkillsWindow({ skillClick }) {
	const [hide, setHide] = useState("");

	return (
		<div hide>
			<Draggable bounds=".desktop" handle={".handle"}>
				<div className={` items-center w-[500px] justify-center  flex flex-col`}>
					<div
						className={`__title.bar   w-full handle cursor-move flex bg-gray-600 justify-between  h-10 rounded-t-2xl `}
					>
						<p className="text-white  self-center text-lg font-mono ml-2">SKills</p>
						<div className="flex justify-center hover:scale-105  active:bg-lime-400  bg-red-300 rounded-md ">
							<AiOutlineClose
								onClick={skillClick}
								size={30}
								className="self-center cursor-pointer"
							/>
						</div>
					</div>

					<div className="grid  grid-cols-3 grid-rows-3  rounded-b-lg gap-5 bg-gray-200 p-5  w-[500px] h-fit ">
						{skillsArray.map((item) => (
							<div className="flex items-center hover:scale-105 duration-200 text-[1rem] font-sans  gap-1 flex-col">
								<Image height={50} src={item.image} alt="" />
								<p>{item.name}</p>
							</div>
						))}
					</div>
				</div>
			</Draggable>
		</div>
	);
}

export function MeWindow({ meClick, isHidden }) {
	const [hide, setHide] = useState("");
	const [firstPic, setFirstPic] = useState(false);
	const [secondPic, setSecondPic] = useState(false);
	const [thirdPic, setThirdPic] = useState(false);
	const [fourthPic, setfourthPic] = useState(false);

	return (
		<div hidden={isHidden}>
			<Draggable bounds=".desktop" handle={".handle"}>
				<div className="flex flex-col relative h-[400px] w-[600px]  ">
					<div
						className={`__title.bar  handle cursor-move flex w-full bg-gray-600 justify-between  h-10 rounded-t-2xl `}
					>
						<p className="text-white  self-center text-lg font-mono ml-2">ME</p>
						<div className="flex justify-center hover:scale-105  active:bg-lime-400  bg-red-300 rounded-md ">
							<AiOutlineClose
								onClick={meClick}
								size={30}
								className="self-center cursor-pointer"
							/>
						</div>
					</div>
					<div className=" p-2 gap-5  grid place-items-center grid-rows-2   grid-flow-col-dense  bg-gray-200">
						<Image
							alt=""
							className="rounded-md border  shadow-inherit   border-separate   border-black  cursor-pointer hover:scale-105 duration-200"
							height={150}
							width={150}
							src={images.me1}
							onClick={() => setFirstPic((prev) => !prev)}
						/>

						<Image
							onClick={() => setSecondPic((prev) => !prev)}
							className="rounded-md border  border-separate shadow-2xl shadow-indigo-200 border-black  cursor-pointer hover:scale-105 duration-200"
							height={150}
							width={150}
							src={images.me2}
						/>
						<Image
							onClick={() => setThirdPic((prev) => !prev)}
							className="rounded-md border  border-separate shadow-2xl shadow-indigo-200 border-black  cursor-pointer hover:scale-105 duration-200"
							height={150}
							width={150}
							src={images.me3}
							alt=""
						/>
						<Image
							alt=""
							onClick={() => setfourthPic((prev) => !prev)}
							className="rounded-md border  border-separate shadow-2xl shadow-indigo-200 border-black  cursor-pointer hover:scale-105 duration-200"
							height={250}
							width={250}
							src={images.me4}
						/>
					</div>
				</div>
			</Draggable>
			{firstPic && (
				<Draggable
					className="absolute "
					bounds={".desktop"}
					defaultPosition={{ x: 100, y: -200 }}
					handle=".handle2"
				>
					<div className="flex flex-col h-96 w-96">
						<div
							className={`__title.bar  handle2 cursor-move flex w-full bg-gray-600 justify-between  h-10 rounded-t-2xl `}
						>
							<p className="text-white  self-center text-lg font-mono ml-2">
								my.picture
							</p>
							<div className="flex justify-center hover:scale-105  active:bg-lime-400  bg-red-300 rounded-md ">
								<AiOutlineClose
									onClick={meClick}
									size={30}
									className="self-center cursor-pointer"
								/>
							</div>
						</div>
						<Image alt="" className="rounded-b-md" width={600} src={images.me1} />
					</div>
				</Draggable>
			)}
			{secondPic && (
				<Draggable bounds={".desktop"} className=" left-10" handle=".handle2">
					<div className="absolute top-0">
						<div className="flex flex-col  h-96 w-96">
							<div
								className={`__title.bar  handle2 cursor-move flex w-full bg-gray-600 justify-between  h-10 rounded-t-2xl `}
							>
								<p className="text-white  self-center text-lg font-mono ml-2">
									my.picture
								</p>
								<div className="flex justify-center hover:scale-105  active:bg-lime-400  bg-red-300 rounded-md ">
									<AiOutlineClose
										onClick={() => setSecondPic((prev) => !prev)}
										size={30}
										className="self-center cursor-pointer"
									/>
								</div>
							</div>
							<Image className="rounded-b-md" width={600} src={images.me2} alt="" />
						</div>
					</div>
				</Draggable>
			)}
			{thirdPic && (
				<Draggable bounds={".desktop"} className=" left-40" handle=".handle2">
					<div className="absolute right-7 top-9">
						<div className="flex flex-col  h-96 w-96">
							<div
								className={`__title.bar  handle2 cursor-move flex w-full bg-gray-600 justify-between  h-10 rounded-t-2xl `}
							>
								<p className="text-white  self-center text-lg font-mono ml-2">
									my.picture
								</p>
								<div className="flex justify-center hover:scale-105  active:bg-lime-400  bg-red-300 rounded-md ">
									<AiOutlineClose
										onClick={() => setThirdPic((prev) => !prev)}
										size={30}
										className="self-center cursor-pointer"
									/>
								</div>
							</div>
							<Image className="rounded-b-md" width={600} src={images.me3} alt="" />
						</div>
					</div>
				</Draggable>
			)}
			{fourthPic && (
				<Draggable bounds={".desktop"} handle=".handle2">
					<div className="absolute top-5 left-0">
						<div className="flex flex-col h-96 w-96">
							<div
								className={`__title.bar  handle2 cursor-move flex w-full bg-gray-600 justify-between  h-10 rounded-t-2xl `}
							>
								<p className="text-white  self-center text-lg font-mono ml-2">
									my.picture
								</p>
								<div className="flex justify-center hover:scale-105  active:bg-lime-400  bg-red-300 rounded-md ">
									<AiOutlineClose
										onClick={() => setfourthPic((prev) => !prev)}
										size={30}
										className="self-center cursor-pointer"
									/>
								</div>
							</div>
							<Image className="rounded-b-md" width={600} src={images.me4} alt="" />
						</div>
					</div>
				</Draggable>
			)}
		</div>
	);
}

export function WorksWindow({ worksClick }) {
	const [hide, setHide] = useState("");

	const workFolder = [
		{
			image: images.worklibrary,
			text: "a small remote library to upload,delete,download files",
			gitLink: "https://github.com/ulgenmf/RemoteLibrary",
			liveSite: "https://remote-library.vercel.app/",
			cursor: "not-allowed",
		},
		{
			image: images.worktimer,
			text: "a small task manager where you can keep track the stuff you wanna do",
			gitLink: "https://github.com/ulgenmf/camp6-frontend-project",
			liveSite: "",
			cursor: "not-allowed",
		},
		{
			image: images.workweather,
			text:
				"really basic weather app where you can check the weather of desired city ",
			gitLink: "https://github.com/ulgenmf/hava-durumu",
			liveSite: "https://hava-durumu-eta.vercel.app/",
			cursor: "not-allowed",
		},
		{
			image: images.workport,
			text: "another portfile website of mine",
			gitLink: "",
			liveSite: "https://remote-library.vercel.app/",
			cursor: "not-allowed",
		},

		{
			image: images.workai,
			text: "replica of openAi Dallee, an ai image generator",
			gitLink: "https://github.com/ulgenmf/Ai-Image-Creator",
			liveSite: "https://remote-library.vercel.app/",
			cursor: "not-allowed",
		},
		{
			image: images.about01,
			text:
				"(second hand booksharing) searching the area for the desired book and interacting  with other users, exchanging books",
			gitLink: "https://github.com/ulgenmf/final-project-booksharing",
			liveSite: "",
			cursor: "not-allowed",
		},
	];

	return (
		<Draggable handle={".handle"} bounds=".desktop">
			<div className={` flex flex-col  shrink-0 absolute `}>
				<div
					className={`__title.bar  w-full handle cursor-move flex bg-gray-600 justify-between  h-10 rounded-t-2xl `}
				>
					{" "}
					<p className="text-white  self-center text-lg font-mono ml-2">Works</p>
					<div className="flex justify-center cursor-not-allowed hover:scale-105  active:bg-lime-400  bg-red-300 rounded-md ">
						<AiOutlineClose onClick={worksClick} size={30} />
					</div>
				</div>
				<p className="absolute text-center  text-lime-600 left-5 text-lg top-10">
					The links has been temporarily disabled due to some complications, I would
					still be okay to show it if spesificly asked
					<span className="">
						{" "}
						otherwise they will be private untill I fixed the some of the bugs{" "}
					</span>
				</p>
				<div className="  p-2 gap-5  grid place-items-center grid-rows-2   grid-flow-col w-[1000px] bg-gray-200   ">
					{workFolder.map((item) => (
						<div className="border-2 gap-3 shadow-2xl  border-1 border-rose-200 relative hover:scale-125  duration-300  shadow-blue-400">
							<div className="  h-full    hover:visible absolute   min-w-full  ">
								<div className="flex items-center  flex-col  outline-none gap-5 h-full  duration-200 opacity-0 hover:bg-opacity-70  hover:opacity-100 bg-black  justify-center">
									<div className="flex ">
										<AiFillGithub
											size={30}
											className={"opacity-100  cursor-not-allowed outline-none text-white"}
										/>

										<FaGlobe
											size={30}
											className={`opacity-100   cursor-not-allowed  text-white`}
										/>
									</div>

									<p className="text-center text-lg font-serif text-white">
										{item.text}
									</p>
								</div>
							</div>
							<Image height={250} src={item.image} className="rounded-sm" alt="" />{" "}
						</div>
					))}
				</div>
			</div>
		</Draggable>
	);
}
