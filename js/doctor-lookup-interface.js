var apiKey = require('./../.env').apiKey;

import { Lookup } from './../js/doctor-lookup.js'

$(document).ready(() => {
  let doctor = new Lookup();

  $('#issueClick').click(() => {
    let issue = $('#isue').val();

    $('#issueResults').show();
    $('#returnDoctorsByIssue').html("");
    $('#searchRow').hide();

    doctor.findDocByIssue(issue);
  });

  $('#nameClick').click(() => {
    let firstName = $('')
  });

});
