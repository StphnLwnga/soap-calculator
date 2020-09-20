# soap-calculator

[![LoopBack](<https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)

## Overview

The calculator is a web service using the SOAP protocol that exposes our end points that resembles the operation of a basic calculator as follows:

- add
- subtract
- divide
- multiply

It expects two integer parameters named intA and intB in the request for all the four exposed methods.

## Objective

The aim was to integrate this SOAP Web Service in our application so as to make it available to any front-end client requiring REST Services.

## REST API Request

Any REST API client will just need to send `<operation>/intA/intB` and our application will handle all the details. e.g. `add/50/5`

## REST API Response

Our application will process the XML payload sent by the remote SOAP Web Service and convert it to JSON format before sending it back to the client application.

```JSON
result: {
  "value": 55
}
```

## Installation

Install using `npm`;

```sh
$ npm install soap-calculator
```

<!--
## Basic Use

Configure and load in the application constructor
as shown below.

```ts
import {, , } from 'soap-calculator';
// ...
export class MyApplication extends BootMixin(ServiceMixin(RepositoryMixin(RestApplication))) {
  constructor(options: ApplicationConfig = {}) {
    const opts:  = ;
    this.configure(.COMPONENT).to(opts);
      // Put the configuration options here
    });
    this.component();
    // ...
  }
  // ...
}
``` -->
