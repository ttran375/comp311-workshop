const { Given, When, Then } = require("@cucumber/cucumber");

const { expect } = require("chai");  //you need this to do assertions

first="";  // Initially you can try hardcoding like this;... 
second=""; //...later you'd need to use a World object ...
result=""; //...to be able to use the same step in different scenarios

Given('I have the number {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  first=string;
});

When('I add it to the number {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  second=string;
  result=first+second;  //initially keep this commented out to simulate TDD
 });

Then('the result should be the number {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  expect(result).to.eql(string);
});
