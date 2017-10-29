const apiKey = require('./../.env').apiKey;

import { Lookup } from './../js/doctor-lookup.js'

$(document).ready(function() {
  let doctors = new Lookup();

  $('#issueClick').click(function() {
    let issue = $('#issue').val();

    $('#issueResults').show();
    $('#returnDoctorsByIssue').html("");
    $('#searchRow').hide();

    doctors.findDocByIssue(issue);
  });

  $('#nameClick').click(function() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();

    $('#nameResults').show();
    $('#returnDoctorsByName').html("");
    $('#searchRow').hide();

    doctors.findDocByName(firstName, lastName);
  });

});
