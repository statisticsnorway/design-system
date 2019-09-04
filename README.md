# SSB Design System

- [Run project locally](#run-project-locally)
- [How to start working on a feature](#how-to-start-working-on-a-feature)
- [Deploy to site](#deploy-to-site)
- [Developing a component](#developing-a-component)
    - [Components](#components)
    - [Storybook](#storybook)
    - [Testing](#testing)
    - [Styling](#styling)
----

### Run project locally
```
... clone repository ...
$ npm install
$ npm start
```

### How to start working on a feature
```
$ git checkout master
$ git pull
$ git checkout -b add-feature-x
... do changes ...
$ git commit -a -m "detailed commit message"
$ git status
... verify that correct files are included ...
$ git push -u origin add-feature-x
... create pull-request to master ...
```

### Deploy to site
The project is published with [Github Pages](https://pages.github.com/).
To publish a new build, navigate to master branch and make sure you have the latest updates. 
Build the latest version with `npm run build` and makes sure the build doesn't fail.
When build is done, publish by running `gh-pages -d build`. The branch named `gh-pages` should
update and start the build process. 

## Developing a component
The project uses [Atomic Design](http://atomicdesign.bradfrost.com/) as its structural form.
It is recommended that you familiarize yourself with this before developing. 
When implementing a new component, add it to the [atoms](./src/atoms) directory and create a new directory for your
new component. This directory should contain four files. A [component](#components) file, a [storybook](#storybook)
file, a [test](#testing) file and a [stylesheet](#styling).

#### Components


#### Storybook
[Storybook](https://storybook.js.org/) is an open source tool for developing UI components in an isolated environment.
It is also a useful tool for demoing components by themselves or put together into a user scenario.
To add a component to the storybook build, create a file named like `ComponentName.stories.jsx`.
Import some needed modules, the component you are creating the story for, and add it like this:
```jsx harmony
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(centered)
  .add('Primary button', () => (
    <div>
      <Button text="Primary" primary />
      <Button text="Disabled" primary disabled />
    </div>
  ))
```
Every new instance of `storiesOf` creates a new menu item in the storybook. When using the `add`, it creates an item in
a sub menu. 

#### Testing

#### Styling
Styling is done with with the [Sass](https://sass-lang.com/) language, using the 
[SCSS](https://sass-lang.com/documentation/syntax) syntax. Each component should have its own stylesheet, and there are 
a couple of global stylesheets as well. [Variables](./src/style/_variables.scss) stores global variables, like colors 
approved by the style guide. Please refrain from using custom colors. Using variables makes it much easier if they 
change at any point. 