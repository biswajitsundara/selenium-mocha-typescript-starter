import { By, Key} from "selenium-webdriver";
import { BasePage } from "../base/BasePage";

export class GooglePage extends BasePage {
  public searchBox: By = By.name("q");

  public async enterSearchText(text: string): Promise<void> {
    await this.typeText(this.searchBox, text);
    await this.typeText(this.searchBox, Key.RETURN);
  }
}
