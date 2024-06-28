import { Transition, TransitionChild } from "@headlessui/react";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollTo from "react-scroll-into-view";
import { fetchData } from "@slices/rootSlice";
import Button from "@components/Button";

const Header = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.root);
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    setShow(true);
  }, [data]);

  const changeLang = () => {
    localStorage.setItem("lang", data.langs[0].code);
    dispatch(fetchData());
  };

  return (
    <header className="hidden lg:block absolute h-full lg:h-auto w-full py-10 z-10">
      <Transition
        as="div"
        className="container h-full mx-auto flex items-center justify-between font-arimo"
        show={show}
        enter="transition ease duration-1000 transform delay-[1250ms]"
        enterFrom="opacity-0 translate-y-12"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease duration-300 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-12"
      >
        <div className="hidden lg:block basis-1/3"></div>
        <nav className="basis-1/3 flex items-center justify-center gap-7 font-bold text-white text-lg">
          {data.page_titles.map((title, index) => {
            if (index === data.page_titles.length - 1) {
              return (
                <ScrollTo
                  key={index}
                  scrollOptions={{
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest",
                  }}
                  selector={`#${title.el_id}`}
                >
                  <Button theme="transparent" title={title.title} />
                </ScrollTo>
              );
            } else {
              return (
                <Fragment key={index}>
                  <ScrollTo
                    scrollOptions={{
                      behavior: "smooth",
                      block: "center",
                      inline: "nearest",
                    }}
                    selector={`#${title.el_id}`}
                  >
                    <Button theme="transparent" title={title.title} />
                  </ScrollTo>
                  <div className="h-8 border-e"></div>
                </Fragment>
              );
            }
          })}
        </nav>
        <TransitionChild
          as="div"
          className="flex basis-1/3 justify-end"
          enter="transition ease duration-1000 transform delay-[2500ms]"
          enterFrom="opacity-0 translate-y-12"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease duration-300 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-12"
        >
          <Button onClick={() => changeLang()} theme="transparent" title={data.langs[0].title} />
        </TransitionChild>
      </Transition>
    </header>
  );
};

export default Header;
