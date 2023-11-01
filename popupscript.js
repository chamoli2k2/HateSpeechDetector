let rBool, hvBool, sBool, hBool, mBool;

document.addEventListener("DOMContentLoaded", function () {
  // After Submit button is clicked, load the saved preferences (if any)
  loadUserPreferences();

  const setDataButton = document.getElementById("submitB");
  setDataButton.addEventListener("click", popup);
});

// Function to load user preferences from local storage
function loadUserPreferences() {
  // Load user preferences from local storage (if available)
  rBool = localStorage.getItem("racist") === "true";
  hvBool = localStorage.getItem("hindi") === "true";
  sBool = localStorage.getItem("sexism") === "true";
  hBool = localStorage.getItem("homophobic") === "true";
  mBool = localStorage.getItem("misogyny") === "true";

  // Set the checkbox states based on the loaded preferences
  setCheckboxState("racist", rBool);
  setCheckboxState("HindiVulgar", hvBool);
  setCheckboxState("sexist", sBool);
  setCheckboxState("homophobic", hBool);
  setCheckboxState("misogyny", mBool);
}

// Function to set the checkbox state based on user preferences
function setCheckboxState(checkboxId, state) {
  const checkbox = document.getElementById(checkboxId);
  if (checkbox) {
    checkbox.checked = state;
  }
}

// Function to save user preferences to local storage
function saveUserPreferences() {
  localStorage.setItem("racist", rBool);
  localStorage.setItem("hindi", hvBool);
  localStorage.setItem("sexism", sBool);
  localStorage.setItem("homophobic", hBool);
  localStorage.setItem("misogyny", mBool);
}

// Function to fetching user preference
function popup() {
  const checkRacist = document.getElementById("racist");
  const checkmisogyny = document.getElementById("misogyny");
  const checkHomophobia = document.getElementById("homophobic");
  const checkSexism = document.getElementById("sexist");
  const checkHindiVulgar = document.getElementById("HindiVulgar");

  rBool = checkRacist.checked;
  hvBool = checkHindiVulgar.checked;
  sBool = checkSexism.checked;
  hBool = checkHomophobia.checked;
  mBool = checkmisogyny.checked;

  // Save user preferences to local storage
  saveUserPreferences();

  const message = {
    action: "set_data",
    data: {
      racist: rBool,
      hindi: hvBool,
      homophobic: hBool,
      misogyny: mBool,
      sexism: sBool,
    },
  };

  // Send the message to the content script.
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, message);
  });
}

// Function to receive data from content.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.variableValue) {
    const receivedValue = message.variableValue;
    // Do something with the received value
    const mainTitle = document.getElementById("test");
    mainTitle.textContent = "Blocked comments on this page: " + receivedValue;
  }
});





