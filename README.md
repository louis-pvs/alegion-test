## Setup

This app was created with Node.js 10.14.1. Use `.nvmrc` file provided together with the help of [nvm](https://github.com/creationix/nvm) to commit changes in the same version of Node.js.

Follow these steps for the correct application setup:

1. `nvm install` – install proper Node.js version
2. `npm install` – install dependencies
3. `npm test` – run all tests (should fail unless you fix the app)
4. `npm start` – serve the app at [http://localhost:3000/](http://localhost:3000/) (it automatically opens the app in your default browser)

There is also the `npm run test:watch` command available that starts `react-script`/`jest` test runner in the default watch mode. It enables choosing tests that are related to modified files only.

---

## Assessment Summary

The front end interview is designed to see how you approach the design of a complex component. The instructions are set up to give you a starting point but do not cover every detail. Therefore, the intent is for you to be creative and fill in any gaps with what you think would be best. After you submit the answer to your problem the next step will be for you to walk through your design and code with a team member.

## Assessment Instructions

The problem you are going to solve is to create a React component for a searchable and sortable table of comments. The only rule is to avoid the use of third party libraries as much as possible. You are allowed to use a boilerplate repository to get started but the component implementation can not rely on a component from another library.

You will be interacting with a REST api endpoint located here. The table will need to display the name, e-mail and body of the comments that are returned. The search needs to filter the list as you type by e-mail and body. The sort functionality will need to be supported for all columns to be in ascending or descending order.

Some things to consider are performance is crucial as the user scrolls through the list of comments and needs to be able to accommodate more comments in the future. You will be asked how your component will deal with this scenario. Furthermore, we want to see how you would test your code. Test driven development is encouraged. When you are finished with your component please e-mail a link to a github repository that we can clone and run locally. Include any relevant instructions needed inside of the README so we can run tests and bring the component up in a browser.
