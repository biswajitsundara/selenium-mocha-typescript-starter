import { Builder, By, until, WebDriver, WebElement } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";

export class BasePage {
  public driver: any;
  public elementWait = 30;

  public async launchApp(url: any): Promise<void> {
    this.driver = await new Builder().forBrowser("chrome").build();
    await this.driver.manage().window().maximize();
    await this.driver.get(url);
  }

  public async typeText(locator: By, text: any): Promise<void> {
    this.driver.wait(until.elementLocated(locator), this.elementWait)
    const element = await this.driver.findElement(locator);
    await element.sendKeys(text);
  }

  public async closeApp(): Promise<void> {
    this.driver.quit();
  }
}
