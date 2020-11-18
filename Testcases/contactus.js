describe('umart contact us page', function() {
    it('user should see umart website', function() {
    browser.get('https://umart44.com/');
       browser.manage().window().maximize();
       browser.waitForAngular();
    expect(browser.getCurrentUrl()).toBe('https://umart44.com/');  
   });
   it('validate the contact us' ,function(){
      browser.waitForAngular();
      element(by.linkText("Contact Us")).click();
      });
   it('validate the Name' ,function(){
         browser.waitForAngular();
         element(by.css("input[formControlName=name]")).sendKeys('Harsha');
         });
   it('validate the Email' ,function(){
      browser.waitForAngular();
      element(by.css("input[formControlName=email]")).sendKeys('saiharsha730@gmail.com');
      });
   it('validate the country' ,function(){
         browser.waitForAngular();
         element(by.cssContainingText('option', 'India')).click();
         });
   it('validate the phone' ,function(){
      browser.waitForAngular();
      element(by.css("input[formControlName=phone]")).sendKeys('9642101205');
      });
   it('validate the message' ,function(){
      browser.waitForAngular();
      element(by.tagName("textarea")).sendKeys('not working');
      });
   it('validate the button send message' ,function(){
      browser.waitForAngular();
      element(by.xpath("//button[contains(text(),'Send Message')]")).click();
       browser.sleep(3000);
      
      });
   
   });
   