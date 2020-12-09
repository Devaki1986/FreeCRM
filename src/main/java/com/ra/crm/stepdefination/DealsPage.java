package com.ra.crm.stepdefination;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;



public class DealsPage {
	
	WebDriver driver;
	//public static List<List<String>> data;
	//public static Map<String,String> data;
	
	@Before
	 public void setup() {
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\anilk\\Downloads\\chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.manage().window().maximize();
	}
	
	@Before("@first")
	public void browser() {
		System.out.println("Browser");
		driver.manage().deleteAllCookies();
	}
	
	@After()
	public void quitbrowser() {
		driver.quit();
	}
	
	@Given("^user alredy in home page\\.$")
	public void user_alredy_in_home_page() {
	    // Write code here that turns the phrase above into concrete actions
		
		driver.get("https://ui.freecrm.com/");
		System.out.println("https://ui.freecrm.com/");
	}
		
		@Then("^user entered email and password and click on login\\.$")
		public void user_entered_email_and_password_and_click_on_login(DataTable arg1) {
		    // Write code here that turns the phrase above into concrete actions
		    // For automatic transformation, change DataTable to one of
		    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		    // E,K,V must be a scalar (String, Integer, Date, enum etc)
			
			for (Map<String,String> data:arg1.asMaps(String.class, String.class)) {
	/*		data = arg1.raw();
			driver.findElement(By.xpath("//input[@name='email']")).sendKeys(data.get(0).get(0));
			driver.findElement(By.xpath("//*[@name='password']")).sendKeys(data.get(0).get(1));
			driver.findElement(By.xpath("//div[contains(text(),'Login')]")).click();*/
			driver.findElement(By.xpath("//input[@name='email']")).sendKeys(data.get("email"));
			driver.findElement(By.xpath("//*[@name='password']")).sendKeys(data.get("pwd"));
			driver.findElement(By.xpath("//div[contains(text(),'Login')]")).click();
		}
		}

		@Then("^user click on deals\\.$")
		public void user_click_on_deals() {
		    // Write code here that turns the phrase above into concrete actions
			try {
				Thread.sleep(10000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			driver.findElement(By.xpath("//span[contains(text(),'Deals')]")).click();
			
			try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			driver.findElement(By.xpath("//body/div[@id='ui']/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/a[3]/button[1]")).click();
		    
		}

		@Then("^user entered deal details\\.$")
		public void user_entered_deal_details(DataTable arg1){
		    // Write code here that turns the phrase above into concrete actions
		    // For automatic transformation, change DataTable to one of
		    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		    // E,K,V must be a scalar (String, Integer, Date, enum etc)
			
		/*	data = arg1.raw();
			
			driver.findElement(By.xpath("//input[@name='title']")).sendKeys(data.get(0).get(0));
			driver.findElement(By.xpath("//input[@class='search']")).sendKeys(data.get(0).get(1));
			driver.findElement(By.xpath("//input[@name='probability']")).sendKeys(data.get(0).get(2));
			driver.findElement(By.xpath("//div[@name='stage']")).click();
			try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			driver.findElement(By.xpath("//span[contains(text(),'"+data.get(0).get(3)+"')]")).click();
			driver.findElement(By.xpath("//div[@name='status']")).click();
			try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			driver.findElement(By.xpath("//span[contains(text(),'"+data.get(0).get(4)+"')]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Save')]")).click();*/
			//|Title|Company|Probability|Stage|Status|
			
			for(Map<String,String>data:arg1.asMaps(String.class, String.class)){
			driver.findElement(By.xpath("//input[@name='title']")).sendKeys(data.get("Title"));
			driver.findElement(By.xpath("//input[@class='search']")).sendKeys(data.get("Company"));
			driver.findElement(By.xpath("//input[@name='probability']")).sendKeys(data.get("Probability"));
			driver.findElement(By.xpath("//div[@name='stage']")).click();
			try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			driver.findElement(By.xpath("//span[contains(text(),'"+data.get("Stage")+"')]")).click();
			driver.findElement(By.xpath("//div[@name='status']")).click();
			try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			driver.findElement(By.xpath("//span[contains(text(),'"+data.get("Status")+"')]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Save')]")).click();
			try {
				Thread.sleep(10000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			driver.findElement(By.xpath("//span[contains(text(),'Deals')]")).click();
			try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			driver.findElement(By.xpath("//body/div[@id='ui']/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/a[3]/button[1]")).click();
			
			
			}
			
			
		
		}
		
	
		

	@Then("^user close the browser$")
	public void user_close_the_browser()  {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("user going to close the browser");
	}


}
