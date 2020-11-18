var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./Testcases/Homepage.js'],
    framework: 'jasmine2' ,
      onPrepare: function() {
          const newLocal = 'C:/Users/Uniti Tech/Desktop/protractor/umart/node_modules/jasmine-reporters';
          var jasmineReporters = require(newLocal);
          jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
          );
     },
     onPrepare: function() {
        // Add a screenshot reporter and store screenshots :
        jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'Reports/homepage'
        }).getJasmine2Reporter());
     }


  };