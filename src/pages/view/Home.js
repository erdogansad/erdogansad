import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto">
      <section className="grid grid-cols-5 place-items-center px-auto py-16">
        <div className="col-span-3 flex flex-col h-full w-full">
          <span className="flex items-center text-purpleHearth text-xl font-medium before:inline-block before:content-[''] before:w-24 before:border-y before:border-purpleHearth before:me-2">
            Erdoğan Şad
          </span>
          <span className="text-8xl font-bold mt-20">
            Creative thinker <br /> Minimalism lover
          </span>
          <p className="py-12 text-xl w-3/4 text-gray-500">
            Hi, I'm Erdoğan. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user
            experiences. Let's shake hands with me.
          </p>
          <div className="flex gap-x-3">
            <button className="rounded px-8 py-3 font-semibold bg-purpleHearth text-white">Hire me</button>
            <button className="flex items-center gap-x-2 rounded px-5 font-semibold border border-purpleHearth text-purpleHearth">
              <FontAwesomeIcon className="text-3xl" icon={faGithub} />
              Github
            </button>
            <button className="flex items-center gap-x-2 rounded px-5 font-semibold border border-purpleHearth text-purpleHearth">
              <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
              Linkedin
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <img
            className="rounded-xl shadow-lg"
            src="https://loremflickr.com/cache/resized/5238_30052482366_fc6e9350d5_b_650_500_nofilter.jpg"
            width={600}
            height={550}
            alt=""
          />
        </div>
      </section>
      <section className="border-b py-12">
        <span className="block font-bold text-5xl py-6">Skills</span>
        <div className="grid grid-cols-3 gap-x-40 pt-6">
          <div>
            <span className="text-4xl text-purpleHearth font-semibold">Javascript</span>
            <p className="text-sm text-gray-500 py-5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit donec, tempus diam nunc sociis pellentesque curae ornare nibh montes, maecenas elementum
              eleifend hac per magnis auctor.
            </p>
          </div>
          <div>
            <span className="text-4xl text-purpleHearth font-semibold">React.Js</span>
            <p className="text-sm text-gray-500 py-5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit donec, tempus diam nunc sociis pellentesque curae ornare nibh montes, maecenas elementum
              eleifend hac per magnis auctor.
            </p>
          </div>
          <div>
            <span className="text-4xl text-purpleHearth font-semibold">Node.Js</span>
            <p className="text-sm text-gray-500 py-5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit donec, tempus diam nunc sociis pellentesque curae ornare nibh montes, maecenas elementum
              eleifend hac per magnis auctor.
            </p>
          </div>
        </div>
      </section>
      <section className="border-b py-12">
        <span className="block font-bold text-5xl pb-6">Profile</span>
        <div className="grid grid-cols-2 pt-6">
          <div>
            <span className="block text-4xl text-purpleHearth font-semibold py-3">Profile</span>
            <ul className="list-none table border-spacing-y-4">
              <li className="table-row">
                <span className="table-cell pe-12 font-bold">Doğum Tarihi</span>
                <span>01.01.1970</span>
              </li>
              <li className="table-row">
                <span className="table-cell pe-12 font-bold">İkamet Şehri</span>
                <span>İzmir</span>
              </li>
              <li className="table-row">
                <span className="table-cell pe-12 font-bold">Eğitim Durumu</span>
                <span>Dokuz Eylül Ünv. Çalışma Ekonomisi ve Endüstri İlişkileri</span>
              </li>
              <li className="table-row">
                <span className="table-cell pe-12 font-bold">Tercih Ettiği Rol</span>
                <span>Front-end, UI</span>
              </li>
            </ul>
          </div>
          <div>
            <span className="block text-4xl text-purpleHearth font-semibold pb-6">About Me</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit massa pulvinar curae, ad commodo cursus mauris tincidunt odio congue egestas cras
              venenatis, taciti facilisi pharetra suscipit sociis tempus fermentum blandit id.
            </p>
            <p>
              Arcu dis torquent justo sodales quisque platea venenatis sagittis aptent cubilia sociosqu quam ante egestas, fringilla bibendum dictum a class nec
              gravida tincidunt sociis litora mus molestie placerat.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-12 py-16">
        <span className="block font-bold text-5xl pb-6">Projects</span>
        <div className="grid grid-cols-3 gap-x-40 py-6">
          <div className="flex flex-col flex-grow-1 justify-stretch">
            <div className="flex-grow">
              <img src="https://loremflickr.com/cache/resized/1206_4725926380_7531d1db01_400_250_nofilter.jpg" width={400} height={250} alt="" />
              <span className="block text-4xl py-4 text-purpleHearth font-semibold">Proje Adı</span>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, mus dapibus vulputate euismod quam primis, ut iaculis tincidunt lobortis pulvinar
                cursus. Aenean morbi dictumst varius elementum aliquet posuere lacinia, duis aptent odio convallis urna mi est, fringilla mauris netus ac turpis
                magnis. Consequat hendrerit lacinia euismod sociis iaculis litora congue tincidunt, imperdiet ut elementum fusce mus leo purus eros, sapien
                facilisi quam eleifend egestas vitae molestie.
              </p>
            </div>
            <div className="py-3 flex items-center gap-x-2 pt-6 text-purpleHearth">
              <span className="px-4 py-1 border rounded border-purpleHearth">react</span>
              <span className="px-4 py-1 border rounded border-purpleHearth">redux</span>
              <span className="px-4 py-1 border rounded border-purpleHearth">axios</span>
            </div>
            <div className="flex justify-between text-purpleHearth font-semibold text-lg">
              <span className="underline underline-offset-4">Github</span>
              <span className="underline underline-offset-4">View Site</span>
            </div>
          </div>
          <div className="flex flex-col flex-grow-1 justify-stretch">
            <div className="flex-grow">
              <img src="https://loremflickr.com/cache/resized/1206_4725926380_7531d1db01_400_250_nofilter.jpg" width={400} height={250} alt="" />
              <span className="block text-4xl py-4 text-purpleHearth font-semibold">Proje Adı</span>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, mus dapibus vulputate euismod quam primis, ut iaculis tincidunt lobortis pulvinar
                cursus. Aenean morbi dictumst varius elementum aliquet posuere lacinia, duis aptent odio convallis urna mi est, fringilla mauris netus ac turpis
                magnis. Consequat hendrerit lacinia euismod sociis iaculis litora congue tincidunt
              </p>
            </div>
            <div className="py-3 flex items-center gap-x-2 pt-6 text-purpleHearth">
              <span className="px-4 py-1 border rounded border-purpleHearth">react</span>
              <span className="px-4 py-1 border rounded border-purpleHearth">redux</span>
              <span className="px-4 py-1 border rounded border-purpleHearth">axios</span>
            </div>
            <div className="flex justify-between text-purpleHearth font-semibold text-lg">
              <span className="underline underline-offset-4">Github</span>
              <span className="underline underline-offset-4">View Site</span>
            </div>
          </div>
          <div className="flex flex-col flex-grow-1 justify-stretch">
            <div className="flex-grow">
              <img src="https://loremflickr.com/cache/resized/1206_4725926380_7531d1db01_400_250_nofilter.jpg" width={400} height={250} alt="" />
              <span className="block text-4xl py-4 text-purpleHearth font-semibold">Proje Adı</span>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, mus dapibus vulputate euismod quam primis, ut iaculis tincidunt lobortis pulvinar
                cursus. Aenean morbi dictumst varius elementum aliquet posuere lacinia, duis aptent odio convallis urna mi est, fringilla mauris netus ac turpis
                magnis.
              </p>
            </div>
            <div className="py-3 flex items-center gap-x-2 pt-6 text-purpleHearth">
              <span className="px-4 py-1 border rounded border-purpleHearth">react</span>
              <span className="px-4 py-1 border rounded border-purpleHearth">redux</span>
              <span className="px-4 py-1 border rounded border-purpleHearth">axios</span>
            </div>
            <div className="flex justify-between text-purpleHearth font-semibold text-lg">
              <span className="underline underline-offset-4">Github</span>
              <span className="underline underline-offset-4">View Site</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
