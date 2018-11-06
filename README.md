# Hostess
Sit Me Now Web app.

## Set up


### Requirements
Install nodejs + yarn:
```bash
$ brew install nodeenv
$ brew install yarn --without-node

$ nodeenv /path/to/your/envs/node
$ source /path/to/your/envs/node/bin/activate
$ cd /path/to/waitress/repo/path
$ yarn install
```

Install parcel:
```bash
$ yarn global add parcel-bundler
```

## Run 
```bash
$ npm run start
```
Server will start in http://localhost:1234