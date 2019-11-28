const assert = require('assert');

describe("new webmail page", function() {
    
    it("Test case title", function() {
        browser.url("https://webmail.ffos.hr/");
        $('#rcmloginuser').waitForDisplayed();
        
    $('#rcmloginuser').setValue("dpeuraca");
    $("#rcmloginpwd").setValue("N7prtxMe");
    $("#rcmloginsubmit").click();
    browser.pause(5000);
    $("#rcmbtn110").waitForDisplayed();

       });

       
    

      
});
