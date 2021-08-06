# vuejs-testing-sample

## **This repo includes 2 types of testing for frontend application with VueJS**

- Unit testing with Vue Components testing
- E2E testing with Cypress

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

## Run your unit tests

```
npm run test:unit
```

## Run your end-to-end tests

**UI Mode**

```
npm run test:e2e
```

**Headless mode**

```
npm run test:e2e -- --headless
```

### Lints and fixes files

```
npm run lint
```

## **Result of running tests:**

1. Unit testing:

   - Run command:

     ```
     npm run test:unit
     ```

     ![Unit testing](/images/0-unit-testing.png)

2. E2E testing

   - UI mode

     - Run command:

       ```
       npm run test:e2e
       ```

       ![Cypress UI](/images/1-ui-mode.png)

       Click on **test.js** or **Run all specs**

       ![Test results](/images/2-result.png)

       Here is result after running e2e testing with Cypress in UI mode

   - Headless mode

     - Run command:

       ```
       npm run test:e2e -- --headless
       ```

       # ![Cypress UI](/images/3-headless-result-1.png)

       ![Cypress UI](/images/3-headless-result-2.png)

**After this article, I will show how to create performance test with Gatling.**
