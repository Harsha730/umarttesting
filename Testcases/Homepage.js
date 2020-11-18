describe('umart home page', function() {
  it('user should see umart website', function() {
    browser.get('https://umart44.com/');
     browser.manage().window().maximize();
     browser.waitForAngular();
  expect(browser.getCurrentUrl()).toBe('https://umart44.com/');    
 });
   
 it('validate the title',function(){
  browser.waitForAngular();
    expect(browser.getTitle()).toBe('Umart44');
   });

 it('validate the Heading' ,function(){
  browser.waitForAngular();
    expect(element(by.tagName('h1')).getText()).toContain('START SELLING YOUR PRODUCTS/SERVICES, REAP MORE BENEFITS!');
    })
 it('validate the sub Heading' ,function(){
  browser.waitForAngular();
       expect(element(by.css('h2')).getText()).toContain('Registration to be invited to open your online outlet');
     })
 it('validate the check our plans button', function(){
     browser.waitForAngular();
     element(by.css("div.plans_text")).click();
     browser.sleep(5000);
     expect(element(by.xpath("//span[contains(text(),'Features')]")).getText()).toContain("Features")
    })
  it('validate the USA Plans' ,function(){
     browser.waitForAngular();
     element(by.cssContainingText('option', 'USA')).click();
   expect(element(by.css("span.value")).getText()).toContain("9.99")
   })  
   it('Features mouseover Test1', function() {
     browser.waitForAngular();
     browser.actions().mouseMove(element(by.xpath("//body/app-root[1]/app-front-end-layout[1]/div[1]/app-home[1]/app-pricing[1]/div[1]/div[2]/div[2]/div[2]/div[1]/ul[1]/li[2]/a[1]"))).perform();
   expect(element(by.xpath("//span[contains(text(),'Enable users to find your web content/products/ se')]")).isDisplayed()).toBeTruthy("Enable users to find your web content/products/ services in their local languages.");
 });
 it('Features mouseover Text6', function() {
  browser.waitForAngular();
  var Authentication=element(by.partialLinkText("OTP Authenticati"));
  browser.actions().mouseMove(Authentication).perform();
  browser.sleep(3000);
 expect(element(by.xpath("//span[contains(text(),'An extra layer of your profile and data security w')]")).isDisplayed()).toBeTruthy("An extra layer of your profile and data security with us. User's Identity is always monitored to help your critical business requirements.");
 });
   
     it('Features mouseover Text3', function() {
       browser.waitForAngular();
       var platform=element(by.partialLinkText("e-Commerce platfo"));
       browser.actions().mouseMove(platform).perform();
   expect(element(by.xpath("//span[contains(text(),'Managed and optimized hosting services for your cu')]")).isDisplayed()).toBeTruthy("Managed and optimized hosting services for your customized Ecommerce needs.");
  });
   
  it('Features mouseover Text5', function() {
   browser.waitForAngular();
   var Outlet=element(by.partialLinkText("Outlet Manageme"));
   browser.actions().mouseMove(Outlet).perform();
expect(element(by.xpath("//span[contains(text(),'Committed to improving your outlet user experience')]")).isDisplayed()).toBeTruthy("Committed to improving your outlet user experience in an affordable package.");
});
 
 it('Features mouseover Text7', function() {
    browser.waitForAngular();
    var Branding=element(by.partialLinkText("Branding and Experie"));
    browser.actions().mouseMove(Branding).perform();
expect(element(by.xpath("//span[contains(text(),'Branding is a sensory experience that brings custo')]")).isDisplayed()).toBeTruthy("Branding is a sensory experience that brings customer long-lasting relationship. Matching your business that meets user expectation is always matters.");
});
it('Features mouseover Text2', function() {
     browser.waitForAngular();
      browser.actions().mouseMove(element(by.xpath("//body/app-root[1]/app-front-end-layout[1]/div[1]/app-home[1]/app-pricing[1]/div[1]/div[2]/div[2]/div[2]/div[1]/ul[1]/li[3]/a[1]"))).perform();
      expect(element(by.xpath("//span[contains(text(),'All the products and services are accessible on bo')]")).isDisplayed()).toBeTruthy("All the products and services are accessible on both mobile and desktop platforms without fail.");
 });
  it('Features mouseover Text4', function() {
       browser.waitForAngular();
       var Custom =element(by.partialLinkText("Custom Doma"));
       browser.actions().mouseMove(Custom).perform();
  expect(element(by.xpath("//span[contains(text(),'Register your Branding or custom vendor portal wit')]")).isDisplayed()).toBeTruthy("Register your Branding or custom vendor portal with us. Our e-commerce solutions help you to drive more traffic into your business.");
 });
it('Features mouseover Text10', function() {
 browser.waitForAngular();
 var Digital=element(by.partialLinkText("Digital Servic"));
 browser.actions().mouseMove(Digital).perform();
expect(element(by.xpath("//span[contains(text(),'Help and guide vendors in making cost-effective an')]")).isDisplayed()).toBeTruthy("'Help and guide vendors in making cost-effective and correct use of portal services round the clock.'");
});
it('Features mouseover Text12', function() {
 browser.waitForAngular();
 var Social=element(by.partialLinkText("Social Network Shari"));
 browser.executeScript('window.scrollTo(2000,4000);').then(function () {
 });
 browser.sleep(3000);
 browser.actions().mouseMove(Social).perform();
expect(element(by.xpath("//span[contains(text(),'Broadcast your products and services on a social n')]")).isDisplayed()).toBeTruthy("Broadcast your products and services on a social network to your social connections.");
});

it('Features mouseover Text9', function() {
 browser.waitForAngular();
 var User=element(by.partialLinkText("User Traffic"));
 browser.actions().mouseMove(User).perform();
expect(element(by.xpath("//span[contains(text(),'Hassle-free browsing solutions (in terms of speed ')]")).isDisplayed()).toBeTruthy("Hassle-free browsing solutions (in terms of speed and accessibility), empower vendors to build great in-product experiences.");
});

it('Features mouseover Text13', function() {
 browser.sleep(3000);
 var Slot=element(by.partialLinkText("Slot Booking wiza"));
 browser.actions().mouseMove(Slot).perform();
expect(element(by.xpath("//span[contains(text(),'Assists to automate the process of your outlet vis')]")).isDisplayed()).toBeTruthy("Assists to automate the process of your outlet visits, 24x7 online.");
});
it('Features mouseover Text8', function() {
  browser.waitForAngular();
  var SEO=element(by.partialLinkText("SEO"));
  browser.actions().mouseMove(SEO).perform();
 expect(element(by.xpath("//span[contains(text(),'Growing the quality and quantity of website traffi')]")).isDisplayed()).toBeTruthy("Growing the quality and quantity of website traffic by increasing the visibility of a website in search engines.");
 });
it('change the plan into india' ,function(){
 browser.waitForAngular();
 element(by.cssContainingText('option', 'India')).click();
 browser.executeScript('window.scrollTo(0,2000);').then(function () {
});
browser.sleep(3000);
expect(element(by.css("span.value")).getText()).toContain("249")
});
it('Subscribe Now for sliver india', function() {
  browser.waitForAngular();
  element(by.xpath("//body/app-root[1]/app-front-end-layout[1]/div[1]/app-home[1]/app-pricing[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/ul[1]/li[14]/a[1]")).click();
  browser.sleep(9000);
  expect(element(by.xpath("/html[1]/body[1]/app-root[1]/app-front-end-layout[1]/div[1]/app-register[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[12]/div[1]/div[1]/select[1]/option[2]")).isDisplayed()).toBeTruthy(" 249/mo.")
 });
 it('validate umart logo click', function() {
  browser.waitForAngular();
  element(by.tagName("img")).click();
  browser.sleep(2000);
 });
 it('Subscribe Now for Gold india', function() {
  browser.waitForAngular();
  element(by.xpath("//body/app-root[1]/app-front-end-layout[1]/div[1]/app-home[1]/app-pricing[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[3]/ul[1]/li[14]/a[1]")).click();
  browser.sleep(9000);
  expect(element(by.xpath("//body/app-root[1]/app-front-end-layout[1]/div[1]/app-register[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[12]/div[1]/div[1]/select[1]/option[3]")).isDisplayed()).toBeTruthy("599/mo.")
 });
 it('validate umart Home link', function() {
  browser.waitForAngular();
  element(by.linkText("Home")).click();
  browser.sleep(2000);
 });
 it('Subscribe Now for platinum india', function() {
  browser.waitForAngular();
  element(by.xpath("//body/app-root[1]/app-front-end-layout[1]/div[1]/app-home[1]/app-pricing[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/ul[1]/li[14]/a[1]")).click();
  browser.sleep(9000);
  expect(element(by.xpath("//body/app-root[1]/app-front-end-layout[1]/div[1]/app-register[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[12]/div[1]/div[1]/select[1]/option[4]")).isDisplayed()).toBeTruthy("599/mo.")
 });
 it('again validate umart Home link', function() {
  browser.waitForAngular();
  element(by.linkText("Home")).click();
  browser.sleep(2000);
 });

 });
 