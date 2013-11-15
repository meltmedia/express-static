# Express Static
Allows developers to develop like they would in Express, but output rendered html as static files.

## Dependencies
* Nodejs
* Npm

```
npm install -g grunt-cli
```

```
npm install
```

## Develop

```
npm start
```


## Build static files
Currently, static files are generated via requests through the karma e2e tests. Any routes should be tested in karma e2e in order to be rendered statically.

```
grunt s
```