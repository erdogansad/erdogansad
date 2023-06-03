import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Header from "../../layouts/Header";

const Home = () => {
  return (
    <div className="font-inter overflow-x-hidden">
      <section className="relative pb-10 h-fit md:pb-0 md:h-screen bg-purpleHearth dark:bg-bunting after:absolute after:bottom-0 after:end-0 after:h-[100rem] after:lg:w-32 after:content-[''] after:overflow-y-hidden after:bg-sulu after:dark:bg-seaWeed">
        <Header />
        <div className="container grid lg:grid-cols-2 grid-cols-1 gap-x-20 place-items-center md:pt-10 xl:pt-20">
          <div className="order-last lg:order-first">
            <span className="block text-sulu text-center lg:text-start text-3xl md:text-6xl xl:text-7xl font-bold py-10">
              I am a Frontend
              <br />
              Developer...
            </span>
            <span className="block text-sulu text-center lg:text-start text-xl md:text-3xl xl:text-4xl pb-10">
              ...who likes to craft and scalable frontend products with great user experiences.
            </span>
            <div className="flex justify-center lg:justify-normal gap-x-4">
              <button className="bg-white dark:bg-balticSea flex items-center md:text-xl px-3 py-2 md:px-4 md:py-3 rounded text-purpleHearth dark:text-white font-semibold">
                <FontAwesomeIcon className="me-2 text-xl md:text-2xl" icon={faGithub} />
                Github
              </button>
              <button className="bg-white dark:bg-balticSea flex items-center md:text-xl px-3 py-2 md:px-4 md:py-3 rounded text-purpleHearth dark:text-white font-semibold">
                <FontAwesomeIcon className="me-2 text-xl md:text-2xl" icon={faLinkedinIn} />
                Linkedin
              </button>
            </div>
          </div>
          <div className="lg:place-self-end z-10">
            <img
              className="rounded-3xl shadow-lg h-auto hidden md:block md:w-96 lg:w-auto"
              src="https://loremflickr.com/600/550"
              width={550}
              height={500}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-40 dark:bg-balticSea">
        <div className="container grid grid-cols-1 justify-items-center md:grid-cols-2 lg:justify-items-start gap-y-10 lg:gap-y-0 lg:grid-cols-3 lg:gap-x-10">
          <span className="col-span-1 md:col-span-2 lg:col-span-1 text-6xl text-purpleHearth font-bold dark:text-sulu">Skills</span>
          <div className="flex flex-col gap-y-6">
            <div className="flex gap-x-5 items-center">
              <img className="border rounded w-28 h-28 lg:w-32 lg:h-32" src="" alt="" />
              <span className="text-xl lg:text-2xl text-gray-500 dark:text-white">JAVASCRIPT</span>
            </div>
            <div className="flex gap-x-5 items-center">
              <img className="border rounded w-28 h-28 lg:w-32 lg:h-32" src="" alt="" />
              <span className="text-xl lg:text-2xl text-gray-500 dark:text-white">JAVASCRIPT</span>
            </div>
            <div className="flex gap-x-5 items-center">
              <img className="border rounded w-28 h-28 lg:w-32 lg:h-32" src="" alt="" />
              <span className="text-xl lg:text-2xl text-gray-500 dark:text-white">JAVASCRIPT</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex gap-x-5 items-center">
              <img className="border rounded w-28 h-28 lg:w-32 lg:h-32" src="" alt="" />
              <span className="text-xl lg:text-2xl text-gray-500 dark:text-white">JAVASCRIPT</span>
            </div>
            <div className="flex gap-x-5 items-center">
              <img className="border rounded w-28 h-28 lg:w-32 lg:h-32" src="" alt="" />
              <span className="text-xl lg:text-2xl text-gray-500 dark:text-white">JAVASCRIPT</span>
            </div>
            <div className="flex gap-x-5 items-center">
              <img className="border rounded w-28 h-28 lg:w-32 lg:h-32" src="" alt="" />
              <span className="text-xl lg:text-2xl text-gray-500 dark:text-white">JAVASCRIPT</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-20 bg-purpleHearth dark:bg-bunting">
        <div className="container">
          <span className="block mb-10 lg:mb-0 text-6xl text-sulu font-bold">Profile</span>
          <div className="grid gap-5 md:gap-10 md:grid-cols-2 lg:gap-5 lg:grid-cols-3 lg:py-10">
            <div className="col-span-1">
              <span className="text-3xl text-sulu dark:text-white">Basic Information</span>
              <ul className="list-none table border-spacing-y-8 text-sulu">
                <li className="table-row">
                  <span className="table-cell pe-4 font-bold">Doğum Tarihi</span>
                  <span className="text-white">01.01.1970</span>
                </li>
                <li className="table-row">
                  <span className="table-cell pe-4 font-bold">İkamet Şehri</span>
                  <span className="text-white">İzmir</span>
                </li>
                <li className="table-row">
                  <span className="table-cell pe-4 font-bold">Eğitim Durumu</span>
                  <span className="text-white">Dokuz Eylül Ünv. Çalışma Ekonomisi ve Endüstri İlişkileri</span>
                </li>
                <li className="table-row">
                  <span className="table-cell pe-4 font-bold">Tercih Ettiği Rol</span>
                  <span className="text-white">Front-end, UI</span>
                </li>
              </ul>
            </div>
            <img
              className="mb-5 md:mb-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 place-self-center col-span-1 md:col-span-2 order-first lg:col-span-1 lg:order-none rounded-xl"
              src="https://loremflickr.com/600/550"
              alt=""
            />
            <div>
              <span className="text-3xl text-sulu py-4 dark:text-white">About Me</span>
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
      <section className="py-20 bg-sulu dark:bg-seaWeed">
        <div className="container">
          <span className="text-6xl text-purpleHearth font-bold dark:text-sulu">Projects</span>
          <div className="flex flex-col gap-y-10 items-center pt-20 pb-10">
            <div className="bg-white w-80 md:w-96 lg:w-5/6 flex flex-col lg:flex-row gap-x-10 rounded-2xl shadow-xl dark:bg-mineShaft-600">
              <img className="rounded-t-2xl lg:rounded-r-none lg:rounded-s-2xl w-96 object-none" src="https://loremflickr.com/600/550" alt="" />
              <div className="flex flex-col flex-grow-1 items-stretch py-10">
                <div className="flex-grow">
                  <span className="block text-center lg:text-start text-3xl font-bold text-purpleHearth dark:text-bilobaFlower">Workintech</span>
                  <p className="text-justify py-4 px-10 lg:ps-0 lg:pe-16 text-gray-500 dark:text-white">
                    Lobortis torquent purus lacinia platea habitasse mattis quam nascetur, facilisi eu convallis interdum vivamus phasellus est nullam cum,
                    nostralibero bibendum ad posuere potenti massa.Lobortis torquent purus lacinia platea habitassemattis quam nascetur, facilisi eu convallis
                    interdum vivamus phasellus est nullam cum, nostra libero bibendum ad posuere potenti massa.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-start gap-x-2 py-2">
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white dark:bg-trueV">react</button>
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white dark:bg-trueV">redux</button>
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white dark:bg-trueV">vercel</button>
                </div>
                <div className="flex justify-center lg:justify-start gap-x-4 pt-4">
                  <span className="underline underline-offset-4 font-semibold dark:text-sulu">View Site</span>
                  <span className="underline underline-offset-4 font-semibold dark:text-sulu">Github</span>
                </div>
              </div>
            </div>
            <div className="bg-white w-80 md:w-96 lg:w-5/6 flex flex-col lg:flex-row gap-x-10 rounded-2xl shadow-xl dark:bg-mineShaft-600">
              <img className="rounded-t-2xl lg:rounded-r-none lg:rounded-s-2xl w-96 object-none" src="https://loremflickr.com/600/550" alt="" />
              <div className="flex flex-col flex-grow-1 items-stretch py-10">
                <div className="flex-grow">
                  <span className="block text-center lg:text-start text-3xl font-bold text-purpleHearth dark:text-bilobaFlower">Workintech</span>
                  <p className="text-justify py-4 px-10 lg:ps-0 lg:pe-16 text-gray-500 dark:text-white">
                    Lobortis torquent purus lacinia platea habitasse mattis quam nascetur, facilisi eu convallis interdum vivamus phasellus est nullam cum,
                    nostralibero bibendum ad posuere potenti massa.Lobortis torquent purus lacinia platea habitassemattis quam nascetur, facilisi eu convallis
                    interdum vivamus phasellus est nullam cum, nostra libero bibendum ad posuere potenti massa.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-start gap-x-2 py-2">
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white dark:bg-trueV">react</button>
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white dark:bg-trueV">redux</button>
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white dark:bg-trueV">vercel</button>
                </div>
                <div className="flex justify-center lg:justify-start gap-x-4 pt-4">
                  <span className="underline underline-offset-4 font-semibold dark:text-sulu">View Site</span>
                  <span className="underline underline-offset-4 font-semibold dark:text-sulu">Github</span>
                </div>
              </div>
            </div>
            <div className="bg-white w-80 md:w-96 lg:w-5/6 flex flex-col lg:flex-row gap-x-10 rounded-2xl shadow-xl dark:bg-mineShaft-600">
              <img className="rounded-t-2xl lg:rounded-r-none lg:rounded-s-2xl w-96 object-none" src="https://loremflickr.com/600/550" alt="" />
              <div className="flex flex-col flex-grow-1 items-stretch py-10">
                <div className="flex-grow">
                  <span className="block text-center lg:text-start text-3xl font-bold text-purpleHearth dark:text-bilobaFlower">Workintech</span>
                  <p className="text-justify py-4 px-10 lg:ps-0 lg:pe-16 text-gray-500 dark:text-white">
                    Lobortis torquent purus lacinia platea habitasse mattis quam nascetur, facilisi eu convallis interdum vivamus phasellus est nullam cum,
                    nostralibero bibendum ad posuere potenti massa.Lobortis torquent purus lacinia platea habitassemattis quam nascetur, facilisi eu convallis
                    interdum vivamus phasellus est nullam cum, nostra libero bibendum ad posuere potenti massa.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-start gap-x-2 py-2">
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white dark:bg-trueV">react</button>
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white dark:bg-trueV">redux</button>
                  <button className="rounded-full px-6 py-2 bg-purpleHearth text-white dark:bg-trueV">vercel</button>
                </div>
                <div className="flex justify-center lg:justify-start gap-x-4 pt-4">
                  <span className="underline underline-offset-4 font-semibold dark:text-sulu">View Site</span>
                  <span className="underline underline-offset-4 font-semibold dark:text-sulu">Github</span>
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
