import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import Draggable from "react-draggable";
import { AiOutlineClose } from "react-icons/ai";
import { MyContext } from "@/pages/_app";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function ContactForm() {
	const { isFormHidden, setIsFormHidden, setIsMessageSent } =
		useContext(MyContext);
	const [mail, setMail] = useState([
		{
			name: "",
			mail: "",
			message: "",
		},
	]);
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm();
	const [data, setData] = useState("");
	const onSubmit = (data) => console.log(data);
	const values = getValues();

	function clickHandler() {
		data !== "" ?? setIsFormHidden(true);
	}
	const settings = {
		serviceID: "default_service",
		templateID: "template_goxv7m2",
	};
	useEffect(() => {
		emailjs.init("4uHGLFtQm9Nsi1rWs");
		setMail({ name: values.name, mail: values.mail, message: values.message });
	}, []);
	function toaster() {
		toast("Message has been sent successfully", {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}

	function submitHandler(data, e) {
		toaster();
		e.preventDefault();
		setIsMessageSent(true);
		setIsFormHidden(true), console.log("data", data);
		emailjs.send(settings.serviceID, settings.templateID, data).then((res) => {
			console.log("SUCCES", res.status, res.text),
				(err) => {
					console.log("Failed", err);
				};
		});
	}

	return (
		<div hidden={isFormHidden}>
			<form
				className={`text-[#f678a4]
					 font-jet text-xl bg-opacity-60  rounded-xl text-center gap-5  flex-col bg-[#0e101c] w-[500px] `}
				onSubmit={handleSubmit(submitHandler)}
			>
				{" "}
				<div className=" bg-[#5963ec] py-2 h-10 here1 mt-2 text-white items-center">
					{" "}
					<p>SEND A MESSAGE</p>
					<AiOutlineClose
						onClick={() => setIsFormHidden(true)}
						size={30}
						className="self-center hover:scale-105 hover:text-red-400 active:text-red-900 duration-200 absolute top-3 right-0 cursor-pointer"
					/>
				</div>
				<div className="flex flex-col placeholder:shadow-slate-700 place items-start w-[500px]">
					<p>Name</p>
					<input
						{...register("name", {
							required: true,
							required:
								"an error occured, please make sure you have correclty filled the name, e-mail and message section ",
						})}
						placeholder="John Doe"
						className="font-jet text-lg  outline-none pl-2 w-full h-10"
					/>
					{errors.name?.type === "required" && <p role="alert"> name is required</p>}
				</div>
				<div className="flex flex-col placeholder:shadow-slate-700 place items-start w-[500px]">
					<p>E-mail</p>
					<input
						{...register("mail", {
							required: true,
							required:
								"an error occured, please make sure you have correclty filled the name, e-mail and message section ",
						})}
						placeholder="john-doe@gmail.com"
						className="font-jet text-lg pl-2 w-full h-10 outline-none"
					/>{" "}
					{errors.mail?.type === "required" && (
						<p role="alert">e-mail is required</p>
					)}
				</div>
				<div className="flex flex-col placeholder:shadow-slate-700 place items-start w-[500px]">
					<p>Message</p>
					<textarea
						{...register("message", {
							required: true,
							required:
								"an error occured, please make sure you have correclty filled the name, e-mail and message section ",
							minLength: 10,
							minLength: "dsads",
						})}
						placeholder="We would like to hire you..."
						className="font-jet text-lg pl-2 w-full h-10 outline-none"
					/>
					{errors.message?.type === "required" && (
						<p role="alert">message is required</p>
					)}
				</div>
				<input
					type="submit"
					className="h-12 font-jet rounded w-full mt-1 hover:scale-105 hover:bg-black hover:text-yellow-300 text-lg text-[#8bff68]  active:scale-110 active:text-white active:text-2xl duration-200 bg-[#5963ec]"
				/>
			</form>
		</div>
	);
}

export default ContactForm;
