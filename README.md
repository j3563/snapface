# Snapface

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Bootstrap
Dans le terminal : `` npm i bootstrap@5.3.0``

Puis ajouter dans le angular.json : 

```json
{
  .,
  ...,
  ....,
  ....,
  "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    ...
  ],
  "scripts": [
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
  ],
  ....,
  ....,
}
```
# NavBar

Le composant utilisé ici est disponible ici : https://getbootstrap.com/docs/5.3/components/navbar/

L'avantage de bootstrap est qu'il embarque une tonne de composant avec documentation.

# Landing Page

Ici l'ajout de la classe ``container`` (doc : https://getbootstrap.com/docs/5.3/layout/containers/ ) permet d'avoir un container responsif.

Suppression de certaines classes ainsi qu'un ajout pour fixer la taille de l'image à 75%.

```css
button {
  font-size: 20px;
  margin: 0; /* permet qu'il n'y ai plus d'ecart à droite */
}
button:hover{ /* le :hover permet de faire un changement au survol */
    filter: invert(0.3);
}
#logo { /*le # permet de cibler l'id */
  width: 75%; /* fixation de la taille de l'image à 75% */
  height: auto; 
}
```
