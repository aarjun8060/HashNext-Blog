import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import {PenSquare ,Search} from "lucide-react"
import { Button } from "@/components/ui/button";

const Navbar = () => {
    return (
        <nav className="m-0 p-0 box-border text-base outline-purple/30 duration-100 border w-full  h-16 justify-center items-center flex">
            <div className="flex justify-between  w-11/12">
                <Link href={"/"} 
                    className="flex items-center"
                >
                    <Image
                        src="/hashtag.png"
                        alt=""
                        width={40}
                        height={40}
                        className="flex"
                    />
                </Link>

                <div
                    className="bg-white relative left-0 top-full mt-0 border-b border-grey md:flex hidden"
                >   <div>
                    <Search
                        className="top-2 right-1 absolute text-gray-400"
                    />
                    <Input
                        type="text"
                        name="search"
                        placeholder="Search"
                        className="bg-gray-100 text-gray-300 font-medium text-lg rounded-xl"
                    />
                </div>
                </div>
                <div className="flex justify-end items-center w-full md:w-fit">
                    <Search
                        className=" text-gray-400 md:hidden"
                    />
                </div>
                <div className="space-x-2 flex items-center">
                    <Button
                    variant={"ghost"} 
                    className="border-gray-300 rounded-xl hover:bg-gray-200 text-gray-600"
                    >
                        <PenSquare /> Write
                    </Button>
                    
                    <Button 
                    variant={"ghost"}
                    className="border-gray-300 rounded-xl hover:bg-gray-200 text-gray-600"
                    >
                        Sign In
                    </Button>
                    <Button
                        className="bg-gray-600 rounded-xl text-white hover:text-gray-600 hidden md:flex"
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar