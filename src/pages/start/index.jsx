import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import images from "../../constants/images";
import { useState, useEffect } from "react";
import Name from "@/components/Name/Name";

function Index() {
	const router = useRouter();
	const [opa, setOpa] = useState("0");
	const [isHidden, setIsHidden] = useState("");

	useEffect(() => {
		setTimeout(() => {
			router.push("../desktop");
		}, 7000);
	}, []);

	return (
		<div className=" h-screen  overflow-hidden w-screen">
			<div className="flex h-screen w-screen items-center justify-center p-6 bg-black flex-col">
				<Name />
				<div className="relative flex">
					<Image src={images.loading} width={600} alt="" />
					<div className="h-3 w-32 bg-black absolute bottom-0 right-0"></div>
				</div>
			</div>{" "}
		</div>
	);
}

export default Index;
