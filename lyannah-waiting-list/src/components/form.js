import { Button } from "./Button";
import { useRef } from "react";
import classes from "./Hero.module.css";
import { useContext } from "react";
import { WaitListContext } from "../contexts/HeroContext";
import { ToastContainer, toast } from "react-toastify";

export const WaitListForm = () => {
  const emailDataRef = useRef();
  const waitListContext = useContext(WaitListContext);

  async function submitHandler() {
    const userEmail = emailDataRef.current.value;
    try {
      if (userEmail !== "" && userEmail.includes("@")) {
        toast.success("Success! You have been added to the waiting list!");
        emailDataRef.current.value = "";

        waitListContext.setIsLoading(true);
        await waitListContext.addToWaitListService(userEmail);
        waitListContext.setIsLoading(false);
      } else {
        toast.error("Invalid email");
      }
    } catch (error) {
      console.log("The async function had an error which is" + error);
      waitListContext.setIsLoading(false);
    }

    console.log(userEmail);
  }
  return (
    <form className="flex  flex-wrap p-0" action="">
      <input
        type="text"
        id="fname"
        name="fname"
        placeholder="Email"
        ref={emailDataRef}
        className={`md:px-5 md:mb-0 mb-5 p-5 rounded-t-md flex-grow border-b-2 focus:border-black ${classes.input_form}`}
        required
      ></input>
      <div className="md:mx-4"></div>
      <Button
        title="Join the Wait"
        onClick={(e) => {
          e.preventDefault();
          console.log("Testing works");
          submitHandler();
        }}
      />
    </form>
  );
};
