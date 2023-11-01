chrome.runtime.onInstalled.addListener(() => {
    fetch(chrome.runtime.getURL('bannedword.json'))
      .then((response) => response.json())
      .then((data) => {
        chrome.storage.local.set({ bannedWords: data });
      });
});
  