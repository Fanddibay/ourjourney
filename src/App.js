import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaps } from "@fortawesome/free-regular-svg-icons";
import { faMapSigns, faMoon } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/logo.png";
import jumbotron from "./images/jumbotron.jpeg";
import favorite from "./images/favorite-1.jpeg";
import favorite2 from "./images/favorite-2.jpeg";
import favorite3 from "./images/favorite-3.jpeg";
import favorite4 from "./images/sidang-1.jpeg";
import favorite5 from "./images/sidang-2.jpeg";
import rita1 from "./images/rita-1.jpeg";
import rita2 from "./images/rita-2.jpeg";
import rita3 from "./images/rita-3.jpeg";
import wisuda1 from "./images/wisuda-1.jpeg";
import wisuda2 from "./images/wisuda-2.jpeg";
import jalan1 from "./images/jalan-1.jpeg";
import jalan2 from "./images/jalan-2.jpeg";
import jalan3 from "./images/jalan-3.jpeg";
import jalan4 from "./images/jalan-4.jpeg";
import jalan5 from "./images/jalan-5.jpeg";
import jalan6 from "./images/jalan-6.jpeg";
import aib1 from "./images/aib-1.jpeg";
import aib2 from "./images/aib-2.jpeg";
import aib3 from "./images/aib-3.jpeg";
import cantik1 from "./images/cantik.jpeg";
import cantik2 from "./images/cantik-2.jpeg";
import fotobareng from "./images/fotobareng.jpeg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

