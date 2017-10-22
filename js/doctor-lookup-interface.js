const apiKey = require('./../.env').apiKey;

import { Lookup } from './../js/doctor-lookup.js'

$(document).ready(() => {
  let doctors = new Lookup();

  $('#issueClick').click(() => {
    let issue = $('#issue').val();

    $('#issueResults').show();
    $('#returnDoctorsByIssue').html("");
    $('#searchRow').hide();

    doctors.findDocByIssue(issue);
    // console.log(doctors.findDocByIssue(issue));
  });

  $('#nameClick').click(() => {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();

    $('#nameResults').show();
    $('#returnDoctorsByName').html("");
    $('#searchRow').hide();

    doctors.findDocByName(firstName, lastName);
  });

});
