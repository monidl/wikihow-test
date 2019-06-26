module.exports = function(){
this.Then(/^text is transferred into a txt file$/, function () {
    const text = browser.getText("#intro > p:nth-child(5)")
    const fs = require('fs') 
    fs.writeFile('Output.txt', text, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    })
  });
}