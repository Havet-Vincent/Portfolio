# Portfolio
## Mon portfolio 

![made-with-html5](https://img.shields.io/badge/Made_with-HTML5-blue?style=flat)  ![made-with-SASS](https://img.shields.io/badge/Made_with-SASS-pink?style=flat) ![made-with-Formspree](https://img.shields.io/badge/Made_with-Formspree-red?style=flat)  ![GitHub release](https://img.shields.io/badge/version-0.1.0-lightgrey?style=flat)  ![GitHub contributors](https://img.shields.io/badge/Contributor-1-success?style=flat)

- on a déjà installé node et yarn pour ce projet.

### initialisation du projet
```
yarn init
```

###  installation SASS
```
yarn add node-sass -D
```
```sh
# ajout du script dans package.json

  "scripts": {
    "sass": "node-sass -w scss/ -o dist/css -r --output-style=compressed"
  },

# lancement de Sass 
```
  yarn sass
```