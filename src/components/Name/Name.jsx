import { useEffect, useState } from "react";
export default function Name({ textDipslay = "flex", fontSize }) {
	const [isShown, setIsshown] = useState(false);
	const [pic, setPic] = useState(undefined);
	const [hovered, setHovered] = useState(false);

	const placeHolderName = " Muhammed Furkan Ülgen";

	function flickerLetter(text) {
		return (
			<span
				style={{
					color: `hsla(${Math.random() * 360}, 100%, 80%, 1)`,
					animation: `text-flicker-in-glow ${Math.random() * 4}s linear both `,
				}}
			>
				{text}
			</span>
		);
	}

	function clickHandler(e) {
		e.target.style.animation = "text-flicker-in-glow 	1s linear both ";
		e.target.style.color = `hsla(${Math.random() * 360}, 100%, 80%, 1)`;
	}

	return (
		<div
			style={{ fontSize: `${fontSize}em` }}
			className={`${textDipslay} flex-col  px-10 font-abc   gap-5`}
		>
			<div
				className={
					pic == undefined ? "ani opacity-90 duration-300" : "duration-300 opacity-0"
				}
			>
				{placeHolderName.split("").map((x) => (
					<button
						onClick={(e) => clickHandler(e)}
						id="x"
						className={`tracking-widest focus:animate-flicker xxx text-4xl md:text-6xl  select-none  cursor-pointer text-center hover:scale-105 duration-150 shadow-sm font-Motonotn `}
					>
						{flickerLetter(x)}
					</button>
				))}
			</div>
			<p className="text-white"></p>
		</div>
	);
}
