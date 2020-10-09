# Portfolio
## Mon portfolio 

- on a installé node et yarn pour ce projet

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

"sass": "node-sass -w scss/ -o dist/css -r --output-style=compressed"

  "scripts": {
    "sass": "node-sass -w scss/ -o dist/css -r"
  },

# ajout de .gitignore


