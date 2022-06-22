export const addToWaitListService = (emailData) => {
  fetch(
    "https://lyannah-default-rtdb.europe-west1.firebasedatabase.app/.json",
    {
      method: "POST",
      body: JSON.stringify(emailData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((result) => {
      console.log("This email was successfully :" + result);

      // Show a success Notification
      return true;
    })
    .catch((error) => {
      console.log(
        "The user was not added to the wait-list on firebase server." + error
      );
      return false;
    });
};
