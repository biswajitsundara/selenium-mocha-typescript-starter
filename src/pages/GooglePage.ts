import { By, Key, WebDriver } from "selenium-webdriver";
import { BasePage } from "../base/BasePage";

export class GooglePage extends BasePage {
  constructor(driver: WebDriver) {
    super(driver);
  }
  public searchBox: By = By.name("q");

  public async enterSearchText(text: string): Promise<void> {
    await this.typeText(this.searchBox, text);
    await this.typeText(this.searchBox, Key.RETURN);
  }

  public async getPageTitle(title: string): Promise<string> {
    return await this.verifyTitle(title);
  }
}
