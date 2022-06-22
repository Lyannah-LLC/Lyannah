import { createContext, useState } from "react";
import { addToWaitListService } from "../services/services";

export const WaitListContext = createContext({
  isLoading: false,
  // isAddedToWaitList: false
  addToWaitListService: async (emailData) => {},
  setIsLoading: (value) => {},
});

export const WaitListContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAddedToWaitList, setIsAddedToWaitList] = useState(false);

  function addUserToWaitList(emailData) {
    //set is Adding to waitList true
    setIsLoading(true);

    //reset is addedToWaiList to false
    setIsAddedToWaitList(false);

    //Send data to API and get a response
    addToWaitListService(emailData)
      .then((result) => {
        //at this point, it has added to the waitList
        setIsAddedToWaitList(true);
        console.log("The state was reset");

        return result;
      })
      .catch((err) => {
        //at this point, it doesn't add to waitList
        setIsAddedToWaitList(false);
        console.log("The state was reset");
        throw err;
      });

    setIsLoading(false);
  }

  //This is the subsequent value of the context
  const context = {
    isLoading: isLoading,
    setIsLoading: setIsLoading,
    isAddedToWaitList: isAddedToWaitList,
    addToWaitListService: addUserToWaitList,
  };

  return (
    <WaitListContext.Provider value={context}>
      {props.children}
    </WaitListContext.Provider>
  );
};
