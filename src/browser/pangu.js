const { Pangu } = require('../shared/core');
const { QuoteNode } = require('../shared/quote_node')

function once(func) {
  let executed = false;
  return () => {
    if (executed) {
      return;
    }
    const self = this;
    executed = true;
    func.apply(self, arguments);
  };
}

function debounce(func, delay, mustRunDelay) {
  let timer = null;
  let startTime = null;
  return () => {
    const self = this;
    const args = arguments;
    const currentTime = +new Date();

    clearTimeout(timer);

    if (!startTime) {
      startTime = currentTime;
    }

    if (currentTime - startTime >= mustRunDelay) {
      func.apply(self, args);
      startTime = currentTime;
    } else {
      timer = setTimeout(() => {
        func.apply(self, args);
      }, delay);
    }
  };
}

// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

class BrowserPangu extends Pangu {
  constructor() {
    super();
    this.isAutoSpacingPageExecuted = false;
  }

  spacingNode(contextNode) {
    $(contextNode).find("h1, h2, h3, h4, h5, h6, p").each((i, elem) => {
      // console.log(elem)
      QuoteNode(elem);
    });
  }

  spacingPageTitle() {
  }

  spacingPageBody() {
    let start = new Date();
    console.log("parse start", start)
    $("h1, h2, h3, h4, h5, h6, p").each((i, elem) => {
      // console.log(elem)
      QuoteNode(elem);
    });
    let end = new Date();
    console.log("parse end", end, "take", end - start, "ms");
  }

  // TODO: 支援 callback 和 promise
  spacingPage() {
    this.spacingPageTitle();
    this.spacingPageBody();
  }

  autoSpacingPage(pageDelay = 1000, nodeDelay = 500, nodeMaxWait = 2000) {
    if (!(document.body instanceof Node)) {
      return;
    }

    if (this.isAutoSpacingPageExecuted) {
      return;
    }
    this.isAutoSpacingPageExecuted = true;

    const self = this;

    const onceSpacingPage = once(() => {
      self.spacingPage();
    });

    // TODO
    // this is a dirty hack for https://github.com/vinta/pangu.js/issues/117
    const videos = document.getElementsByTagName('video');
    if (videos.length === 0) {
      setTimeout(() => {
        onceSpacingPage();
      }, pageDelay);
    } else {
      for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        if (video.readyState === 4) {
          setTimeout(() => {
            onceSpacingPage();
          }, 3000);
          break;
        }
        video.addEventListener('loadeddata', () => {
          setTimeout(() => {
            onceSpacingPage();
          }, 4000);
        });
      }
    }

    const queue = [];

    // it's possible that multiple workers process the queue at the same time
    const debouncedSpacingNodes = debounce(() => {
      // a single node could be very big which contains a lot of child nodes
      while (queue.length) {
        const node = queue.shift();
        if (node) {
          self.spacingNode(node);
        }
      }
    }, nodeDelay, { 'maxWait': nodeMaxWait });

    // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
    const mutationObserver = new MutationObserver((mutations, observer) => {
      // Element: https://developer.mozilla.org/en-US/docs/Web/API/Element
      // Text: https://developer.mozilla.org/en-US/docs/Web/API/Text
      mutations.forEach((mutation) => {
        switch (mutation.type) { /* eslint-disable indent */
          case 'childList':
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                queue.push(node);
              } else if (node.nodeType === Node.TEXT_NODE) {
                queue.push(node.parentNode);
              }
            });
            break;
          case 'characterData':
            const { target: node } = mutation;
            if (node.nodeType === Node.TEXT_NODE) {
              queue.push(node.parentNode);
            }
            break;
          default:
            break;
        }
      });

      debouncedSpacingNodes();
    });
    mutationObserver.observe(document.body, {
      characterData: true,
      childList: true,
      subtree: true,
    });
  }
}

const pangu = new BrowserPangu();

module.exports = pangu;
module.exports.default = pangu;
module.exports.Pangu = BrowserPangu;
