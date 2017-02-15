# irys-demo-au
Demo client for SIRI protocol developed with Aurelia.

This project is a rewrite of the https://github.com/afimb/irys-demo project.

## Install Aurelia client:
````
npm install aurelia-cli -g
git clone https://github.com/afimb/irys-demo-au
cd irys-demo-au
cp src/config.js.example src/config.js
npm install
```

### Fill the file src/config.js
Add all your SIRI servers informations in this file.

### Running the aurelia app
`au run`

### Building the aurelia app
`au build --env prod`
