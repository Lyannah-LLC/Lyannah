import { Button } from "./Button";
import { BoxPadding } from "./layout/BoxPadding";
import classes from "./Hero.module.css";
import { Badge } from "./Badge";
import { Social } from "./Social";
import { useContext } from "react";
import { WaitListContext } from "../contexts/HeroContext";
import { Preloader } from "./Preloader/Preloader";
import { useRef } from "react";
import { addToWaitListService } from "../services/services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UseCases } from "./useCases/useCases";
import { ReturnUseCases } from "./useCaseFunction";
import { WaitListForm } from "./form";

export const Hero = (props) => {
  const emailDataRef = useRef();
  const waitListContext = useContext(WaitListContext);

  return (
    <>
      {waitListContext.isLoading ? <Preloader /> : null}
      <ToastContainer />
      <BoxPadding>
        <div className="md:flex  md:my-52 mt-40 ">
          <div
            className={`-my-40 md:min-w-max md:max-w-0 max-w-sm ${classes.hero_image}`}
          >
            <img src="../../hero-image.svg" className="block" />
          </div>
          <div className="hero-texts min-w-2xl md:-my-20  mx-10">
            <h1 className="md:text-4xl  text-3xl md:my-0 mt-40 font-bold ">
              Manage your environment variables and resources on the fly.
            </h1>
            <div className="my-8"></div>

            <h5 className="text-lg">
              Lyannah is an open source developer tool for managing environment
              resources in your apps without having to rebuild or deploy.
            </h5>
            <div className="my-8"></div>
            <WaitListForm />
            <div className="my-16"></div>
            <Badge title="Actively building" />
            <div className="my-5"></div>
            <h1 className="md:text-2xl font-bold text-md ">
              Open source all the way!
            </h1>
            <div className="my-5"></div>
            <Social
              social="Join us on Discord"
              url="https://discord.gg/heDtHPP6Xu"
            />
            <Social
              social="Join us on Twitter"
              url="https://twitter.com/lyannah_app/"
            />
            {/* <Social
              social="Read more"
              url="https://ivory-newsboy-082.notion.site/Overview-5f6b7e90e9764b7ca857dba8dbf76c50"
            /> */}
            <Social social="Codebase" url="https://github.com/Lyannah-LLC" />
          </div>
        </div>
        <div className="mt-10">
          <p className="md:text-5xl text-3xl text-center font-bold ">
            Use Cases and Benefits
          </p>
          <div className="md:my-8 my-4"></div>
          <ReturnUseCases />
        </div>
        <div className="p-20 my-10 bg-green-50">
          <p className="md:text-5xl text-2xl text-center font-bold ">
            Platform Support <Badge title="BETA" />
          </p>

          <p className="text-md font-bold text-center mt-10 ">
            💚 React, 💙 Flutter, 🖤 Android
          </p>
        </div>

        <div className="md:my-8 my-4"></div>
        <p className="md:text-5xl text-3xl text-center font-bold my-10 p-6">
          Manage changes in one console
        </p>
        <div className={`max-w-6xl  ${classes.hero_image}  m-auto`}>
          <img src="../../images/console.png" className="block" />
        </div>
      </BoxPadding>
      <div className="bg-black md:p-20 p-6">
        <BoxPadding>
          <div className="md:max-w-5xl m-auto">
            <h1 className="text-2xl font-bold text-white mb-8 ">
              Join the WaitList
            </h1>
            <WaitListForm />

            <div className="my-16"></div>
            <Badge title="Actively building" />
            <div className="my-5"></div>
            <h1 className="text-2xl font-bold text-white ">
              Stay Updated as we build.
            </h1>
            <div className="my-5"></div>
            <Social
              social="Join us on Discord"
              url="https://discord.gg/heDtHPP6Xu"
            />
            <Social
              social="Join us on Twitter"
              url="https://twitter.com/lyannah_app/"
            />
            <Social social="Codebase" url="https://github.com/Lyannah-LLC" />
            <div className="my-5 h-1"></div>
          </div>
        </BoxPadding>
      </div>
    </>
  );
};
