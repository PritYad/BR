# BusReport

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Steps:
To run this project :
Clone it from https://github.com/PritYad/Br
Run npm i(Node.js version 10.9.0 or later is required).
Run ng serve from the console and open http://localhost:4200 in your browser.
Have updated unit and end to end integration test cases for one file named buses.component.spec. But have tested it thoroughly. (To run this test case add f before the first describe like (fdescribe) and then run ng test from console on this project.)

Haven't used bootstrap. Have written all the css from scratch.
Have used created own components.

## Assumptions:
I have made following assumptions in my code:
1) Organisation name will not be null or undefined.
2) Organisation date will not be null or undefined and will come as formatted in dd/mm/yyyy from json.
3) Was not sure how to display status based on deviationFromTimetable so have made following assumption for displaying it:
    i) On time is deviationFromTimetable is greater than 0 and less than 300.
    ii) Late is deviationFromTimetable is greater than 300.
    iii) Early is deviationFromTimetable is less than 0.
    iv) Unknown if deviationFromTimetable is null or undefined or unknown.
4) Spinner and success message for Saving of notes is pending. Same for spinner on showing/hiding of busData.
5) Have written test cases only for BusComponent as of now due to limited time.
6) Due to limited time, have written css only for desktop version(Have written no media queries for now).
7) Multi Accordion open at the same time is allowed.
8) Redirect to dashboard in case of empty or invalid route.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
