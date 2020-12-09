Feature: FreeCRM Test
#Scenario:  "Login in CRM and verify Home Page"
#Hard coding input data
#Given user alredy in Home Page
#When user entered  Username and Password
#Then user click on Login Button
#And user successully in Main Page 

#simple data driven without example
#Given user alredy in Home Page
#When user entered  "neeraja.devaki@gmail.com" and "Sweety23"
#Then user click on Login Button
#And user successully in Main Page 

#data driven with examples
Scenario Outline:  "Login in CRM and verify Home Page"
Given user alredy in Home Page
When user entered  "<email>" and "<password>"
Then user click on Login Button
And user successully in Main Page 

Examples:

	|email|password|
	|neeraja.devaki@gmail.com|Sweety23|
	|anilkumar.devaki@gmail.com|Sweety23|
  