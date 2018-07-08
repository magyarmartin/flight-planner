require('chromedriver');
const {By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');

(async function example() {
    let driver = await new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    try {
        let departureAirportCode = "BUD";
        let destinationAirportCode = "BCN";
        let departureDate = "2018-07-12";
        let arrivalDate = "2018-07-14";
        await driver.get(
            `https://www.ryanair.com/hu/hu/booking/home/${departureAirportCode}/${destinationAirportCode}/${departureDate}/${arrivalDate}/1/0/0/0`
        );
        await driver.wait(until.elementLocated(By.xpath('//div/div[1]/div[2]/div/div/flights-table-price/div/div[1]/div[2]/span[2]')),10000);
        let asd = 
            await driver.findElement(By.xpath('//div/div[1]/div[2]/div/div/flights-table-price/div/div[1]/div[2]/span[2]')).getAttribute("innerText");
        console.log('Ez itt a text: ', asd);
        //await driver.wait(until.elementIsVisible(departureAirportName),10000);
        //departureAirportName.click();
        //driver.findElement(By.xpath('//input[@name="departureAirportName"]')).sendKeys("Barcelona");
        //await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//input[@name="departureAirportName"]'))),10000);
    }  catch (error) {
        console.error("Hiba: ", error);
    } finally {
        //await driver.quit();
    }
})();//div[@class="core-btn-primary"]/span[2]