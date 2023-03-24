import { useEffect, useState } from "react";
export function MyName({ textDipslay = "flex", fontSize }) {
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
		e.target.style.textShadow = ``;

		e.target.style.animation = "blink 4s infinite alternate both";
		e.target.style.color = `hsla(${Math.random() * 360}, 100%, 80%, 1)`;
	}

	return (
		<div
			style={{ fontSize: `${fontSize}em` }}
			className={`${textDipslay} flex-col  px-10 font-abc   gap-5`}
		>
			<div
				className={
					pic == undefined ? "opacity-90 duration-300" : "duration-300 opacity-0"
				}
			>
				{placeHolderName.split("").map((x) => (
					<a
						onClick={(e) => clickHandler(e)}
						// style={{''}}
						className="tracking-wider text-4xl md:text-6xl  select-none  cursor-pointer text-center hover:scale-125 duration-150 shadow-sm font-Motonotn "
					>
						{flickerLetter(x)}
					</a>
				))}
			</div>
			<p className="text-white"></p>
		</div>
	);
}
