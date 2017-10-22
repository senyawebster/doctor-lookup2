const apiKey = require('./../.env').apiKey;

export class Lookup {

  // A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
  findDocByIssue(issue) {
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
      let parsed_res_issue = JSON.parse(response);

      parsed_res_issue.data.forEach((doctor) => {

        // $('#returnDoctorsByIssue').append(`<tr><td>${doctor.profile.last_name}, ${doctor.profile.first_name}</td><td>${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.street2}<br>${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</td><td>${doctor.practices[0].phones[0].number}</td><td><a href="${doctor.practices[0].website}">${doctor.practices[0].website}</a></td><td>${doctor.practices[0].accepts_new_patients}</td></tr>`);
        $('#returnDoctorsByIssue').append(<tr><td>"sanity test"</td><td>"sanity test"</td><td>"sanity test"</td><td>"sanity test"</td><td>"sanity test"</td></tr>);
      });
    }, (error) => {
      $('.showErrors').html(`There was an error processing your request: ${error.message}`);
    });
  }

  // A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
  findDocByName(firstName, lastName) {
    let promise = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${first}&last_name=${last}&location=or-portland&user_location=45.523%2C%20122.6765&skip=0&limit=20&user_key=c8dc771bf0039d7e6a76c387a51b670a`;
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
      let parsed_res_name = JSON.parse(response);
      debugger;
      parsed_res_name.data.forEach((doctor) => {

        $('#returnDoctorsByName').append(`<tr><td>${doctor.profile.last_name}, ${doctor.profile.first_name}</td><td>${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.street2}<br>${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</td><td>${doctor.practices[0].phones[0].number}</td><td><a href="${doctor.practices[0].website}">${doctor.practices[0].website}</a></td><td>${doctor.practices[0].accepts_new_patients}</td></tr>`);
      });
    }, (error) => {
      $('.showErrors').html(`There was an error processing your request: ${error.message}`);
    });
  }


}




// CHECK: A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.

// CHECK: A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.

// CHECK: If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).

// CHECK?: If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.

// If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)
