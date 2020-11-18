# SSB Design System

This is the repository for the website used to document the [SSB component library](https://github.com/statisticsnorway/ssb-component-library).


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
Make sure that the latest version of the component library is installed. Also make sure the version number in the header is correct.
Build the latest version with `npm run build` and makes sure the build doesn't fail.
When build is done, publish by running `npm run deploy`. The branch named `gh-pages` should
update and start the build process. 

#### Styling
Styling is done with with the [Sass](https://sass-lang.com/) language, using the 
[SCSS](https://sass-lang.com/documentation/syntax) syntax. Each component should have its own stylesheet, and there are 
a couple of global stylesheets as well. Please refrain from using custom colors, use the variables from the component library.
Using variables makes it much easier if it's updated at any point. 

The site uses bootstrap for simplicity's sake. If you detect any issues with bootstrap affecting the original design of a component,
please submit at [bug report](https://github.com/statisticsnorway/ssb-component-library/issues/new/choose) at the component library repository.

There are media queries for responsive design. They look like this: 
```scss
$mobile: 'screen and (max-width: 767px)';
$tablet: 'screen and (min-width: 768px) and (max-width: 991px)';
$desktop: 'screen and (min-width: 992px)';
```

Use them like this in your components: 
```scss
@media #{$mobile} {
  // mobile style
}
```
Go from smallest to largest to ensure that styles are being overwritten in the correct order. 

