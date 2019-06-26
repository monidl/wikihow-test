module.exports = function(){
this.Given(/^user is currently on wikihow website$/, function() {
  browser.url("https://www.wikihow.com");
});
}
