## Research Quickstart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.32.3.
More information about the generator is available via [Confluence](https://confluence.phibred.com/display/DA/Angular+Project+Generator)

## Development server
Run `ng serve` or `npm start` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

If you need to host over ssl, a cert and key are provided.  run `npm run start-ssl` and point your browser to [https://localhost:4200/](https://localhost:4200/)
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.


## Configuring the research.auth.client.angular package (OpenId)
See the `Configuring the library` section of the [research.auth.client.angular documentation](./node_modules/research.auth.client.angular/README.md)
Full API documentation is available in the [docs directory](./node_modules/research.auth.client.angular/docs/index.html)

The `ResearchAuthModule` app module and `ResearchAuthGuard.loginRoute` are setup by the generator.  You should only change these if the loginRoute to your application is different.

A default `LoginComponent` is also provided.  It utilizes the `LoginComponent` defined in the `research.web.components` package

## Build
* Run `npm run build` to build the project. 
  * The build artifacts will be stored in the `dist/` directory.  This location can be configured in `.angular-cli.json`
  * If changing output directory to something other than `dist/`, be sure to update the `octopack.js` and `deploy.js` files.
* Be sure to configure the argument for `--base-href` in `package.json` in the `build` script.  
  * This needs to be the path to where the application will be hosted on a web server
    * For example, if hosting the app on `https://as.phidev.com/as/testApp`  The `base-href` needs to be set to `/as/testApp`
  * Default value is the project name supplied to the generator.

## Deployment
* Run `npm run package` to generate a deployment package for your app
  * this will include all application files in `dist`.  It will also create a `.nupkg` file that can be deployed via Octopus Deploy and include release notes.
  * to specify a version for a locally built package, pass it on the command line as an extra argument (*the -- seperator is important!*)
  ```
  npm run package -- --version 1.1.1
  
  ```
  For a TeamCity build, the `research.web.deploytools` package will pick up the build version number automattically so the --version flag is not required.
  ```
  run package 
  ```

* To publish the `.nupkg` package to Octopus Deploy run 
  ```
  npm run deploy
  ```
  * For deployment, the Host and API Keys need defined.  The values are set in `deploy.js`  The `host` will usually be set to either `http://tideploy.phibred.com/` or `http://cgideploy.phibred.com/` depending on which Octopus Deploy instance you are using

## Hosting in IIS
* **When running on IIS, the URL Rewrite module will need to be installed to enable deep linking in the app**
  * [https://www.iis.net/downloads/microsoft/url-rewrite](https://www.iis.net/downloads/microsoft/url-rewrite)
  * an example `web.config` is included in the `src/` directory.
  * To use this, add an entry for `web.config` in the `assets` section of `.angular-cli.json`
    ```javascript
      "assets": [
        "assets",
        "favicon.ico",
        "../node_modules/research.web.components/dist/fonts",
        "../node_modules/research.web.components/dist/images",
        //add web.config here
        "web.config"
      ]
    ```
  * Verify that the Rewrite url matches the base-href in the `build` script in `package.json`.  (line 19 in the included file)
    ```xml
    <action type="Rewrite" url="/match-angular-base-href-path/" />
    ```
  * https redirects rules are also included in the web.config template.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
