# ATP React UI

ATP React UI is the shared React component library for Achieve Test Prep products. It provides accessible components, hooks, themes, and precompiled Tailwind CSS styles.

## Requirements

- React 18.3.1 or newer
- React DOM 18.3.1 or newer
- React Hook Form 7.71.2 or newer
- Tailwind CSS 4.1.7 or newer

## Installation

Install the library and its application-level peer dependencies:

```sh
npm install atp-react-ui react react-dom react-hook-form
npm install --save-dev tailwindcss
```

Internal packages such as Headless UI, Heroicons, Radix UI, Tippy, and `tailwind-merge` are installed automatically with `atp-react-ui`.

## Styles

Import the compiled component stylesheet once in your application entry point, before your application-specific styles:

```tsx
import 'atp-react-ui/style/atp-css-styles.css';

import './styles.css';
```

The component stylesheet already includes the styles generated from `@tailwindcss/forms`. Applications do not need to install that plugin unless they also use it in their own Tailwind source.

### Fonts

The optional font stylesheet expects these files to be served from `/fonts`:

- `/fonts/ibm-plex-sans.woff2`
- `/fonts/ibm-plex-sans-italic.woff2`
- `/fonts/bitter.woff2`
- `/fonts/bitter-italic.woff2`

After adding those assets to the application's public directory, import the font definitions:

```tsx
import 'atp-react-ui/style/fonts.css';
```

## Tailwind CSS 4 with Vite

Applications that use Tailwind utilities in their own source should install the Vite plugin:

```sh
npm install --save-dev @tailwindcss/vite
```

Add it to the application's Vite config:

```ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
});
```

Import Tailwind from the application's main CSS file:

```css
@import 'tailwindcss';
```

Tailwind CSS 4 does not require the old `tailwind.config.js`, `purge`, or `npx tailwindcss init` setup.

## Application setup

Use `ThemeProvider` when the application needs light, dark, or system theme selection:

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from 'atp-react-ui';
import 'atp-react-ui/style/atp-css-styles.css';
import 'atp-react-ui/style/fonts.css';

import App from './App';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="atp-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
```

The font import can be omitted when the application supplies its own fonts.

## Using components

Components, hooks, theme helpers, and `tailwind-merge` utilities are exported from the package root:

```tsx
import { Button, Card, CardBody, Text } from 'atp-react-ui';

export default function Example() {
  return (
    <Card>
      <CardBody>
        <Text as="h2">Prepare with confidence</Text>
        <Button theme="primary">Get started</Button>
      </CardBody>
    </Card>
  );
}
```

## Sorting Tailwind classes

Install Prettier and its Tailwind plugin:

```sh
npm install --save-dev prettier prettier-plugin-tailwindcss
```

Configure `twSort` as a Tailwind-aware function in `.prettierrc`:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindFunctions": ["twSort"]
}
```

Use the tagged-template helper for theme values:

```ts
import { twSort, type AtpThemeType } from 'atp-react-ui';

const helperTextStyles: AtpThemeType['helperText'] = {
  base: twSort`relative flex h-5 grow-0 md:bg-gray-900`,
  valid: twSort`text-success`,
  invalid: twSort`text-error`,
};
```

Restart the editor after changing the Prettier configuration if class sorting is not applied immediately.

## Development

Install dependencies and start Storybook:

```sh
npm install
npm run storybook
```

Storybook runs at `http://localhost:6006`.

Before publishing a change, run:

```sh
npm run lint
npm run build
```

Use `npm run cz` for guided conventional commits and `npm run release` for the configured release workflow.

## Dependency placement

- Put React, React DOM, React Hook Form, Tailwind CSS, and other host-instance integrations in `peerDependencies` and `devDependencies`.
- Put packages imported by shipped components in `dependencies`.
- Put build, lint, formatting, Storybook, and release tooling in `devDependencies`.

The Vite library build externalizes both runtime dependencies and peer dependencies. Published ESM output must not contain runtime CommonJS calls such as `require("react")`.
