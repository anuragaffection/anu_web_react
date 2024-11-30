import React from "react";
import ImgRectangle from "../ImgComponents/ImgRectangle";
import ImgSquareSm from "../ImgComponents/ImgSquareSm";

function DicoverImgLayout() {
    return (

        <div>

            <div className="grid grid-cols-1 md:grid-flow-row md:grid-cols-2 gap-4 p-10 space-y-4 w-full ">
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

                <div className="md:row-span-2 bg-lime-500">
                    <ImgSquareSm
                        to="/talk"
                        src="/placeholder.png?height=400&width=600"
                        alt="Piggy bank"
                        text="How to start saving money"
                        className="flex-1"
                    />
                </div>

                <div className="bg-pink-500 md:col-start-2 ">
                    <ImgRectangle
                        to="/talk"
                        src="/placeholder.png?height=400&width=600"
                        alt="Piggy bank"
                        text="How to start saving money"
                        className=""
                    />
                </div>


                <div className="grid grid-cols-2 gap-4 md:row-start-4 bg-amber-500">
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

                <div className="md:row-start-3 md:row-end-5 md:col-start-1  bg-blue-500">
                    <ImgSquareSm
                        to="/talk"
                        src="/placeholder.png?height=400&width=600"
                        alt="Piggy bank"
                        text="How to start saving money"
                        className="flex-1"
                    />
                </div>


            </div>
        </div>
    );
}

export default DicoverImgLayout;
