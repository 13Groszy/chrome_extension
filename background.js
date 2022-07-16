
chrome.runtime.onMessage.addListener(
  function() {
    myFunction();
  }
);


function myFunction() {
    chrome.storage.local.get(["myVariable"], ({ myVariable }) => {
      setTimeout(() => {
        function getCurrentTab() {
          chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
            let currTab = tabs[0];
            if (currTab){
              chrome.scripting.executeScript({
              target: {tabId: currTab.id},
            files: ['sandbox.js']
            },
            () => { console.log('Response');});
            }
          });
        }
        getCurrentTab()
    }, myVariable);
    });
  }