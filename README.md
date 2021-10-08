# Movies App

## Description

This project is created to test my skills with JavaScript with MVVM pattern and
Bootstrap.

## Project setup

1. Install the dependencies:

```bash
npm install
```

2. Run the project with the webpack dev server (localhost on port 8080):

```bash
npm run start
```

Or build the project and open the HTML file in the browser ("index.html" in the
generated "dist" folder):

```bash
npm run build
```

## Bootstrap

### Components used

- Navbar
- Badge
- Modal
- Card
- Button
- Toast
- Form
- Input (text, textarea, range)

### Styles modified with SASS (scss)

- Body background
- Border radius for buttons (normal and large)
- Alert border radius
- Alert y and x padding
- Range input color

### Responsiveness

Supports screens from 375 pixels width and above (smartphones, tablets, computer
screens, etc.).

### Icons

At least 4 Google Material Icons used.

## JavaScript

- "Vanilla" JS with a light webpack configuration for easy development and
  bundling
- Movies CRUD
- MVVM (Model View View-Model) pattern
- Obsever pattern
- "uuid" package to generate ids
- HTML templates and fragments
- Builder pattern (kinda... not really...)
- Local storage to save and restore the app state (restore after reload and save
  after every state change)
