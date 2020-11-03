const webdriver = require('selenium-webdriver');
const { By, until } = require('selenium-webdriver');

describe('Factorial Tests', () => {
  const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

  beforeEach(async () =>  await driver.get('https://qainterview.pythonanywhere.com/'));
  afterAll(async () => await driver.quit());

  test('should return a number for a positive integer input below 171', async () => {
    const inputNumber = 5;
    const expectedOutput = 120;

    const inputField = await driver.findElement(By.id('number'));
    await inputField.sendKeys(inputNumber);

    const calculateButton = await driver.findElement(By.id('getFactorial'));
    calculateButton.click();

    const output = await driver.wait(until.elementLocated(By.id('resultDiv')));
    const outputVal = await driver.wait(until.elementTextContains(output, 'The factorial of')).getText();
    expect(outputVal).toEqual(`The factorial of ${inputNumber} is: ${expectedOutput}`);

  });
  
});