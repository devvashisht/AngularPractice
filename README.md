# MyLogin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Angular Performance improvement

- Medium Artical for ngZone and change detection : https://medium.com/@liutingchun_95744/angular-performance-issue-caused-by-settimeout-and-setinterval-1a4a65c07be3

- avoid function call in template expression (all function in template expression would be called during rendering ).

- On push stratgy for child component and make sure input poperties reference is changed for any change from parent component.

- use this.\_ngZone.runOutsideAngular to avoid change detection or rendering for asych call and this.\_ngZone.run(() to run CD manually.
- getter are always called on rendering.
-

## Dom Renering

- Regurlar dom whereas React uses virtual dom
- `Virtual Dom` keep a copy of virtual dom and on changes it will determine which part of DOM has changed and only changed part will be re-rendered
- `Anuglar Rendering` works with ngZone library. Wrapper for browser api is written for all async api in Zone.js e.g. AddEventListener. Wrapper function has mechnism to run redering(runChangeDetechtion ) alnog with callback
- Detail Info : https://blog.angular-university.io/how-does-angular-2-change-detection-really-work/
