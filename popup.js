document.addEventListener('DOMContentLoaded', function () {
    function sendMessageToContentScript(action) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action }, function (response) {
                console.log(response);
            });
        });
    }
    document.getElementById('widescreenButton').addEventListener('click', function () {
        sendMessageToContentScript('widescreen');
    });

    document.getElementById('anonymousModeButton').addEventListener('click', function () {
        sendMessageToContentScript('anonymousMode');
    });

    document.getElementById('rainbowTextButton').addEventListener('click', function () {
        sendMessageToContentScript('rainbowText');
    });

    document.getElementById('toggleBGButton').addEventListener('click', function () {
        sendMessageToContentScript('toggleBG');
    });
});
