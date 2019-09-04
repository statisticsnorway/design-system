# SSB Design System

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