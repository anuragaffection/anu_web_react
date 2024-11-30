import React from "react";
import ImgRectangle from "../ImgComponents/ImgRectangle";
import ImgSquareSm from "../ImgComponents/ImgSquareSm";

function DiscoverImgLayout() {
    return (
        <div className="flex flex-col anu-md:grid w-full anu-sm:grid-cols-1 anu-md:grid-cols-2 gap-4 p-10">
            {/* First Row */}
            <div className="grid anu-sm:grid-cols-1 anu-md:grid-cols-2 gap-4">
                <ImgSquareSm
                    to="/talk"
                    src="/placeholder.png?height=400&width=600"
                    alt="Piggy bank"
                    text="How to start saving money"
                    className="flex-1"
                />
                <ImgSquareSm
                    to="/talk"
                    src="/placeholder.png?height=400&width=600"
                    alt="Piggy bank"
                    text="How to start saving money"
                    className="flex-1"
                />
            </div>

            {/* Second Row */}
            <div className="anu-md:row-start-2">
                <ImgRectangle
                    to="/talk"
                    src="/placeholder.png?height=400&width=600"
                    alt="Piggy bank"
                    text="How to start saving money"
                />
            </div>

            {/* Third Row */}
            <div className="bg-lime-500 anu-md:row-span-2">
                <ImgSquareSm
                    to="/talk"
                    src="/placeholder.png?height=400&width=600"
                    alt="Piggy bank"
                    text="How to start saving money"
                    className="flex-1"
                />
            </div>

            {/* Fourth Row */}
            <div className="bg-pink-500 anu-md:col-start-2">
                <ImgRectangle
                    to="/talk"
                    src="/placeholder.png?height=400&width=600"
                    alt="Piggy bank"
                    text="How to start saving money"
                />
            </div>

            {/* Fifth Row */}
            <div className="grid anu-sm:grid-cols-1 anu-md:grid-cols-2 gap-4 bg-amber-500 anu-md:row-start-4">
                <ImgSquareSm
                    to="/talk"
                    src="/placeholder.png?height=400&width=600"
                    alt="Piggy bank"
                    text="How to start saving money"
                    className="flex-1"
                />
                <ImgSquareSm
                    to="/talk"
                    src="/placeholder.png?height=400&width=600"
                    alt="Piggy bank"
                    text="How to start saving money"
                    className="flex-1"
                />
            </div>

            {/* Sixth Row */}
            <div className="bg-blue-500 anu-md:col-start-1 anu-md:row-start-3 anu-md:row-end-5">
                <ImgSquareSm
                    to="/talk"
                    src="/placeholder.png?height=400&width=600"
                    alt="Piggy bank"
                    text="How to start saving money"
                    className="flex-1"
                />
            </div>
        </div>
    );
}

export default DiscoverImgLayout;
