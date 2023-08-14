import { WebDriver } from "selenium-webdriver";
import { DriverSetup } from "../base/DriverSetup";
import { GooglePage } from "../pages/GooglePage";

describe.only("Google App Test", function () {
  let googlePage: GooglePage;
  let driverSetup: DriverSetup;
  let driver: WebDriver;

  before("setup test", async function () {
    driverSetup = new DriverSetup("chrome");
    driver = await driverSetup.getDriver();

    googlePage = new GooglePage(driver);
    await googlePage.launchApp();
  });

  it("Google Search Test @smoke", async function () {
    await driverSetup.recordPerformance();
    await googlePage.enterSearchText("Oracle");
    const pageTitle = await googlePage.verifyTitle("Oracle - Google Search");
    console.log(pageTitle);
    await driverSetup.stopPerformance();
  });

  after("Tear down test", async function () {
    await driverSetup.quitDriver();
  });
});
