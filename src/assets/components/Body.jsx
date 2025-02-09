import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import flowerpattern from "/assets/fp.jpg";
import audio from "/assets/music/portfolioaudio.mp3";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { useMediaQuery } from "react-responsive";
import emojibackground from "/assets/emoji.jpg";
import {
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
} from "../../../src/Flowerimage.jsx";
import wave from "/assets/images/waves.png";
import { useGSAP } from "@gsap/react";
import axios from "axios";

gsap.registerPlugin(Draggable);

const Body = () => {
  useGSAP(() => {
    const drag = document.querySelector(".draag");
    Draggable.create(drag, {
      onDragStart: function () {
        console.log("dragging");
      },
    });
  }, []);
  const [audiocontroller, setaudiocontroller] = useState(false);
  const audeioref = useRef();
  const ismobile = useMediaQuery({ maxWidth: 768 });
  useEffect(() => {
    if (audiocontroller) {
      console.log("on");
      audeioref.current.play();
    } else {
      console.log("off");
      audeioref.current.pause();
    }
  }, [audiocontroller]);
  const [namee, setnamee] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const serid = import.meta.env.VITE_SERVICE_ID;
  const tid = import.meta.env.VITE_TEMPLATE_ID;
  const pid = import.meta.env.VITE_PUBLIC_ID;

  const submit = async () => {
    const serviceid = serid;
    const templateid = tid;
    const publicid = pid;
    var data = {
      service_id: serviceid,
      template_id: templateid,
      user_id: publicid,
      template_params: {
        from_name: namee,
        from_email: email,
        message: message,
      },
    };
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res);
      setnamee("");
      setemail("");
      setmessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-yellow-500 min-h-screen">
      <div className="bg-yellow-500 w-full h-32 text-white flex items-center justify-between lg:px-60 px-40 max-lg:px-10 max-lg:mt-10 mt-24">
        <div className="relative ">
          <i className="bi bi-flower1 text-5xl font-bold  size-20 p-3 shadow-100 rounded-full"></i>
        </div>
        <audio src={audio} ref={audeioref} className="size-40"></audio>
        {audiocontroller ? (
          <i
            className="bi bi-volume-up-fill text-white text-4xl rounded-full size-16 p-3 shadow-200  "
            onClick={() => {
              setaudiocontroller(false);
            }}
          ></i>
        ) : (
          <i
            className="bi bi-volume-off-fill text-white text-4xl  size-16 p-3  shadow-100  rounded-full "
            onClick={() => {
              setaudiocontroller(true);
            }}
          ></i>
        )}
      </div>
      <div className=" relative grid  h-[80vh] grid-cols-2 max-lg:grid-cols-1 max-lg:px-10 mx-auto lg:px-60 px-40 text-white pt-36 max-lg:pt-10">
        <div className="z-10   flex flex-col justify-between py-16">
          <div>
            <p className="text-xl font-bold xl:translate-y-10  lg:translate-y-8 ">
              I'm
            </p>
            <p
              className="2xl:text-[12rem] xl:te lg:text-[7rem]  max-lg:text-[7rem] font-bold "
              style={{
                backgroundImage: `url(${flowerpattern})`,
                backgroundClip: "Text",
                color: "transparent",
                backgroundSize: "20rem",
                backgroundPositionX: "20%",
              }}
            >
              FLower
            </p>
            <p className="text-justify xl:w-[90%] xl:-translate-y-8  lg:-translate-y-6  ">
              Flowers are nature's vibrant expressions of beauty, often
              symbolizing growth, renewal, and life's fleeting moments. They
              come in a vast array of colors, shapes, and sizes, each with its
              own unique scent and charm. Whether in a garden, a wild meadow, or
              a carefully arranged bouquet, flowers captivate the senses and
              serve various purposes. Beyond their visual appeal, flowers play a
              critical role in ecosystems, attracting pollinators like bees,
              butterflies, and birds, which help ensure the survival of plant
              species. They are also used in cultural traditions, medicine, and
              art, further highlighting their significance in human life.
            </p>
          </div>
          <div className="w-full max-lg:flex max-lg:justify-center max-lg:items-center">
            <i className="bi bi-flower3 text-4xl"></i>
            <i className="bi bi-flower3 text-4xl"></i>
          </div>
        </div>
        <div className={`${ismobile ? "absolute top-0 z-0 w-full " : " "}`}>
          <Canvas
            style={{
              height: "60rem",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="block"
          >
            <directionalLight
              color={"#ffffff"}
              position={[1, ismobile ? -5 : 1, -5]}
              intensity={ismobile ? 0 : 2}
            />
            <OrbitControls enableDamping enablePan enableRotate />
            <Sparkles
              size={6}
              color="orange"
              count={1000}
              speed={1}
              noise={1}
              scale={5}
              position={[1, -1, 0]}
            />
            <Model
              scale={ismobile ? 0.4 : 0.9}
              position={[ismobile ? -0.6 : -1, ismobile ? -1 : -3, 1]}
              rotation={[0, 80, 0]}
            />
          </Canvas>
        </div>
      </div>
      <div className="h-screen flex flex-col gap-20 justify-center items-center">
        <p className="text-5xl font-bold text-white">Gallery</p>
        <div className="h-[40%] w-[40%] rounded-2xl bg-gray-300 scrollbar shadow-100 flex justify-between items-center px-10 gap-5 flex-shrink-0  max-lg:flex-col max-lg:overflow-x-scroll max-lg:py-10">
          <div className="rounded-2xl h-[80%] w-[30%]  hover:flex-shrink-0 hover:duration-300 bg-gradient-to-b from-amber-600 to-yellow-500 transition-all ease-in-out transform hover:scale-105 max-lg:flex-shrink-0 max-lg:w-[100%] max-lg:h-[22%]">
            {" "}
            <img
              src={l}
              className="opacity-0 w-full h-full object-cover object-center rounded-2xl hover:opacity-100"
              alt=""
            />
          </div>
          <div className="rounded-2xl h-[80%] w-[30%]  hover:flex-shrink-0 hover:duration-300 bg-gradient-to-b from-amber-600 to-yellow-500 transition-all ease-in-out transform hover:scale-105 max-lg:flex-shrink-0 max-lg:w-[100%] max-lg:h-[22%]">
            {" "}
            <img
              src={k}
              className="opacity-0 w-full h-full object-cover object-center rounded-2xl hover:opacity-100"
              alt=""
            />
          </div>
          <div className="rounded-2xl h-[80%] w-[30%]  hover:flex-shrink-0 hover:duration-300 bg-gradient-to-b from-amber-600 to-yellow-500 transition-all ease-in-out transform hover:scale-105 max-lg:flex-shrink-0 max-lg:w-[100%] max-lg:h-[22%]">
            {" "}
            <img
              src={j}
              className="opacity-0 w-full h-full object-cover object-center rounded-2xl hover:opacity-100"
              alt=""
            />
          </div>
          <div className="rounded-2xl h-[80%] w-[30%]  hover:flex-shrink-0 hover:duration-300 bg-gradient-to-b from-amber-600 to-yellow-500 transition-all ease-in-out transform hover:scale-105 max-lg:flex-shrink-0 max-lg:w-[100%] max-lg:h-[22%]">
            {" "}
            <img
              src={i}
              className="opacity-0 w-full h-full object-cover object-center rounded-2xl hover:opacity-100"
              alt=""
            />
          </div>
          <div className="rounded-2xl h-[80%] w-[30%]  hover:flex-shrink-0 hover:duration-300 bg-gradient-to-b from-amber-600 to-yellow-500 transition-all ease-in-out transform hover:scale-105 max-lg:flex-shrink-0 max-lg:w-[100%] max-lg:h-[22%]">
            {" "}
            <img
              src={h}
              className="opacity-0 w-full h-full object-cover object-center rounded-2xl hover:opacity-100"
              alt=""
            />
          </div>
          <div className="rounded-2xl h-[80%] w-[30%]  hover:flex-shrink-0 hover:duration-300 bg-gradient-to-b from-amber-600 to-yellow-500 transition-all ease-in-out transform hover:scale-105 max-lg:flex-shrink-0 max-lg:w-[100%] max-lg:h-[22%]">
            <img
              src={g}
              className="opacity-0 w-full h-full object-cover object-center rounded-2xl hover:opacity-100"
              alt=""
            />
          </div>
          <div className="rounded-2xl h-[80%] w-[30%]  hover:flex-shrink-0 hover:duration-300 bg-gradient-to-b from-amber-600 to-yellow-500 transition-all ease-in-out transform hover:scale-105 max-lg:flex-shrink-0 max-lg:w-[100%] max-lg:h-[22%]">
            <img
              src={f}
              className="opacity-0 w-full h-full object-cover object-center rounded-2xl hover:opacity-100"
              alt=""
            />
          </div>
          <div className="rounded-2xl h-[80%] w-[30%]  hover:flex-shrink-0 hover:duration-300 bg-gradient-to-b from-amber-600 to-yellow-500 transition-all ease-in-out transform hover:scale-105 max-lg:flex-shrink-0 max-lg:w-[100%] max-lg:h-[22%]">
            <img
              src={e}
              className="opacity-0 w-full h-full object-cover object-center rounded-2xl hover:opacity-100"
              alt=""
            />
          </div>
          <div className="rounded-2xl h-[80%] w-[30%]  hover:flex-shrink-0 hover:duration-300 bg-gradient-to-b from-amber-600 to-yellow-500 transition-all ease-in-out transform hover:scale-105 max-lg:flex-shrink-0 max-lg:w-[100%] max-lg:h-[22%]">
            <img
              src={d}
              className="opacity-0 w-full h-full object-cover object-center rounded-2xl hover:opacity-100"
              alt=""
            />
          </div>
          <div className="rounded-2xl h-[80%] w-[30%]  hover:flex-shrink-0 hover:duration-300 bg-gradient-to-b from-amber-600 to-yellow-500 transition-all ease-in-out transform hover:scale-105 max-lg:flex-shrink-0 max-lg:w-[100%] max-lg:h-[22%]">
            <img
              src={c}
              className="opacity-0 w-full h-full object-cover object-center rounded-2xl hover:opacity-100"
              alt=""
            />
          </div>
          <div className="rounded-2xl h-[80%] w-[30%]  hover:flex-shrink-0 hover:duration-300 bg-gradient-to-b from-amber-600 to-yellow-500 transition-all ease-in-out transform hover:scale-105 max-lg:flex-shrink-0 max-lg:w-[100%] max-lg:h-[22%]">
            <img
              src={b}
              className="opacity-0 w-full h-full object-cover object-center rounded-2xl hover:opacity-100"
              alt=""
            />
          </div>
          <div className="rounded-2xl h-[80%] w-[30%]  hover:flex-shrink-0 hover:duration-300 bg-gradient-to-b  from-amber-600 to-yellow-500 transition-all ease-in-out transform hover:scale-105 max-lg:flex-shrink-0 max-lg:w-[100%] max-lg:h-[22%]">
            <img
              src={a}
              className="opacity-0 w-full h-full object-cover object-center rounded-2xl hover:opacity-100"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" relative h-[120vh] max-lg:h-screen bg-gray-200 flex justify-center items-center  z-0 ">
        <img src={wave} className="absolute -top-1 z-0" alt="" />
        <img src={wave} className="absolute -bottom-1 rotate-180 z-0" alt="" />
        <p className="absolute top-[24%] left-[72%] text-5xl font-handwritten rotate-6  z-0 max-lg:text-4xl max-lg:left-[35%] max-lg:top-[10%] max-lg:rotate-0  ">
          Something is <br /> under this
          <i className="bi bi-arrow-down"></i>
        </p>
        <p className="absolute top-[22%] left-[18%]  text-5xl font-handwritten -rotate-6  z-0 max-lg:top-[55%] max-lg:text-4xl ">
          place the <br /> photo here
          <i className="bi bi-arrow-down"></i>
        </p>
        <div className="border-[14px] border-dashed absolute top-[35%] -rotate-12 left-[22%] border-gray-400 h-48 w-40 max-lg:top-[65%] max-lg:left-[30%] max-lg:h-36"></div>
        <p className="font-handwritten absolute top-[38%] left-[70%] rotate-12 text-7xl z-0 max-lg:text-5xl max-lg:left-[33%] max-lg:top-[21%] ">
          {" "}
          Have a <br /> great day
        </p>
        <div className="bg-gray-100 absolute top-[35%] left-[65%] h-[29rem] shadow-300  w-96 draag z-50 grid grid-rows-2  rotate-12 max-lg:h-[15rem] max-lg:top-[21%] max-lg:left-[30%] max-lg:w-52">
          <div className="flex justify-center items-center ">
            <img src={m} className="w-[90%] h-[90%] " alt="" />
          </div>
          <div className="flex justify-center items-center">
            <p className="text-7xl font-Herr max-lg:text-5xl">Ohh! flower</p>
          </div>
        </div>
      </div>
      <div className="h-screen relative w-full grid grid-cols-2 max-lg:grid-cols-1">
        <div className="h-full relative w-full  flex items-center justify-center">
          <div className="h-[70%] w-[65%] rounded-3xl bg-white/10 backdrop-blur-sm z-10 flex flex-col justify-center items-center gap-5 max-lg:absolute max-lg:top-40 max-lg:left-10 max-lg:w-[80%] max-lg:h-[70%] ">
            <p className="text-left text-3xl text-white w-full px-20"> Name</p>
            <input
              type="text"
              className="rounded-2xl p-5 h-14 w-[80%] outline-none bg-amber-300 text-white"
              value={namee}
              onChange={(e) => setnamee(e.target.value)}
              id=""
            />
            <p className="text-left text-3xl text-white w-full px-20">email</p>
            <input
              type="text"
              className="rounded-2xl p-5 h-14 w-[80%] outline-none bg-amber-300 text-white"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              id=""
            />
            <p className="text-left text-3xl text-white w-full px-20">
              message
            </p>
            <textarea
              type="text"
              className="rounded-2xl p-5 h-40 w-[80%] outline-none bg-amber-300 text-white"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              id=""
            />
            <div className="w-full px-20 flex items-center gap-2">
              <button
                onClick={submit}
                className="bg-amber-500 text-white p-3 text-2xl rounded-2xl flex items-center gap-2"
              >
                send
                <i className="bi bi-send text-lg"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full max-lg:absolute max-lg:top-20 max-lg:h-[80%] ">
          <img
            src={emojibackground}
            className="h-full w-full object-center object-cover opacity-50 blur-sm z-0 max-lg:blur-0 "
            alt=""
          />
          <div
            className="bg-white h-72 w-96 z-10 absolute top-[40%] left-[40%] flex justify-center items-center max-lg:hidden "
            style={{
              clipPath:
                "polygon(0% 0%, 100% 9%, 100% 71%, 80% 70%, 51% 100%, 56% 70%, 0 70%)",
            }}
          >
            <p className="text-xl font-sans px-5 -translate-y-9">
              Your feedback is the flower that helps my growth—send it, and
              let’s bloom together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
