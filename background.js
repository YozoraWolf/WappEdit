console.log("STARTED");

browser.menus.create({
  id: "bold",
  title: 'Bold Selection',
  contexts: ['selection'],
  onclick: async () => {
    browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
      let tab = tabs[0]; // Safe to assume there will only be one result
      browser.tabs.sendMessage(tab.id, { trigger: 'boldSelection' });
  }, console.error) 
    
  }
});