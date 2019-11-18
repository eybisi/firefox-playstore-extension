browser.contextMenus.create({
    id: "open-playstore",
    title: "Open in playstore",
    contexts: ["selection"]
  });

browser.contextMenus.onClicked.addListener(function(info, tab) {
  
  switch (info.menuItemId) {
    case "open-playstore":
      playstorepage = "https://play.google.com/store/apps/details?id="+info.selectionText
      browser.tabs.create({url:playstorepage});
      break;
  }
})

browser.commands.onCommand.addListener(function (command) {
  if (command === "open-playstore") {
    console.log("open clipboard text in playstore!");
    navigator.clipboard.readText().then(
	clipText => browser.tabs.create({url:"https://play.google.com/store/apps/details?id="+clipText}))
    }
});
