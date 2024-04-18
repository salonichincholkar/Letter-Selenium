const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
let driver = await new Builder().forBrowser(Browser.CHROME).build();
try {
await driver.get('file:///H:/Assignments/Selenium/Letter%20Selenium/04%20Letter%20Head/sample-code/preview.html');


let letterwrapper = await driver.findElement(By.className('letter-wrapper'));
console.log("wrapper : ",await  letterwrapper );
	
//let element = await driver.findElement(By.className('letter-content'));
//let text = await element.getText();
//console.log('Letter Content:', text);
		
//org Name

async function checkOrgNamePresence() {
let elements = await driver.findElements(By.className('letter-org-name'));
	 if (elements.length > 0) {
            console.log("Organization name is present on the letter.");
            return true;
        } else {
            console.log("Organization name is not present on the letter.");
            return false;
        }
}
await driver.manage().setTimeouts({implicit: 5000 });
let elements = await driver.findElement(By.className('letter-org-name'));
console.log(await elements.getText())
console.log("Org Name:", await checkOrgNamePresence(await elements.getText()));


//org details

async function checkOrgDetails() {
let elements = await driver.findElements(By.className('letter-org-details'));
	 if (elements.length > 0) {
            console.log("Organization Details is present on the letter.");
            return true;
        } else {
            console.log("Organization Details is not present on the letter.");
            return false;
        }
}
await driver.manage().setTimeouts({implicit: 5000 });
let  detail= await driver.findElement(By.className('letter-org-details'));
console.log(await detail.getText())
console.log("Org Details:", await checkOrgDetails(await detail.getText()));


//Org Logo

async function checkOrgLogo() {
let elements = await driver.findElements(By.className('letter-org-logo'));
	 if (elements.length > 0) {
            console.log("Organization logo is present on the letter.");
            return true;
        } else {
            console.log("Organization logo is not present on the letter.");
            return false;
        }
}
await driver.manage().setTimeouts({implicit: 5000 });
let  logo= await driver.findElement(By.className('letter-org-logo'));
console.log(await logo.getText())
console.log("Org logo:", await checkOrgLogo(await logo.getText()));


//Letter ref.no

async function checkRefNO(dateString) {
	let str=dateString.match(/Ref. No:\s*(.+)/);
    return(str); 

}
await driver.manage().setTimeouts({implicit: 5000 });
let  ref= await driver.findElement(By.className('letter-ref'));
console.log(await ref.getText())
console.log("Ref no:", await checkRefNO(await ref.getText()));

//Letter Date

async function isValidDateFormat(dateString) {
let str=dateString.match(/^Date: \d{2}-\d{2}-\d{4}$/);
return(str); 
}
await driver.manage().setTimeouts({implicit: 5000 });
let date = await driver.findElement(By.className('letter-date'));
console.log(await date.getText())
console.log("Expected Result:",await isValidDateFormat(await date.getText()));

//letter body To,

async function isValidToFormat(dateString) {
let str=dateString.match(/To,\s*/);
return(str); 
}
await driver.manage().setTimeouts({implicit: 5000 });
let to = await driver.findElement(By.className('letter-body-to'));
console.log(await to.getText())
console.log("Expected Result:",await isValidToFormat(await to.getText()));

//Letter subject

async function subFormat(dateString) {
let str=dateString.match(/Subject:\s*/);
return(str); 
}
await driver.manage().setTimeouts({implicit: 5000 });
let sub = await driver.findElement(By.className('letter-body-subject'));
console.log(await sub.getText())
console.log("Expected Result:",await isValidToFormat(await sub.getText()));
 
//Letter salutation
async function Salutation(dateString) {
let str=dateString.match(/^(Dear)/);
return(str); 
}
await driver.manage().setTimeouts({implicit: 5000 });
let salu = await driver.findElement(By.className('letter-body-salutation'));
console.log(await salu.getText())
console.log("Expected Result:",await Salutation(await salu.getText()));

//Letter body message
async function Message(dateString) {
let elements = await driver.findElements(By.className('letter-body-message'));
if (elements.length > 0) {
console.log(" Letter body Message is present on the letter.");
return true;
}
 else {
console.log("Letter body Message is not present on the letter.");
return false;
}
}

await driver.manage().setTimeouts({implicit: 5000 });
let msg = await driver.findElement(By.className('letter-body-message'));
console.log(await msg.getText())
console.log("Expected Result:",await Message(await msg.getText()));


//Letter sign

async function Sign(dateString) {
let elements = await driver.findElements(By.className('letter-body-sign'));
if (elements.length > 0) {
console.log(" Letter sign is present on the letter.");
return true;
}
 else {
console.log("Letter sign Message is not present on the letter.");
return false;
}
}

await driver.manage().setTimeouts({implicit: 5000 });
let sign = await driver.findElement(By.className('letter-body-sign'));
console.log(await sign.getText())
console.log("Expected Result:",await Sign(await sign.getText()));


//Letter footer Website

async function Website(dateString) {
let elements = await driver.findElements(By.className('letter-body-website'));
if (elements.length > 0) {
console.log(" Website is present on the letter footer.");
return true;
}
 else {
console.log("Website  is not present on the letter footer.");
return false;
}
}

await driver.manage().setTimeouts({implicit: 5000 });
let web = await driver.findElement(By.className('letter-org-website'));
console.log(await web.getText())
console.log("Expected Result:",await Website(await web.getText()));


//Letter footer phone

async function Phone(dateString) {
let elements = await driver.findElements(By.className('letter-org-phone'));
if (elements.length > 0) {
console.log(" phone is present on the letter footer.");
return true;
}
 else {
console.log(" phone is not present on the letter footer.");
return false;
}
}

await driver.manage().setTimeouts({implicit: 5000 });
let pho= await driver.findElement(By.className('letter-org-phone'));
console.log(await pho.getText())
console.log("Expected Result:",await Phone(await pho.getText()));


//Letter footer email

async function Email(dateString) {
let elements = await driver.findElements(By.className('letter-org-email'));
if (elements.length > 0) {
console.log(" Email is present on the letter footer.");
return true;
}
 else {
console.log(" Email is not present on the letter footer.");
return false;
}
}

await driver.manage().setTimeouts({implicit: 5000 });
let email= await driver.findElement(By.className('letter-org-email'));
console.log(await email.getText())
console.log("Expected Result:",await Email(await email.getText()));



//Letter footer address

async function Address(dateString) {
let elements = await driver.findElements(By.className('letter-org-address'));
if (elements.length > 0) {
console.log(" address is present on the letter footer.");
return true;
}
 else {
console.log(" address is not present on the letter footer.");
return false;
}
}

await driver.manage().setTimeouts({implicit: 5000 });
let add= await driver.findElement(By.className('letter-org-address'));
console.log(await add.getText())
console.log("Expected Result:",await Address(await add.getText()));

} finally {
await driver.quit();
}
})();