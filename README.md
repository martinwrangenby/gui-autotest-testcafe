# gui-autotest-testcafe

## Getting started
```
yarn install
```

## Running tests

Run the tests in chrome (test results in terminal)
```
yarn test
```
Run the tests in chrome with xunit reports as output (more or less silent terminal log)
```
yarn test-xunit
```
Run the tests in chrome headless (xunit reporter is used)
```
yarn test-headless
```
## Test artifacts
If tests are run with the xunit reporter, the test report can be found in ```temp/test-reports```.

Screenshots will be saved when any test fails, they can be found in ```temp/screenshots```

clean the tempfolder
```
yarn clean
```