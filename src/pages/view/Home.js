import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="absolute top-0 start-0 -z-20 bg-purpleHearth h-screen w-full after:content-[''] after:bg-sulu after:absolute after:top-0 after:end-0 after:md:w-36 after:lg:w-48 after:h-screen"></div>
      <section className="container mx-auto grid grid-cols-2 gap-x-20 place-items-center pt-20 pb-48">
        <div>
          <span className="block text-sulu text-7xl font-bold py-10">
            I am a Frontend
            <br />
            Developer...
          </span>
          <span className="block text-sulu text-4xl pb-10">...who likes to craft and scalable frontend products with great user experiences.</span>
          <div className="flex gap-x-4">
            <button className="bg-white flex items-center text-xl px-4 py-2 rounded text-purpleHearth font-semibold">
              <FontAwesomeIcon className="me-2 text-2xl" icon={faGithub} />
              Github
            </button>
            <button className="bg-white flex items-center text-xl px-4 py-2 rounded text-purpleHearth font-semibold">
              <FontAwesomeIcon className="me-2 text-2xl" icon={faLinkedinIn} />
              Linkedin
            </button>
          </div>
        </div>
        <div className="place-self-end">
          <img
            className="rounded-lg"
            src="https://loremflickr.com/cache/resized/2007_2068109271_229326b940_b_600_550_nofilter.jpg"
            width={550}
            height={500}
            alt=""
          />
        </div>
      </section>
      <section className="container mx-auto grid grid-cols-3 py-40 ">
        <span className="text-6xl text-purpleHearth font-bold">Skills</span>
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-5 items-center">
            <img className="border rounded" src="" width={100} height={100} alt="" />
            <span className="text-2xl text-gray-500">JAVASCRIPT</span>
          </div>
          <div className="flex gap-x-5 items-center">
            <img className="border rounded" src="" width={100} height={100} alt="" />
            <span className="text-2xl text-gray-500">JAVASCRIPT</span>
          </div>
          <div className="flex gap-x-5 items-center">
            <img className="border rounded" src="" width={100} height={100} alt="" />
            <span className="text-2xl text-gray-500">JAVASCRIPT</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-5 items-center">
            <img className="border rounded" src="" width={100} height={100} alt="" />
            <span className="text-2xl text-gray-500">JAVASCRIPT</span>
          </div>
          <div className="flex gap-x-5 items-center">
            <img className="border rounded" src="" width={100} height={100} alt="" />
            <span className="text-2xl text-gray-500">JAVASCRIPT</span>
          </div>
          <div className="flex gap-x-5 items-center">
            <img className="border rounded" src="" width={100} height={100} alt="" />
            <span className="text-2xl text-gray-500">JAVASCRIPT</span>
          </div>
        </div>
      </section>
      <section className="py-20 bg-purpleHearth">
        <div className="container mx-auto">
          <span className="text-6xl text-sulu font-bold">Profile</span>
          <div className="grid grid-cols-3 place-items-center py-10">
            <div className="place-self-start">
              <span className="text-3xl text-sulu">Basic Information</span>
              <ul className="list-none table border-spacing-y-8 text-sulu">
                <li className="table-row">
                  <span className="table-cell pe-12 font-bold">Doğum Tarihi</span>
                  <span className="text-white">01.01.1970</span>
                </li>
                <li className="table-row">
                  <span className="table-cell pe-12 font-bold">İkamet Şehri</span>
                  <span className="text-white">İzmir</span>
                </li>
                <li className="table-row">
                  <span className="table-cell pe-12 font-bold">Eğitim Durumu</span>
                  <span className="text-white">Dokuz Eylül Ünv. Çalışma Ekonomisi ve Endüstri İlişkileri</span>
                </li>
                <li className="table-row">
                  <span className="table-cell pe-12 font-bold">Tercih Ettiği Rol</span>
                  <span className="text-white">Front-end, UI</span>
                </li>
              </ul>
            </div>
            <img src="https://loremflickr.com/cache/resized/2007_2068109271_229326b940_b_600_550_nofilter.jpg" width={400} height={350} alt="" />
            <div className="place-self-start">
              <span className="text-3xl text-sulu py-4">About Me</span>
              <p className="text-white py-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit at, justo lobortis curae ultricies montes iaculis cursus. Litora felis ornare egestas
                auctor aliquam suscipit, nec venenatis nibh diam magna senectus purus, a ultricies at ultrices inceptos.
              </p>
              <p className="text-white py-2">
                Lobortis torquent purus lacinia platea habitasse mattis quam nascetur, facilisi eu convallis interdum vivamus phasellus est nullam cum, nostra
                libero bibendum ad posuere potenti massa.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-sulu">
        <div className="container mx-auto">
          <span className="text-6xl text-purpleHearth font-bold">Projects</span>
          <div className="flex flex-col gap-y-10 items-center pt-20 pb-10">
            <div className="bg-white w-5/6 flex gap-x-10 rounded-2xl shadow-xl">
              <img
                className="rounded-s-2xl"
                src="https://loremflickr.com/cache/resized/2007_2068109271_229326b940_b_600_550_nofilter.jpg"
                width={400}
                height={350}
                alt=""
              />
              <div className="flex flex-col flex-grow-1 items-stretch py-10">
                <div className="flex-grow">
                  <span className="text-3xl">Workintech</span>
                  <p className="py-4 pe-20">
                    Lobortis torquent purus lacinia platea habitasse mattis quam nascetur, facilisi eu convallis interdum vivamus phasellus est nullam cum,
                    nostra libero bibendum ad posuere potenti massa.Lobortis torquent purus lacinia platea habitasse mattis quam nascetur, facilisi eu convallis
                    interdum vivamus phasellus est nullam cum, nostra libero bibendum ad posuere potenti massa.
                  </p>
                </div>
                <div className="flex gap-x-2 py-2">
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white">react</button>
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white">redux</button>
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white">vercel</button>
                </div>
                <div className="flex gap-x-4 pt-4">
                  <span className="underline underline-offset-4 font-semibold">View Site</span>
                  <span className="underline underline-offset-4 font-semibold">Github</span>
                </div>
              </div>
            </div>
            <div className="bg-white w-5/6 flex gap-x-10 rounded-2xl shadow-xl">
              <img
                className="rounded-s-2xl"
                src="https://loremflickr.com/cache/resized/2007_2068109271_229326b940_b_600_550_nofilter.jpg"
                width={400}
                height={350}
                alt=""
              />
              <div className="flex flex-col flex-grow-1 items-stretch py-10">
                <div className="flex-grow">
                  <span className="text-3xl">Workintech</span>
                  <p className="py-4 pe-20">
                    Lobortis torquent purus lacinia platea habitasse mattis quam nascetur, facilisi eu convallis interdum vivamus phasellus est nullam cum,
                    nostra libero bibendum ad posuere potenti massa.Lobortis torquent purus lacinia platea habitasse mattis quam nascetur, facilisi eu convallis
                    interdum vivamus phasellus est nullam cum, nostra libero bibendum ad posuere potenti massa.
                  </p>
                </div>
                <div className="flex gap-x-2 py-2">
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white">react</button>
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white">redux</button>
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white">vercel</button>
                </div>
                <div className="flex gap-x-4 pt-4">
                  <span className="underline underline-offset-4 font-semibold">View Site</span>
                  <span className="underline underline-offset-4 font-semibold">Github</span>
                </div>
              </div>
            </div>
            <div className="bg-white w-5/6 flex gap-x-10 rounded-2xl shadow-xl">
              <img
                className="rounded-s-2xl"
                src="https://loremflickr.com/cache/resized/2007_2068109271_229326b940_b_600_550_nofilter.jpg"
                width={400}
                height={350}
                alt=""
              />
              <div className="flex flex-col flex-grow-1 items-stretch py-10">
                <div className="flex-grow">
                  <span className="text-3xl">Workintech</span>
                  <p className="py-4 pe-20">
                    Lobortis torquent purus lacinia platea habitasse mattis quam nascetur, facilisi eu convallis interdum vivamus phasellus est nullam cum,
                    nostra libero bibendum ad posuere potenti massa.Lobortis torquent purus lacinia platea habitasse mattis quam nascetur, facilisi eu convallis
                    interdum vivamus phasellus est nullam cum, nostra libero bibendum ad posuere potenti massa.
                  </p>
                </div>
                <div className="flex gap-x-2 py-2">
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white">react</button>
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white">redux</button>
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white">vercel</button>
                </div>
                <div className="flex gap-x-4 pt-4">
                  <span className="underline underline-offset-4 font-semibold">View Site</span>
                  <span className="underline underline-offset-4 font-semibold">Github</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
