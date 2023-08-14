import { GooglePage } from "../pages/GooglePage";

describe.only("Google App Test", function () {
  let googlePage: GooglePage;

  before("setup test", async function () {
    googlePage = new GooglePage();
    await googlePage.launchApp("https://www.google.com/");
  });

  it("Google Search Test @smoke", async function () {
    await googlePage.enterSearchText("Oracle");
  });

  after("Tear down test", async function () {
    await googlePage.closeApp();
  });
  
});
