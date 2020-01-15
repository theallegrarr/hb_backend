# Backend Task [![Build Status](https://travis-ci.org/theallegrarr/hb_backend.svg?branch=master)](https://travis-ci.org/theallegrarr/hb_backend)   [![Coverage Status](https://coveralls.io/repos/github/theallegrarr/hb_backend/badge.svg?branch=master)](https://coveralls.io/github/theallegrarr/hb_backend?branch=master)

## [View Documentation](https://documenter.getpostman.com/view/2118421/SWLk4kwZ?version=latest)

A basic nodejs API with auth, json patch and image resize operations.

## Setup
**1.** Clone/Download this repo

**2.** Open your terminal in the root of the folder and run ```npm install```

**3.** Make sure you have docker installed on your PC, get it from the docker website

**4.** Start the server by using docker ```docker run -p 49165:8080 -d test-node-app```

**5.** After that, the API should be live on ```http://localhost:49165/```

NOTE: Create a ```.env``` file in the root and add;

```SECRET=<any secret key>```

```TEST_TOKEN=<token generated from the login endpoint>```