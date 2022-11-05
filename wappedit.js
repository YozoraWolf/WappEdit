console.log("STARTED Content");

function replaceTxt(el, text) {
    if (el) {
        const keyboardEventInit = {bubbles:false, cancelable:false, composed:false, key:'', code:'', location:0};
        el.dispatchEvent(new KeyboardEvent("keydown", keyboardEventInit));
        el.value = text;
        el.dispatchEvent(new KeyboardEvent("keyup", keyboardEventInit));
        el.dispatchEvent(new Event('change', {bubbles: true})); // usually not needed
      } else {
        console.log("el is null");    
      }
}

browser.runtime.onMessage.addListener(({ trigger }) => {
    if (trigger === 'boldSelection') {
        replaceTxt(document.activeElement, "LOL");
    }
  });