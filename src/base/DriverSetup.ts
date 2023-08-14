import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

export class DriverSetup {
  private driver: any;

  constructor(browserName: string) {
    this.driver = this.createDriver(browserName);
  }

  private createDriver(browserName: string): WebDriver {
    switch (browserName) {
      case "chrome":
        return new Builder().withCapabilities(Capabilities.chrome()).build();
      case "firefox":
        return new Builder().withCapabilities(Capabilities.firefox()).build();
      default:
        throw new Error(`Unsupported browser: ${browserName}`);
    }
  }

  public async getDriver(): Promise<WebDriver> {
    return this.driver;
  }

  public async recordPerformance(): Promise<void> {
    await this.driver.sendAndGetDevToolsCommand("Performance.enable");
  }

  public async stopPerformance(): Promise<void> {
    let result = await this.driver.sendAndGetDevToolsCommand(
      "Performance.getMetrics"
    );
    console.log(result);
  }

  public async quitDriver(): Promise<void> {
    if (this.driver) {
      await this.driver.quit();
    }
  }
}
