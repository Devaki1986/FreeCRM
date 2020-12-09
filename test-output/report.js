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
  "name": "user alredy in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user entered \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" and click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user click on contracts",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user entered \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and click save",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user can see bell icon",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
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
      "line": 11,
      "id": "contractspage;contracts-page-test;;1"
    },
    {
      "cells": [
        "neeraja.devaki@gmail.com",
        "Sweety23",
        "anil1",
        "devaki1"
      ],
      "line": 12,
      "id": "contractspage;contracts-page-test;;2"
    },
    {
      "cells": [
        "neeraja.devaki@gmail.com",
        "Sweety23",
        "anil2",
        "devaki2"
      ],
      "line": 13,
      "id": "contractspage;contracts-page-test;;3"
    },
    {
      "cells": [
        "neeraja.devaki@gmail.com",
        "Sweety23",
        "anil3",
        "devaki3"
      ],
      "line": 14,
      "id": "contractspage;contracts-page-test;;4"
    },
    {
      "cells": [
        "neeraja.devaki@gmail.com",
        "Sweety23",
        "anil4",
        "devaki4"
      ],
      "line": 15,
      "id": "contractspage;contracts-page-test;;5"
    },
    {
      "cells": [
        "neeraja.devaki@gmail.com",
        "Sweety23",
        "anil5",
        "devaki5"
      ],
      "line": 16,
      "id": "contractspage;contracts-page-test;;6"
    },
    {
      "cells": [
        "neeraja.devaki@gmail.com",
        "Sweety23",
        "anil6",
        "devaki6"
      ],
      "line": 17,
      "id": "contractspage;contracts-page-test;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7316325900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Contracts page test",
  "description": "",
  "id": "contractspage;contracts-page-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user alredy in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user entered \"neeraja.devaki@gmail.com\" and \"Sweety23\" and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user click on contracts",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user entered \"anil1\" and \"devaki1\" and click save",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user can see bell icon",
  "keyword": "And "
});
formatter.match({
  "location": "ContractsPage.user_alredy_in_home_page()"
});
formatter.result({
  "duration": 5440007800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neeraja.devaki@gmail.com",
      "offset": 14
    },
    {
      "val": "Sweety23",
      "offset": 45
    }
  ],
  "location": "ContractsPage.user_entered_and_and_click_on_login(String,String)"
});
formatter.result({
  "duration": 413202600,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.user_click_on_contracts()"
});
formatter.result({
  "duration": 10295744700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anil1",
      "offset": 14
    },
    {
      "val": "devaki1",
      "offset": 26
    }
  ],
  "location": "ContractsPage.user_entered_and_and_click_save(String,String)"
});
formatter.result({
  "duration": 1837189600,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.user_can_see_bell_icon()"
});
formatter.result({
  "duration": 686999800,
  "status": "passed"
});
formatter.after({
  "duration": 701980800,
  "status": "passed"
});
formatter.before({
  "duration": 5508654400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Contracts page test",
  "description": "",
  "id": "contractspage;contracts-page-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user alredy in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user entered \"neeraja.devaki@gmail.com\" and \"Sweety23\" and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user click on contracts",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user entered \"anil2\" and \"devaki2\" and click save",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user can see bell icon",
  "keyword": "And "
});
formatter.match({
  "location": "ContractsPage.user_alredy_in_home_page()"
});
formatter.result({
  "duration": 5696900300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neeraja.devaki@gmail.com",
      "offset": 14
    },
    {
      "val": "Sweety23",
      "offset": 45
    }
  ],
  "location": "ContractsPage.user_entered_and_and_click_on_login(String,String)"
});
formatter.result({
  "duration": 312993100,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.user_click_on_contracts()"
});
formatter.result({
  "duration": 10302281300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anil2",
      "offset": 14
    },
    {
      "val": "devaki2",
      "offset": 26
    }
  ],
  "location": "ContractsPage.user_entered_and_and_click_save(String,String)"
});
formatter.result({
  "duration": 1621522900,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.user_can_see_bell_icon()"
});
formatter.result({
  "duration": 642004400,
  "status": "passed"
});
formatter.after({
  "duration": 625706500,
  "status": "passed"
});
formatter.before({
  "duration": 5607997400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Contracts page test",
  "description": "",
  "id": "contractspage;contracts-page-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user alredy in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user entered \"neeraja.devaki@gmail.com\" and \"Sweety23\" and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user click on contracts",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user entered \"anil3\" and \"devaki3\" and click save",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user can see bell icon",
  "keyword": "And "
});
formatter.match({
  "location": "ContractsPage.user_alredy_in_home_page()"
});
formatter.result({
  "duration": 10599102700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neeraja.devaki@gmail.com",
      "offset": 14
    },
    {
      "val": "Sweety23",
      "offset": 45
    }
  ],
  "location": "ContractsPage.user_entered_and_and_click_on_login(String,String)"
});
formatter.result({
  "duration": 263128600,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.user_click_on_contracts()"
});
formatter.result({
  "duration": 10218678200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anil3",
      "offset": 14
    },
    {
      "val": "devaki3",
      "offset": 26
    }
  ],
  "location": "ContractsPage.user_entered_and_and_click_save(String,String)"
});
formatter.result({
  "duration": 1630213800,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.user_can_see_bell_icon()"
});
formatter.result({
  "duration": 687372000,
  "status": "passed"
});
formatter.after({
  "duration": 717925600,
  "status": "passed"
});
formatter.before({
  "duration": 5577230500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Contracts page test",
  "description": "",
  "id": "contractspage;contracts-page-test;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user alredy in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user entered \"neeraja.devaki@gmail.com\" and \"Sweety23\" and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user click on contracts",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user entered \"anil4\" and \"devaki4\" and click save",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user can see bell icon",
  "keyword": "And "
});
formatter.match({
  "location": "ContractsPage.user_alredy_in_home_page()"
});
formatter.result({
  "duration": 6640693700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neeraja.devaki@gmail.com",
      "offset": 14
    },
    {
      "val": "Sweety23",
      "offset": 45
    }
  ],
  "location": "ContractsPage.user_entered_and_and_click_on_login(String,String)"
});
formatter.result({
  "duration": 253570800,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.user_click_on_contracts()"
});
formatter.result({
  "duration": 10216328300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anil4",
      "offset": 14
    },
    {
      "val": "devaki4",
      "offset": 26
    }
  ],
  "location": "ContractsPage.user_entered_and_and_click_save(String,String)"
});
formatter.result({
  "duration": 1458229000,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.user_can_see_bell_icon()"
});
formatter.result({
  "duration": 647537600,
  "status": "passed"
});
formatter.after({
  "duration": 692590700,
  "status": "passed"
});
formatter.before({
  "duration": 5473424000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Contracts page test",
  "description": "",
  "id": "contractspage;contracts-page-test;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user alredy in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user entered \"neeraja.devaki@gmail.com\" and \"Sweety23\" and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user click on contracts",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user entered \"anil5\" and \"devaki5\" and click save",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user can see bell icon",
  "keyword": "And "
});
formatter.match({
  "location": "ContractsPage.user_alredy_in_home_page()"
});
formatter.result({
  "duration": 6958065700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neeraja.devaki@gmail.com",
      "offset": 14
    },
    {
      "val": "Sweety23",
      "offset": 45
    }
  ],
  "location": "ContractsPage.user_entered_and_and_click_on_login(String,String)"
});
formatter.result({
  "duration": 320345800,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.user_click_on_contracts()"
});
formatter.result({
  "duration": 10361762900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anil5",
      "offset": 14
    },
    {
      "val": "devaki5",
      "offset": 26
    }
  ],
  "location": "ContractsPage.user_entered_and_and_click_save(String,String)"
});
formatter.result({
  "duration": 3159408800,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.user_can_see_bell_icon()"
});
formatter.result({
  "duration": 648475800,
  "status": "passed"
});
formatter.after({
  "duration": 596187400,
  "status": "passed"
});
formatter.before({
  "duration": 5522873700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Contracts page test",
  "description": "",
  "id": "contractspage;contracts-page-test;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user alredy in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user entered \"neeraja.devaki@gmail.com\" and \"Sweety23\" and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user click on contracts",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user entered \"anil6\" and \"devaki6\" and click save",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user can see bell icon",
  "keyword": "And "
});
formatter.match({
  "location": "ContractsPage.user_alredy_in_home_page()"
});
formatter.result({
  "duration": 7854462800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neeraja.devaki@gmail.com",
      "offset": 14
    },
    {
      "val": "Sweety23",
      "offset": 45
    }
  ],
  "location": "ContractsPage.user_entered_and_and_click_on_login(String,String)"
});
formatter.result({
  "duration": 292300900,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.user_click_on_contracts()"
});
formatter.result({
  "duration": 10237973900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anil6",
      "offset": 14
    },
    {
      "val": "devaki6",
      "offset": 26
    }
  ],
  "location": "ContractsPage.user_entered_and_and_click_save(String,String)"
});
formatter.result({
  "duration": 1487064200,
  "status": "passed"
});
formatter.match({
  "location": "ContractsPage.user_can_see_bell_icon()"
});
formatter.result({
  "duration": 633352400,
  "status": "passed"
});
formatter.after({
  "duration": 580052200,
  "status": "passed"
});
});