Feature: DealsPage 
@first
Scenario: Deals page test 

	Given user alredy in home page. 
	Then user entered email and password and click on login. 
		| email | pwd |
		
		|neeraja.devaki@gmail.com|Sweety23|
	Then user click on deals. 
	Then user entered deal details. 
		|Title|Company|Probability|Stage|Status|
		|Mr|TCS|50|Qualify|Active|
		|Mr|INFY|50|Research|On Hold|
		|Mr|LT|50|Research|Terminated|
		|Mr|TECHM|50|Research|Hot|
		|Mr|CGI|50|Quote|Hot|
		|Mr|COFORGE|50|Won|Hot|
		|Mr|FIDELITY|50|Lost|Hot|
		
		
	And user close the browser