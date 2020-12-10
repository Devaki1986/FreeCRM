package com.qa.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features="Features/Contracts.feature",
		glue= {"com.ra.crm.stepdefination"},
		plugin= {"pretty","html:test-output","json:json-output","junit:junit-xml"},
		monochrome = true
		,strict = true
		,dryRun=false
		//,tags = {"@Regression"}
		)


public class TestRunner {
	
	

}
