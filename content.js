// These are restricted comment
let comments, rBool, mBool, hBool, sBool, hvBool;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "set_data") {
    const receivedData = message.data;
    // Process the data or take action based on your requirements
    rBool = receivedData.racist;
    mBool = receivedData.misogyny;
    hBool = receivedData.homophobic;
    hvBool = receivedData.hindi;
    sBool = receivedData.sexism;
    console.log("This is working fine now");
  } else {
    console.log("No data is received");
  }
});

let Racism, Misogyny, HindiVulgar, Sexism, Homophobia;
chrome.storage.local.get('bannedWords', (data) => {
  const bannedWords = data.bannedWords;
  if (bannedWords) {
    Racism = bannedWords.Racism;
    Misogyny = bannedWords.Misogyny;
    HindiVulgar = bannedWords.HindiVulgar;
    Sexism = bannedWords.Sexism;
    Homophobia = bannedWords.Homophobia;
    console.log("It is working now");
  }
});

setInterval(function () {
  const comments = document.querySelectorAll(
    "ytd-comments #content > #content-text"
  );

  if (comments.length > 0) {
    let numCensored = 0;

    for (let i = 0; i < comments.length; i++) {
      let censoredYet = 0;

      if (rBool == 1) {
        for (let j = 0; j < Racism.length; j++) {
          if (comments[i].textContent.toLowerCase().indexOf(Racism[j]) != -1) {
            censoredYet = 1;
            const originalComment = comments[i].textContent;
            let isOriginalVisible = false;

            // Create a button to toggle the comment
            const toggleCommentButton = document.createElement("button");
            toggleCommentButton.textContent = "Show Original";
            toggleCommentButton.style.color = "#000"; // Set button color to black
            toggleCommentButton.style.display = "block";

            // Add a click event listener to the button
            toggleCommentButton.addEventListener("click", function () {
              if (!isOriginalVisible) {
                comments[i].textContent = originalComment;
                isOriginalVisible = true;
                setTimeout(() => {
                  comments[i].textContent =
                    "This comment was suspended for racism.";
                  toggleCommentButton.style.display = "block";
                  isOriginalVisible = false;
                }, 5000); // Display original comment for 5 seconds
                toggleCommentButton.style.display = "none"; // Hide the button
              }
            });

            // Hide the original comment by default
            comments[i].textContent = "This comment was suspended for racism.";
            comments[i].style = "color: #CE0D00; font-weight: bold";

            // Append the toggle button to the comment
            comments[i].appendChild(toggleCommentButton);
          }
        }
      }

      if (mBool == 1) {
        for (let j = 0; j < Misogyny.length; j++) {
          if (
            comments[i].textContent.toLowerCase().indexOf(Misogyny[j]) != -1
          ) {
            censoredYet = 1;
            const originalComment = comments[i].textContent;
            let isOriginalVisible = false;

            // Create a button to toggle the comment
            const toggleCommentButton = document.createElement("button");
            toggleCommentButton.textContent = "Show Original";
            toggleCommentButton.style.color = "#000"; // Set button color to black
            toggleCommentButton.style.display = "block";

            // Add a click event listener to the button
            toggleCommentButton.addEventListener("click", function () {
              if (!isOriginalVisible) {
                comments[i].textContent = originalComment;
                isOriginalVisible = true;
                setTimeout(() => {
                  comments[i].textContent =
                    "This comment was suspended for misogynist.";
                  toggleCommentButton.style.display = "block";
                  isOriginalVisible = false;
                }, 5000); // Display original comment for 5 seconds
                toggleCommentButton.style.display = "none"; // Hide the button
              }
            });

            // Hide the original comment by default
            comments[i].textContent = "This comment was suspended for misogynist.";
            comments[i].style = "color: #CE0D00; font-weight: bold";

            // Append the toggle button to the comment
            comments[i].appendChild(toggleCommentButton);
          }
        }
      }

      if (sBool == 1) {
        for (let j = 0; j < Sexism.length; j++) {
          if (comments[i].textContent.toLowerCase().indexOf(Sexism[j]) != -1) {
            censoredYet = 1;
            const originalComment = comments[i].textContent;
            let isOriginalVisible = false;

            // Create a button to toggle the comment
            const toggleCommentButton = document.createElement("button");
            toggleCommentButton.textContent = "Show Original";
            toggleCommentButton.style.color = "#000"; // Set button color to black
            toggleCommentButton.style.display = "block";

            // Add a click event listener to the button
            toggleCommentButton.addEventListener("click", function () {
              if (!isOriginalVisible) {
                comments[i].textContent = originalComment;
                isOriginalVisible = true;
                setTimeout(() => {
                  comments[i].textContent =
                    "This comment was suspended for sexism.";
                  toggleCommentButton.style.display = "block";
                  isOriginalVisible = false;
                }, 5000); // Display original comment for 5 seconds
                toggleCommentButton.style.display = "none"; // Hide the button
              }
            });

            // Hide the original comment by default
            comments[i].textContent = "This comment was suspended for sexism.";
            comments[i].style = "color: #CE0D00; font-weight: bold";

            // Append the toggle button to the comment
            comments[i].appendChild(toggleCommentButton);
          }
        }
      }

      if (hBool == 1) {
        for (let j = 0; j < Homophobia.length; j++) {
          if (
            comments[i].textContent.toLowerCase().indexOf(Homophobia[j]) != -1
          ) {
            censoredYet = 1;
            const originalComment = comments[i].textContent;
            let isOriginalVisible = false;

            // Create a button to toggle the comment
            const toggleCommentButton = document.createElement("button");
            toggleCommentButton.textContent = "Show Original";
            toggleCommentButton.style.color = "#000"; // Set button color to black
            toggleCommentButton.style.display = "block";

            // Add a click event listener to the button
            toggleCommentButton.addEventListener("click", function () {
              if (!isOriginalVisible) {
                comments[i].textContent = originalComment;
                isOriginalVisible = true;
                setTimeout(() => {
                  comments[i].textContent =
                    "This comment was suspended for being homophobic.";
                  toggleCommentButton.style.display = "block";
                  isOriginalVisible = false;
                }, 5000); // Display original comment for 5 seconds
                toggleCommentButton.style.display = "none"; // Hide the button
              }
            });

            // Hide the original comment by default
            comments[i].textContent =
              "This comment was suspended for being homophobic.";
            comments[i].style = "color: #CE0D00; font-weight: bold";

            // Append the toggle button to the comment
            comments[i].appendChild(toggleCommentButton);
          }
        }
      }

      if (hvBool == 1) {
        for (let j = 0; j < HindiVulgar.length; j++) {
          if (
            comments[i].textContent.toLowerCase().indexOf(HindiVulgar[j]) != -1
          ) {
            censoredYet = 1;
            const originalComment = comments[i].textContent;
            let isOriginalVisible = false;

            // Create a button to toggle the comment
            const toggleCommentButton = document.createElement("button");
            toggleCommentButton.textContent = "Show Original";
            toggleCommentButton.style.color = "#000"; // Set button color to black
            toggleCommentButton.style.display = "block";

            // Add a click event listener to the button
            toggleCommentButton.addEventListener("click", function () {
              if (!isOriginalVisible) {
                comments[i].textContent = originalComment;
                isOriginalVisible = true;
                setTimeout(() => {
                  comments[i].textContent =
                    "This comment was suspended for being hindi vulgar.";
                  toggleCommentButton.style.display = "block";
                  isOriginalVisible = false;
                }, 5000); // Display original comment for 5 seconds
                toggleCommentButton.style.display = "none"; // Hide the button
              }
            });

            // Hide the original comment by default
            comments[i].textContent =
              "This comment was suspended for being hindi vulgar.";
            comments[i].style = "color: #CE0D00; font-weight: bold";

            // Append the toggle button to the comment
            comments[i].appendChild(toggleCommentButton);
          }
        }
      }

      if (censoredYet == 1) {
        numCensored++;
      }
    }

    // Sending the data to popup.js
    if (numCensored != 0) {
      chrome.runtime.sendMessage({ variableValue: numCensored });
    }
  } else {
    console.log("Element not found");
  }
}, 5000);
