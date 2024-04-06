import React from "react";
import "./post.css";

function Post(props) {
	return (
		<div className="h-screen w-full relative">
			<div
					className="absolute w-full h-24 z-10
           post_topFadeIn
            "
				/>
        <img
				src={props.image}
				alt={props.altText}
				className="h-screen absolute"
			/>
			<div className="flex flex-col justify-end h-screen ">
				<div
					className="w-full h-24 z-10
           post_fadeIn
            "
				/>

				<div
					className=" w-full h-fit
            
           post_textBg z-10 "
				>
					<div className="p-8 ">{props.text}</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
