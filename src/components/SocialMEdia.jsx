import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

function SocialMedia() {
	return (
		<>
			<div className="  mx-6 flex flex-col gap-2 max-sm:hidden max-tablet:justify-start ml-2   justify-end items-center mb-3">
				<div className="h-14 w-14  active:scale-125  text-gray-600 duration-200 hover:text-blue-600 bg-white rounded-[50%]  flex justify-center border-[1px] border-solid border-gray-300 hover:border-blue-800 shadow-sm hover:scale-105 items-center">
					<BsTwitter className="h-4 w-4 " />
				</div>
				<div className="h-14 w-14    text-gray-600 duration-200 hover:text-blue-600 bg-white rounded-[50%]  flex justify-center border-[1px] border-solid border-gray-300 hover:border-blue-800 shadow-sm hover:scale-105 items-center">
					<BsTwitter className="h-4 w-4" />
				</div>
				<div className="h-14 w-14    text-gray-600 duration-200 hover:text-blue-600 bg-white rounded-[50%]  flex justify-center border-[1px] border-solid border-gray-300 hover:border-blue-800 shadow-sm hover:scale-105 items-center">
					<BsTwitter className="h-4 w-4" />
				</div>
			</div>
		</>
	);
}
export default SocialMedia;
