// background.js

// Listen for messages from the popup or other parts of the extension
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // Handle messages based on the requested action
    if (request.action === 'convert') {
        // Do any background tasks related to the 'convert' action if needed
        // You can also send a response back if necessary
        sendResponse({ message: 'Background received convert message.' });
    } else if (request.action === 'reset') {
        // Do any background tasks related to the 'reset' action if needed
        // You can also send a response back if necessary
        sendResponse({ message: 'Background received reset message.' });
    }
});

// Additional background setup code goes here if needed
