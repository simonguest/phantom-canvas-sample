# phantom-canvas-sample

An example of using server-side PhantomJS in Node to render a HTML5 canvas into PDF, PNG, and JPG format.

## Pre-requisites

PhantomJS (v2.0.0 or higher recommended) must be installed on the machine. Download and install from http://phantomjs.org/download.html).

## Running the sample

To run the sample, install the pre-requisite npm packages:

```npm install```

Then start the server:

```node index.js```

The HTML5 canvas template can be found at ```http://localhost:5000/template```

To generate an image from this template, browse to ```http://localhost:5000/image/[format]``` where format is one of png, pdf, or jpg.
