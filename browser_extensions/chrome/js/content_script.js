chrome.runtime.sendMessage({purpose: 'can_spacing'}, function(response) {
  if (!response.result) {
    return;
  }
  $(document).ready(function () {
    pangu.autoSpacingPage();
  });
});

// var style = document.createElement('link');
var style = document.createElement('style');
// style.rel = 'stylesheet';
style.type = 'text/css';
style.textContent = '@font-face { font-family: "Chinese Quote"; src: url("'
        + chrome.extension.getURL('vendors/pangu/fonts/SourceHanSansCN-Regular.otf')
        + '"); unicode-range: U+2018, U+2019, U+201c, U+201d; }';
// style.href = chrome.extension.getURL('vendors/pangu/pangu.css');
(document.head||document.documentElement).appendChild(style);
