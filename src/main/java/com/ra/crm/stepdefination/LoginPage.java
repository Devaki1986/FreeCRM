package com.ra.crm.stepdefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPage {
	WebDriver driver;
	
	@Given("^user alredy in Home Page$")
	public void user_alredy_in_Home_Page()  {
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\anilk\\Downloads\\chromedriver.exe");
		 driver = new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
		System.out.println("https://ui.freecrm.com/");
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^user entered  Username and Password$")
	public void user_entered_Username_and_Password() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys("neeraja.devaki@gmail.com");
		driver.findElement(By.xpath("//*[@name='password']")).sendKeys("Sweety23");
		
				   
	}
	
	@When("^user entered  \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_entered_and(String arg1, String arg2) {
	    // Write code here that turns the phrase above into concrete actions
		
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(arg1);
		driver.findElement(By.xpath("//*[@name='password']")).sendKeys(arg2);
	    
	}

	@Then("^user click on Login Button$")
	public void user_click_on_Login_Button() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//div[contains(text(),'Login')]")).click();
	    
	}

	@Then("^user successully in Main Page$")
	public void user_successully_in_Main_Page() throws InterruptedException  {
	    // Write code here that turns the phrase above into concrete actions
	    
		String Title = driver.getTitle();
		Thread.sleep(10000);
		//System.out.println(driver.findElement(By.xpath("//a[contains(text(),'Free account')]")).
		//		getAttribute("herf").toString());
		//driver.switchTo().frame(0);
		
	//	driver.findElement(By.xpath("//span[contains(text(),'Contacts')]")).click();
	boolean b=	driver.findElement(By.xpath("//button[@class='ui basic button item']")).isEnabled();
	
	System.out.println(b);
	
		//String Title = driver.getTitle();
		
		Assert.assertEquals("Cogmento CRM",Title);
		
		driver.quit();
	}


}
