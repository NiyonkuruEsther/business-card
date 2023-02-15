import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillAlarmFill } from "react-icons/bs";

function App() {
  return (
    <div className="flex flex-col h-screen justify-center bg-black">
      <div className="rounded-3xl bg-gray-100 max-w-sm mx-auto flex flex-col gap-8 m-4 overflow-hidden cont ring-8 fill-neutral-700">
        <img
          src="../src/assets/img.png"
          alt=""
          className="w-full max-h-80 object-cover"
        />
        <div className="px-8 flex flex-col gap-2">
          <h1 className="font-bold text-xl text-center">LAURA SMITH</h1>
          <p className="text-[#F47D27] text-center">Frontend Developer</p>
          <small className="text-center">laurasmith.website</small>{" "}
          <button className="rounded-2xl w-full text-center justify-center flex gap-4 text-lg p-2 bg-white mt-3 shadow-lg">
            <MdEmail className="text-3xl" />
            <p className="text-xl font-semibold">Email</p>
          </button>
          <div className="flex flex-col gap-4 pt-4">
            <h1 className="font-semibold text-xl">About</h1>
            <h1 className="">
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </h1>
          </div>
          <div className="flex flex-col gap-4 pt-4">
            <p className="font-semibold text-xl">Interests</p>
            <p>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>
        <div className="bg-[#D5D4D8] px-8 py-2 mt-4 flex gap-6 text-6xl text-gray-500">
          <AiFillTwitterCircle />
          <FaFacebook />
          <FaInstagram />
          <FaGithub />
          <FaLinkedin className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default App;
