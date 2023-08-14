import { By, until, WebDriver } from "selenium-webdriver";
import { Config } from "./Config";

export class BasePage {
  public driver: any;
  public elementWait = 30;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  public async launchApp(): Promise<void> {
    await this.driver.manage().window().maximize();
    await this.driver.get(Config.APP_URL);
  }

  public async typeText(locator: By, text: any): Promise<void> {
    this.driver.wait(until.elementLocated(locator), this.elementWait);
    const element = await this.driver.findElement(locator);
    await element.sendKeys(text);
  }

  public async verifyTitle(text: string): Promise<string> {
    await this.driver.wait(until.titleIs(text), this.elementWait);
    return await this.driver.getTitle();
  }
}
