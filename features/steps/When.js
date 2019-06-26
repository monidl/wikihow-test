module.exports = function(){
    this.When(/^user has searched for drink water and clicked Enter$/, function () {
    const searchBar = 'input[name="search"]';
    const searchTerm = "drink water";

    browser.setValue(searchBar, searchTerm);
    browser.keys(['Enter']);
    
  });

  this.When(/^user selects the link$/, function () {
    browser.click("#searchresults_list > a:nth-child(2)"); 
  });

  this.When(/^user selected description from the article$/, function () {
    const text = browser.getText("#intro > p:nth-child(5)")
    console.log(text)

  });
}