function App() {
  const data = [
    {
      id: 1,
      judul1: "Awal Mula Bertemu",
      judul2: "Nungguin ibu kita BU ALPHA!",
      judul3: "Ujan-ujanan nich gajadi ke alun-alun banjoemas",
      judul4: "Dateng sidangnya kamoeh",
      judul5: "Kamoeh dateng sidangnya akuh",
      deskripsi1:
        "eitss kamu kira ini bakal dihapus?? oh tidak hehe.. ini kenangan pas kita bbeli apa hayooo? tetott, yang bener ini beli mie ayam, oiya bener ya yauda gausa mencak-mencak hehe.. intinya disini foto yang bagus untuk pertama kali..",
      deskripsi2:
        "Nunggu ibu kita tapi bukan ibu kartini tapi bunda Alpha Nadeira Mnadamdari.. masih inget kan aku? iya dong banyak kenangan yang terjalin seperti kaya kamu..",
      deskripsi3:
        "Eh ujan gerimis ajee. ikan teri di asinin eh kamu jangan nangis aje.. biar besok bisa ke alun alun banyumas.. hiya hiyaa gagal nii ye ke sanaaa..",
      deskripsi4:
        "Oii semuaaa ada yang lagi sidang nihh, namanya Heni Fajriyah sayangnya akoo, btw walopun kamu ninggalin aku, aku tetep enjoy.. buktinya pose ku seperti tanpa beban wkwk..",
      deskripsi5:
        "Ihiww abis baca yang sebelah cepet banget langsung aku yang sidang kan? IYAA kan cuma di slide tapi ga realitanyaa.. tapi disni aku banyak banyak terima kasih karena kamu udah mau bantu banyak aku sebelum dan sesudah sidang ihiw..",
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="">
        <nav className="">
          <div className="md:hidden block">
            {/* left content header */}
            <div className="float-left absolute top-5 left-5">
              <img src={logo} className="mt-2 "></img>
            </div>
            {/* right content header */}
            <img src={jumbotron} className="w-[100vw] rounded-br-[50%]"></img>
            <div className="float-right flex mt-1 absolute top-5 right-5">
              <a
                href="https://drive.google.com/drive/folders/1e5nOOH8xMDIE8GnJBNSTyJC504dG--pv?usp=sharing"
                target={"_blank"}
                className="buttonPrimary hover:opacity-90 hover:transition-all hover:duration-700"
              >
                Download Foto
              </a>
              <button>
                <FontAwesomeIcon
                  icon={faMoon}
                  className="ml-4 text-4xl text-[#656574] hover:opacity-80 hover:transition-all hover:duration-700"
                ></FontAwesomeIcon>
              </button>
            </div>
            <div className="top-[30%] left-[5%] absolute">
              <div className="items-center mt-10">
                <h1 className="font-bold text-[28px] tracking-widest">
                  Together we can win <br></br> in everything <br></br>
                  <span className="bg-[#656574] rounded-lg pr-4 pl-2">moment...</span>
                </h1>
              </div>
            </div>
          </div>
        </nav>
        {/* hero */}
      </header>
      <main className="mt-[6rem] md:hidden block">
        {/* tentang kita */}
        <div className="">
          <h1 className="text-2xl text-center font-bold mb-12">
            <span className="bg-[#a4c2a6] rounded-tr-[50%] px-3 py-1">Tentang</span> Kita
          </h1>
          <div className="">
            {data.map((user) => (
              <>
                <Swiper
                  pagination={{
                    type: "fraction",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper bubble text-white"
                >
                  <SwiperSlide className="shadow-slate-800 ">
                    <img src={favorite} className="shadow-lg rounded-xl mx-auto bg-center"></img>
                    <h5 className="text-center text-xl  text-gray-600 font-bold mt-4">{user.judul1}</h5>
                    <p className="mb-12 text-center mx-12 mt-4 text-light text-sm">{user.deskripsi1}</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={favorite2} className="shadow-lg rounded-xl mx-auto bg-center"></img>
                    <h5 className="text-center text-xl  text-gray-600 font-bold mt-4">{user.judul2}</h5>
                    <p className="mb-12 text-center mx-12 mt-4 text-light text-sm">{user.deskripsi2}</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={favorite3} className="shadow-lg rounded-xl mx-auto bg-center"></img>
                    <h5 className="text-center text-xl  text-gray-600 font-bold mt-4">{user.judul3}</h5>
                    <p className="mb-12 text-center mx-12 mt-4 text-light text-sm">{user.deskripsi3}</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={favorite4} className="shadow-lg rounded-xl mx-auto bg-center"></img>
                    <h5 className="text-center text-xl  text-gray-600 font-bold mt-4">{user.judul4}</h5>
                    <p className="mb-12 text-center mx-12 mt-4 text-light text-sm">{user.deskripsi4}</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={favorite5} className="shadow-lg rounded-xl mx-auto bg-center"></img>
                    <h5 className="text-center text-xl  text-gray-600 font-bold mt-4">{user.judul5}</h5>
                    <p className="mb-12 text-center mx-12 mt-4 text-light text-sm">{user.deskripsi5}</p>
                  </SwiperSlide>
                </Swiper>
              </>
            ))}
          </div>
        </div>
        {/* wisuda */}
        <div className="mt-36">
          <div className="">
            <div className="bg-[#a4c2a6] rounded-tr-[50%] rounded-bl-[50%] px-6 py-16">
              <div className="text-white">
                <div className="flex">
                  <div className="w-1/2 mt-36">
                    {" "}
                    <h1 className="text-4xl mt-12 ">
                      Persiapan <br></br> sebelum Wisuda
                    </h1>
                    <figure className="text-lg tracking-widest leading-5">12 September 2022</figure>
                  </div>
                  <img src={wisuda1} className="w-1/2 h-[100%] ml-12 mt-36 mb-12 bg-center"></img>
                </div>
                <p className="text-light  text-gray-600 text-center text-sm border-b-4 pb-8">
                  Ini foto persiapan untuk wisuda.. Fotonya di Te Aming x Auntie bersama Joni dan Dhea, yaa walaupun ada
                  drama sedikit. Oiya abis foto ini kita pergi makan bakso abis tu ke Rita Super Mall deh.. Inget kan
                  aku? jelas emangnya kamu pelupa huehe.
                </p>
                <div className="flex">
                  <img src={wisuda2} className="w-1/2 h-[100%] mr-8 mt-12 bg-center"></img>
                  <div className="w-1/2 mt-28">
                    <h1 className="text-4xl ">Wisuda I</h1>
                    <figure className="text-lg tracking-widest leading-5">12 September 2022</figure>
                  </div>
                </div>
                <p className="text-light text-gray-600 text-right mt-8 text-sm ">
                  At last.. Akhirnya wisuda setelah menghadapi drama perkuliahan yang begitu syulitt, tapi bukan rehan.
                  tapi ini lebih syulit karena harus nungguin drama dengan dosen TA.. ngerjain tugas bareng, kamu
                  ngajarin aku bantuin aku.. makasii yaa hihi, oke next, kelompokan bareng dan banyak dilalui bareng yaa
                  walau kamu atau aku masih sombong tapi big thanks udah jadi{" "}
                  <span className="font-bold">Support Sytem akohh selama kuliah</span> semoga kedepannya tetap bareng
                  dan bisa lebih serius lagi yaaa ... LOVE U :))
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Jalan Jalan */}
        <div className="mt-36">
          <div>
            <h1 className="text-center mb-12 text-2xl font-bold text-gray-600">
              Edisi <span className="underlined bg-[#a4c2a6] p-1 rounded-tl-[30%] rounded-br-[30%]">Jalan - Jalan</span>{" "}
              nihh!
            </h1>
            <>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                navigation={true}
                modules={[Pagination, Navigation]}
                pagination={{
                  clickable: true,
                  type: "bullets",
                }}
                className="mySwiper bubble_2"
              >
                <SwiperSlide className="mb-4">
                  <img src={jalan1} className=" rounded-xl mx-auto h-[450px]"></img>
                  <h1 className="mt-12 text-lg    text-gray-600 font-regular tracking-wide text-center px-[3.7rem]">
                    Lagi gabut... eh ketemu hidden gems Purwokerto nich yang di cari - cari,{" "}
                    <span className="italic">FOTO AHH!</span>
                  </h1>
                  <p className="text-end mr-8 text-sm  text-gray-600 italic tracking-wide mt-8 mb-6">
                    {" "}
                    <FontAwesomeIcon
                      icon={faMapSigns}
                      className="ml-4 text-xl  text-gray-600 text-[#4A4A48] hover:opacity-80 hover:transition-all hover:duration-700"
                    ></FontAwesomeIcon>{" "}
                    Jembatan Logawa, Purwokerto
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={jalan2} className="h-[450px]  rounded-xl mx-auto"></img>
                  <h1 className="mt-12 text-lg  text-gray-600 font-regular tracking-wide text-center px-[3.7rem]">
                    Kemarin udah foto, sebagai hadiah karena kamu udah sidang kita kunjungin nih,{" "}
                    <span className="font-bold">Jembatan Logawa Pride!</span>
                  </h1>
                  <p className="text-end mr-8 text-sm  text-gray-600 italic tracking-wide mt-8 mb-6">
                    {" "}
                    <FontAwesomeIcon
                      icon={faMapSigns}
                      className="ml-4 text-xl  text-gray-600 text-[#4A4A48] hover:opacity-80 hover:transition-all hover:duration-700"
                    ></FontAwesomeIcon>{" "}
                    Jembatan Logawa, Purwokerto
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={jalan3} className="h-[450px] rounded-xl mx-auto"></img>
                  <h1 className="mt-12 text-lg  text-gray-600 font-regular tracking-wide text-center px-[3rem]">
                    Pergi ke Pengandaran bareng jondhe, tapi ga bareng cuma 1 tujuan karena misah..., tapi. Berangkat
                    pulang ada yang sakit
                    <span className="font-bold ml-4">HeHEhe</span>
                  </h1>
                  <p className="text-end mr-8 text-sm  text-gray-600 italic tracking-wide mt-8 mb-6">
                    {" "}
                    <FontAwesomeIcon
                      icon={faMapSigns}
                      className="ml-4 text-sm  text-gray-600 text-[#4A4A48] hover:opacity-80 hover:transition-all hover:duration-700"
                    ></FontAwesomeIcon>{" "}
                    Pantai Pasir Putih, Pengandaran
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={jalan6} className="h-[450px] rounded-xl mx-auto"></img>
                  <h1 className="mt-12 text-lg  text-gray-600 font-regular tracking-wide text-center px-[3.7rem]">
                    Tebak ini mau kemana hayoo..? <br></br>Yaps betul ke Rita Super Mall <br></br>
                    <span className="underline italic">Sebelumnya benerin jam dulu yekan..</span>
                  </h1>
                  <p className="text-end mr-8 text-sm  text-gray-600 italic tracking-wide mt-8 mb-6">
                    {" "}
                    <FontAwesomeIcon
                      icon={faMapSigns}
                      className="ml-4 text-sm  text-gray-600 text-[#4A4A48] hover:opacity-80 hover:transition-all hover:duration-700"
                    ></FontAwesomeIcon>{" "}
                    Jl. Kampus, Purwokerto
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={jalan5} className="h-[450px] rounded-xl h-[420px] mx-auto"></img>
                  <h1 className="mt-12 text-lg  text-gray-600 font-regular tracking-wide text-center px-[3.7rem]">
                    First but not least, karena ini mendadak banget tanpa perancaan yang jelas wkwk, tapi intinya
                    seru...
                    <span className="font-bold ml-4 italic">KakU BaNGeT Ya KaCk</span>
                  </h1>
                  <p className="text-end mr-8 text-sm  text-gray-600 italic tracking-wide mt-8 mb-6">
                    {" "}
                    <FontAwesomeIcon
                      icon={faMapSigns}
                      className="ml-4 text-sm  text-gray-600 text-[#4A4A48] hover:opacity-80 hover:transition-all hover:duration-700"
                    ></FontAwesomeIcon>{" "}
                    Kebun Teh Tambi, Dieng
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={jalan4} className="h-[450px] rounded-xl mx-auto"></img>
                  <h1 className="mt-12 text-lg  text-gray-600 font-regular tracking-wide text-center px-[3.7rem]">
                    Terakhir main yang jauh nih.. tapi tidak untuk kedepannya dongg.. IYA GAK??
                    <span className="font-bold ml-4 italic">BTW ada yang jatuh disini ges wkwk</span>
                  </h1>

                  <p className="text-end mr-8 text-sm  text-gray-600 italic tracking-wide mt-8 mb-6">
                    {" "}
                    <FontAwesomeIcon
                      icon={faMapSigns}
                      className="ml-4 text-sm  text-gray-600 text-[#4A4A48] hover:opacity-80 hover:transition-all hover:duration-700"
                    ></FontAwesomeIcon>{" "}
                    Embung Kledung, Wonosobo
                  </p>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </div>
        {/* Rita */}
        <div className="mt-36">
          <div className="">
            <>
              <h1 className="text-center text-2xl font-bold  mb-4 text-white">
                <span className="rounded-tl-[100%] rounded-tr-[100%]  bg-[#656574] px-6 py-12">
                  Edisi Foto di Rita NICH
                </span>
              </h1>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                navigation={true}
                modules={[Pagination, Navigation]}
                pagination={{
                  clickable: true,
                  type: "bullets",
                }}
                className="mySwiper bubble_2"
              >
                <SwiperSlide>
                  <img src={rita1} className="rounded-xl mx-auto mb-16 shadow-lg h-[450px]"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={rita2} className=" rounded-xl mx-auto mb-16 shadow-lg  h-[450px]"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={rita3} className=" rounded-xl mx-auto mb-16 shadow-lg h-[450px]"></img>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </div>
        {/* cantiknya aku */}
        <div className="mt-36">
          <div className="">
            <div className="bg-[#a4c2a6] rounded-tl-[50%] rounded-br-[50%] px-6 py-16">
              <div className="text-white">
                <div className="flex">
                  <img src={cantik1} className="w-1/2 mr-12 w-[50%] h-[100%]  shadow-lg rounded-xl "></img>
                  <div className="w-1/2 mt-24">
                    <h1 className="text-2xl text-right ">Cantiknya aku, keknya ini pas lebaran?</h1>
                    <figure className="text-lg tracking-widest leading-5 text-right">Punyakuuu :))</figure>
                  </div>
                </div>
                <p className="text-light  text-justify mt-12 text-light text-[14px]">
                  Cantiknyaa aku, duhhh makin - makin..., Moga makin jadi yang terbaik yaaa ay, baik dunia maupun
                  akhirat pokoknya love u sekebonnn..{" "}
                  <span className="font-bold">fun fact aku paling suka foto yang ini lo..</span>
                </p>
                <div className="flex">
                  <div className="w-1/2 mt-14">
                    <h1 className="text-3xl ">
                      Lagi beli Es Krim di <span className="text-red-600">MIXUE</span>
                    </h1>
                    <figure className="text-lg tracking-widest leading-5">Punyakuu lagi</figure>
                    <p className="text-light text-justify mt-8 text-light text-[12px]">
                      Ini pertama kali kita ke MIXUE gak si? bener kan? bener lah yaaaa. Kamu yang malu buat difoto sama
                      eskrim tapi ujung-ujungnya mau juga, oiya pas beli disini ramee sekalee tapi untuk kebeli yaa
                      walau cuma beli 2 wkwk, sayangnya gabisa lama-lama soalnya mulai ujann..
                    </p>
                  </div>
                  <img src={cantik2} className="w-1/2 ml-8 w-[40%] h-[100%] mt-12 shadow-lg rounded-xl"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-36">
          <div className="">
            <>
              <h1 className="text-center text-xl font-bold  mb-4 text-white">
                <span className="rounded-bl-[40%] rounded-br-[40%]  bg-[#656574] px-6 py-12">
                  Sekian dan Terimakacii
                </span>
              </h1>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                navigation={true}
                modules={[Pagination, Navigation]}
                pagination={{
                  clickable: true,
                  type: "bullets",
                }}
                className="mySwiper bubble_3"
              >
                <SwiperSlide>
                  <img src={aib3} className="w-[1000px]  rounded-xl mx-auto mb-16 shadow-lg h-[450px]"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={aib2} className=" rounded-xl mx-auto mb-16 shadow-lg  h-[450px]"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={aib1} className=" rounded-xl mx-auto mb-16 shadow-lg  h-[450px]"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={fotobareng} className=" rounded-xl mx-auto mb-16 shadow-lg h-[450px]"></img>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </div>
        <div className="mt-36">
          <div className="mx-auto bg-[#a4c2a6] px-6 py-8">
            <h5 className="text-center text-xl  text-gray-600 text-white font-bold mb-12">Social Media</h5>
            <a
              href="https://instagram.com/heni.fajj?igshid=YmMyMTA2M2Y="
              className=" text-lg  text-gray-600 font-semibold text-white underline"
              target={"_blank"}
            >
              @Heni Fajriyah
            </a>
            <a
              href="https://www.instagram.com/fanddibay/"
              target={"_blank"}
              className="text-end float-right text-lg  text-gray-600 font-semibold text-white underline"
            >
              @Fandi Bayu Anggoro Sakti
            </a>
          </div>
          <h1 className="text-center text-2xl border-t-2 border-gray-400 py-8 mt-8 font-bold text-[#a4c2a6] ">
            LOVE U SEKEBONNN
          </h1>
        </div>
      </main>
      <div className="md:block hidden absolute  top-[50%] right-[40%]">
        <h1 className="text-4xl font-bold text-red-500">TIDAK TERSEDIA !!</h1>
      </div>
    </div>
  );
}

export default App;
