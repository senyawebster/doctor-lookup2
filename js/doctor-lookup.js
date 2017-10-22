var apiKey = require('./../.env').apiKey;

export class Lookup {

  FindDocByIssue(issue) {
    let promise = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=or-portland&user_location=45.523%2C%20122.6765&skip=0&limit=20&user_key=${apiKey}`;
      request.onload = () => {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });

    promise.then((response) => {
      let parsed_res = JSON.parse(response);

      parsed_res.data.forEach((doctor) => {
        // need to figure out how to target data several levels into the JSONresponse
        $('#returnDoctor').append(`<tr><td>${doctor.profile.last_name}, ${doctor.profile.first_name}</td><td>${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.street2}<br>${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</td><td>${doctor.practices[0].phones[0].number}</td><td><a href="${doctor.practices[0].website}">${doctor.practices[0].website}</a></td><td>${doctor.practices[0].accepts_new_patients}</td></tr>`);
      });
    }, (error) => {
      $('.showErrors').html(`There was an error processing your request: ${error.message}`);
    });

    // Return : Doctor first name, last name, address, phone number, website, accepting new patients (y/n)
    // address =
    // street1, street2
    // city, state zip
  }

  FindDocByName(name) {


    // Return : Doctor first name, last name, address, phone number, website, accepting new patients (y/n)
  }


}

https://api.betterdoctor.com/2016-03-01/doctors?query=cough&location=or-portland&user_location=45.523%2C%20122.6765&skip=0&limit=10&user_key=c8dc771bf0039d7e6a76c387a51b670a

https://api.betterdoctor.com/2016-03-01/doctors?query=strep%20throat&location=or-portland&user_location=45.523%2C%20122.6765&skip=0&limit=10&user_key=c8dc771bf0039d7e6a76c387a51b670a



// A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.

// A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.

// If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).

// If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.

// If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)
