$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Contracts.feature");
formatter.feature({
  "line": 1,
  "name": "ContractsPage",
  "description": "",
  "id": "contractspage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Contracts page test",
  "description": "",
  "id": "contractspage;contracts-page-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "in  alredy in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "in entered \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" and click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "in click on contracts",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "in entered \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and click save",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "in can see bell icon",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "contractspage;contracts-page-test;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "firstname",
        "lastname"
      ],
      "line": 10,
      "id": "contractspage;contracts-page-test;;1"
    },
    {
      "cells": [
        "neeraja.devaki@gmail.com",
        "Sweety23",
        "anil1",
        "devaki1"
      ],
      "line": 11,
      "id": "contractspage;contracts-page-test;;2"
    },
    {
      "cells": [
        "neeraja.devaki@gmail.com",
        "Sweety23",
        "anil2",
        "devaki2"
      ],
      "line": 12,
      "id": "contractspage;contracts-page-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5790446300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Contracts page test",
  "description": "",
  "id": "contractspage;contracts-page-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "in  alredy in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "in entered \"neeraja.devaki@gmail.com\" and \"Sweety23\" and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "in click on contracts",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "in entered \"anil1\" and \"devaki1\" and click save",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "in can see bell icon",
  "keyword": "And "
});
formatter.match({
  "location": "ContractsPage.in_alredy_in_home_page()"
});
formatter.result({
  "duration": 5891126100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neeraja.devaki@gmail.com",
      "offset": 12
    },
    {
      "val": "Sweety23",
      "offset": 43
    }
  ],
  "location": "ContractsPage.in_entered_and_and_click_on_login(String,String)"
});
formatter.result({
  "duration": 300428100,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.in_click_on_contracts()"
});
formatter.result({
  "duration": 10120088100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anil1",
      "offset": 12
    },
    {
      "val": "devaki1",
      "offset": 24
    }
  ],
  "location": "ContractsPage.in_entered_and_and_click_save(String,String)"
});
formatter.result({
  "duration": 1017799000,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.in_can_see_bell_icon()"
});
formatter.result({
  "duration": 646580700,
  "status": "passed"
});
formatter.after({
  "duration": 584520600,
  "status": "passed"
});
formatter.before({
  "duration": 5355726700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Contracts page test",
  "description": "",
  "id": "contractspage;contracts-page-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "in  alredy in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "in entered \"neeraja.devaki@gmail.com\" and \"Sweety23\" and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "in click on contracts",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "in entered \"anil2\" and \"devaki2\" and click save",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "in can see bell icon",
  "keyword": "And "
});
formatter.match({
  "location": "ContractsPage.in_alredy_in_home_page()"
});
formatter.result({
  "duration": 6724228200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neeraja.devaki@gmail.com",
      "offset": 12
    },
    {
      "val": "Sweety23",
      "offset": 43
    }
  ],
  "location": "ContractsPage.in_entered_and_and_click_on_login(String,String)"
});
formatter.result({
  "duration": 262323700,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.in_click_on_contracts()"
});
formatter.result({
  "duration": 10145216100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anil2",
      "offset": 12
    },
    {
      "val": "devaki2",
      "offset": 24
    }
  ],
  "location": "ContractsPage.in_entered_and_and_click_save(String,String)"
});
formatter.result({
  "duration": 1004160900,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.in_can_see_bell_icon()"
});
formatter.result({
  "duration": 633550700,
  "status": "passed"
});
formatter.after({
  "duration": 677945400,
  "status": "passed"
});
formatter.uri("Deals.feature");
formatter.feature({
  "line": 1,
  "name": "DealsPage",
  "description": "",
  "id": "dealspage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5297048100,
  "status": "passed"
});
formatter.before({
  "duration": 6083900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Deals page test",
  "description": "",
  "id": "dealspage;deals-page-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@first"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user alredy in home page.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user entered email and password and click on login.",
  "rows": [
    {
      "cells": [
        "email",
        "pwd"
      ],
      "line": 7
    },
    {
      "cells": [
        "neeraja.devaki@gmail.com",
        "Sweety23"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on deals.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entered deal details.",
  "rows": [
    {
      "cells": [
        "Title",
        "Company",
        "Probability",
        "Stage",
        "Status"
      ],
      "line": 12
    },
    {
      "cells": [
        "Mr",
        "TCS",
        "50",
        "Qualify",
        "Active"
      ],
      "line": 13
    },
    {
      "cells": [
        "Mr",
        "INFY",
        "50",
        "Research",
        "On Hold"
      ],
      "line": 14
    },
    {
      "cells": [
        "Mr",
        "LT",
        "50",
        "Research",
        "Terminated"
      ],
      "line": 15
    },
    {
      "cells": [
        "Mr",
        "TECHM",
        "50",
        "Research",
        "Hot"
      ],
      "line": 16
    },
    {
      "cells": [
        "Mr",
        "CGI",
        "50",
        "Quote",
        "Hot"
      ],
      "line": 17
    },
    {
      "cells": [
        "Mr",
        "COFORGE",
        "50",
        "Won",
        "Hot"
      ],
      "line": 18
    },
    {
      "cells": [
        "Mr",
        "FIDELITY",
        "50",
        "Lost",
        "Hot"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DealsPage.user_alredy_in_home_page()"
});
formatter.result({
  "duration": 2518030700,
  "status": "passed"
});
formatter.match({
  "location": "DealsPage.user_entered_email_and_password_and_click_on_login(DataTable)"
});
formatter.result({
  "duration": 239832500,
  "status": "passed"
});
formatter.match({
  "location": "DealsPage.user_click_on_deals()"
});
formatter.result({
  "duration": 12293709600,
  "status": "passed"
});
formatter.match({
  "location": "DealsPage.user_entered_deal_details(DataTable)"
});
formatter.result({
  "duration": 117678411300,
  "status": "passed"
});
formatter.match({
  "location": "DealsPage.user_close_the_browser()"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
formatter.after({
  "duration": 617529200,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM Test",
  "description": "",
  "id": "freecrm-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#Scenario:  \"Login in CRM and verify Home Page\""
    },
    {
      "line": 3,
      "value": "#Hard coding input data"
    },
    {
      "line": 4,
      "value": "#Given user alredy in Home Page"
    },
    {
      "line": 5,
      "value": "#When user entered  Username and Password"
    },
    {
      "line": 6,
      "value": "#Then user click on Login Button"
    },
    {
      "line": 7,
      "value": "#And user successully in Main Page"
    },
    {
      "line": 9,
      "value": "#simple data driven without example"
    },
    {
      "line": 10,
      "value": "#Given user alredy in Home Page"
    },
    {
      "line": 11,
      "value": "#When user entered  \"neeraja.devaki@gmail.com\" and \"Sweety23\""
    },
    {
      "line": 12,
      "value": "#Then user click on Login Button"
    },
    {
      "line": 13,
      "value": "#And user successully in Main Page"
    },
    {
      "line": 15,
      "value": "#data driven with examples"
    }
  ],
  "line": 16,
  "name": "\"Login in CRM and verify Home Page\"",
  "description": "",
  "id": "freecrm-test;\"login-in-crm-and-verify-home-page\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user alredy in Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user entered  \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user successully in Main Page",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "freecrm-test;\"login-in-crm-and-verify-home-page\";",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 24,
      "id": "freecrm-test;\"login-in-crm-and-verify-home-page\";;1"
    },
    {
      "cells": [
        "neeraja.devaki@gmail.com",
        "Sweety23"
      ],
      "line": 25,
      "id": "freecrm-test;\"login-in-crm-and-verify-home-page\";;2"
    },
    {
      "cells": [
        "anilkumar.devaki@gmail.com",
        "Sweety23"
      ],
      "line": 26,
      "id": "freecrm-test;\"login-in-crm-and-verify-home-page\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5288730000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "\"Login in CRM and verify Home Page\"",
  "description": "",
  "id": "freecrm-test;\"login-in-crm-and-verify-home-page\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user alredy in Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user entered  \"neeraja.devaki@gmail.com\" and \"Sweety23\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user successully in Main Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_alredy_in_Home_Page()"
});
formatter.result({
  "duration": 5938351100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neeraja.devaki@gmail.com",
      "offset": 15
    },
    {
      "val": "Sweety23",
      "offset": 46
    }
  ],
  "location": "LoginPage.user_entered_and(String,String)"
});
formatter.result({
  "duration": 408195100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_click_on_Login_Button()"
});
formatter.result({
  "duration": 135934000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_successully_in_Main_Page()"
});
formatter.result({
  "duration": 10662836500,
  "status": "passed"
});
formatter.after({
  "duration": 676138600,
  "status": "passed"
});
formatter.before({
  "duration": 5320223200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "\"Login in CRM and verify Home Page\"",
  "description": "",
  "id": "freecrm-test;\"login-in-crm-and-verify-home-page\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user alredy in Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user entered  \"anilkumar.devaki@gmail.com\" and \"Sweety23\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user successully in Main Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_alredy_in_Home_Page()"
});
formatter.result({
  "duration": 6567571000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anilkumar.devaki@gmail.com",
      "offset": 15
    },
    {
      "val": "Sweety23",
      "offset": 48
    }
  ],
  "location": "LoginPage.user_entered_and(String,String)"
});
formatter.result({
  "duration": 459719600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_click_on_Login_Button()"
});
formatter.result({
  "duration": 84887700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.user_successully_in_Main_Page()"
});
formatter.result({
  "duration": 10087019100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@class\u003d\u0027ui basic button item\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DEVAKI\u0027, ip: \u0027192.168.29.227\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\anilk\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51187}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 10bf2f3ae3afb407b3505dc4d79c0aff\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d\u0027ui basic button item\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.ra.crm.stepdefination.LoginPage.user_successully_in_Main_Page(LoginPage.java:62)\r\n\tat ✽.And user successully in Main Page(Login.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 598001800,
  "status": "passed"
});
});