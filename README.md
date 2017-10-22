# _Doctor Lookup_

#### _A Javascript project that returns a list of doctors which meet certain search criteria 10.20.2017_

#### By _Senya Webster_

## Description

_A user should be able to enter 1) the name of a doctor they'd like to find using the app or 2) a medical issue they have, and would like to get checked out. In either case, a list of 20 (if that many exist) doctors which meet that search criteria should be returned in a table below the input fields._


## User Stories

* As a user, I should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.

* As a user, I should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.

* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).

* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.

* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## Technologies Used

* JavaScript
* jQuery
* Node
* HTML
* CSS
* Bootstrap

## Setup/Installation Requirements

1. _`$ git clone` [https://github.com/senyawebster/doctor-lookup.git](https://github.com/senyawebster/doctor-lookup)_

2. _`$ cd doctor-lookup/`_

3. _`$ npm install`_

4. _`$ bower install`_

5. _`$ gulp build`_

6. _`$ gulp serve`_

## Support and contact details

_If you have any updates or suggestions please contact, [Senya Webster] (senya.webster@gmail.com), or make a contribution to my repository._

### License

GPL License

Copyright (c) 2017 Senya Webster
