# Pix-Beaker
This app is a simple frontend to the Pixabay API

# Setup
Install the packages in the package.json. This Project uses node 14.17.0.

`
npm install
`

The API key is _not_ included with the source code: to use an API key, add a
file at this location: `src/API/PixabayAPI.key.ts`, and add the following code:

```TypeScript
export const config = {
  key: "1234567890-abcdefghijklmnop"
}
```
replacing the key with a valid key.

## About the App
This app is built with Material-UI as the UI Framework and utilizes the Pixabay
API as the backend. The App runs entirely in memory, so refreshing wipes out any
saved data.

The app is SPA, so moving between views in the app does not remove the top-level
state for saved pictures, or results from the last search. Saved items are
stored as links to the ID: a user can click on their saved links by opening up
the sidebar using the favorites button on the bottom App Bar.

Searches hit the Pixabay API, and restrictions on the API are enforced via
client-side validation. Searches return the top 10 results.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

