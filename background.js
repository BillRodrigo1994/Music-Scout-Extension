const websiteUrl = "https://musicscout.vercel.app/"; 

chrome.contextMenus.create({
  title: "Music Scout",
  contexts: ["all"],
  id: "imgId",
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  focus();
});

chrome.action.onClicked.addListener(function () {
  focus();
});

function focus() {
  chrome.tabs.query({}, function (tabs) {
    let tabFound = false;

   
    for (let tab of tabs) {
  
      if (tab.url && tab.url.includes(websiteUrl)) {
        tabFound = true;
        chrome.tabs.update(tab.id, { active: true }); 
        chrome.windows.update(tab.windowId, { focused: true }); 
        return; 
      }
    }

    chrome.tabs.create({ url: websiteUrl });
  });
}
