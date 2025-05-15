# ATP React UI

The component library for fast and accessible development of gorgeous interfaces.

Projects using it: [Sales Portal Dashboards](https://dev-sp2.meet.achievetestprep.com)

## Mission

Be the most accessible it can be out of the box and the fastest way to production.

[Go to docs to see complete, live examples](https://prep.achievetestprep.com/atp-react-ui)

## 🚀 Usage

Install ATP Library

```sh
npm i atp-react-ui
```

Install [TailwindCSS](https://tailwindcss.com/docs/installation)

```sh
npm install -D tailwindcss
npx tailwindcss init
```

Install [TailwindForms](https://github.com/tailwindlabs/tailwindcss-forms)

```sh
npm install -D @tailwindcss/forms
```

Inside `tailwind.config.js`

```js
const atpLib = require('atp-react-ui/config');
module.exports = atpLib({
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
});
```

Then place `AtpLib` at the root of your project (the order doesn't matter, as long as your application is inside).

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AtpLib } from 'atp-react-ui';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <AtpLib>
    <App />
  </AtpLib>
);


```

Use components inside your project

```js
import { Button } from 'atp-react-ui';

function App() {
  return <Button>Hi there!</Button>;
}

export default App;
```

### Sorting Tailwind Classes

Update your `.prettierrc` by adding following to it:

```js
"plugins": ["prettier-plugin-tailwindcss"],
"tailwindFunctions": ["twSort"],
```

Improve `twSort` from `atp-react-ui` and use it as:

```js
import { twSort, AtpThemeType } from atp-react-ui;

const customTheme: AtpThemeType = {
  helperText: {
    base: twSort`grow-0 relative flex h-5 md:bg-gray-900`,
  },
};

// It will automatically be sorted as
const customTheme: AtpThemeType = {
  helperText: {
    base: twSort`relative flex h-5 grow-0 md:bg-gray-900`,
  },
};
```

> **Important:**
> In case auto-sorting doesn't work. Try restarting IDE.

## 🔌 Contributing

- Fork
- Clone
- `npm install`
- `npm run storybook`

It will start a local server at `localhost:6006` with all components rendered.

⚠ Use `npm run cz` instead of `git commit`! It will guide you through some short questions and guarantee that you commit message is standardized.

Commit will also trigger linting
