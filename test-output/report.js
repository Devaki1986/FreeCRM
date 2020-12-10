$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Contracts.feature");
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
  "duration": 6803117600,
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
  "duration": 7125669600,
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
  "duration": 370149400,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.in_click_on_contracts()"
});
formatter.result({
  "duration": 10288943100,
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
  "duration": 2537662800,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.in_can_see_bell_icon()"
});
formatter.result({
  "duration": 640931900,
  "status": "passed"
});
formatter.after({
  "duration": 650558900,
  "status": "passed"
});
formatter.before({
  "duration": 5810962000,
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
  "duration": 6625358500,
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
  "duration": 349536300,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.in_click_on_contracts()"
});
formatter.result({
  "duration": 10284333000,
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
  "duration": 1843408800,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.in_can_see_bell_icon()"
});
formatter.result({
  "duration": 657175100,
  "status": "passed"
});
formatter.after({
  "duration": 601031100,
  "status": "passed"
});
});