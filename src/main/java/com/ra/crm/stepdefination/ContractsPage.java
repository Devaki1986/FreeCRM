package com.ra.crm.stepdefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class ContractsPage {
	
	WebDriver driver;
	
	@Given("^in  alredy in home page$")
	public void in_alredy_in_home_page() {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver","C:\\Users\\anilk\\Downloads\\chromedriver.exe");
		 driver = new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
		System.out.println("https://ui.freecrm.com/");
	    
	}

	@Then("^in entered \"([^\"]*)\" and \"([^\"]*)\" and click on login$")
	public void in_entered_and_and_click_on_login(String arg1, String arg2)  {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(arg1);
		driver.findElement(By.xpath("//*[@name='password']")).sendKeys(arg2);
		driver.findElement(By.xpath("//div[contains(text(),'Login')]")).click();
	    
	}

	@Then("^in click on contracts$")
	public void in_click_on_contracts(){
	    // Write code here that turns the phrase above into concrete actions
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		driver.findElement(By.xpath("//span[contains(text(),'Contacts')]")).click();
	    
	}

	@Then("^in entered \"([^\"]*)\" and \"([^\"]*)\" and click save$")
	public void in_entered_and_and_click_save(String arg1, String arg2) {
		
		driver.findElement(By.xpath("//button[@class='ui linkedin button']//i[@class='edit icon']")).click();
		driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys(arg1);
		driver.findElement(By.xpath("//input[@name='last_name']")).sendKeys(arg2);
		driver.findElement(By.xpath("//button[@class='ui linkedin button']//i[@class='save icon']")).click();
		//driver.findElement(By.xpath("//button[@class='ui icon button']//i[@class='bell outline icon']")).isEnabled();
	    // Write code here that turns the phrase above into concrete actions
		//button[@class='ui icon button']//i[@class='bell outline icon']
	}

	@Then("^in can see bell icon$")
	public void in_can_see_bell_icon()  {
	    // Write code here that turns the phrase above into concrete actions
	//	driver.manage().timeouts().pageLoadTimeout(200, TimeUnit.SECONDS);
	//	driver.findElement(By.xpath("//button[@class='ui icon button']//i[@class='bell outline icon']")).click();
		driver.quit();
	    
	}



}
