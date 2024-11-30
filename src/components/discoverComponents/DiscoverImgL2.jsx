import React from "react";
import ImgRectangle from "../ImgComponents/ImgRectangle";
import ImgSquareSm from "../ImgComponents/ImgSquareSm";

function DicoverImgLayout2() {
    return (
        <div className="flex w-full flex-col gap-4 space-y-4 p-10 md:grid md:grid-flow-row md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
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

            <div className="md:row-start-2">
                <ImgRectangle
                    to="/talk"
                    src="/placeholder.png?height=400&width=600"
                    alt="Piggy bank"
                    text="How to start saving money"
                    className=""
                />
            </div>

            <div className="bg-lime-500 md:row-span-2">
                <ImgSquareSm
                    to="/talk"
                    src="/placeholder.png?height=400&width=600"
                    alt="Piggy bank"
                    text="How to start saving money"
                    className="flex-1"
                />
            </div>

            <div className="bg-pink-500 md:col-start-2">
                <ImgRectangle
                    to="/talk"
                    src="/placeholder.png?height=400&width=600"
                    alt="Piggy bank"
                    text="How to start saving money"
                    className=""
                />
            </div>

            <div className="grid grid-cols-2 gap-4 bg-amber-500 md:row-start-4">
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

            <div className="bg-blue-500 md:col-start-1 md:row-start-3 md:row-end-5">
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

export default DicoverImgLayout2;
