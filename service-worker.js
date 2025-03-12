importScripts('settings.js');

chrome.action.onClicked.addListener(function (activeTab) {
    chrome.tabs.create({ url: "index.html" });
});


chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        Install_Urls.forEach((url) => {
            chrome.tabs.create({ url: url });
        })
    }
});

if (Uninstall_Url !== undefined && Uninstall_Url.length > 0) {
    chrome.runtime.setUninstallURL(Uninstall_Url);
}



