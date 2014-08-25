// JavaScript Document

$(document).delegate('#Home', 'pageinit', function() {
  document.getElementById("Copyright").innerHTML = MakeLogo("Stop", "Watch", true, true) + "<br>&copy; " + YearInRomanNumerals() + " The Inchoate Company";
 $("#Copyright").bind("click", function(event, ui) {
  $.mobile.changePage( "#StpWatch", {role: "page", transition: 'flip'} );
 });
});

$(document).delegate('#StpWatch', 'pageinit', function() {
 document.getElementById("SWLogo").innerHTML = MakeLogo("Stop", "Watch", false, false);
 $("#SWLogo").bind("click", function(event, ui) {
  $.mobile.changePage( "#Home", {role: "page", transition: 'flip'} );
 });
 $("#SWMenu").bind("click", function(event, ui) {
  $.mobile.changePage( "#Home", {role: "page", transition: 'flip'} );
 });
 $("#SWReset").bind("click", function(event, ui) {
  ResetClicked();
 });
  
 $( "#SWStart" ).bind( "click", function(event, ui) {
   StartClicked();
 });
 $('#SWReset').button('disable');
 StartClicked.Start = false;
 ResetClicked.Reset = "Lap";
 ResetClicked.LapList = '';
 StartClicked.ElapsedTime = 0;
});

$(document).delegate('#CPI', 'pageinit', function() {
 document.getElementById("CPILogo").innerHTML = MakeLogo("CPI", "Calc", false, false);
 $("#CPILogo").bind("click", function(event, ui) {
  $.mobile.changePage( "#Home", {role: "page", transition: 'flip'} );
 });
 $("#CPIMenu").bind("click", function(event, ui) {
  $.mobile.changePage( "#Home", {role: "page", transition: 'flip'} );
 });
});

$(document).delegate('#FV', 'pageinit', function() {
 document.getElementById("FVLogo").innerHTML = MakeLogo("Future", "Value", false, false);
 $("#FVLogo").bind("click", function(event, ui) {
  $.mobile.changePage( "#Home", {role: "page", transition: 'flip'} );
 });
 $("#FVMenu").bind("click", function(event, ui) {
  $.mobile.changePage( "#Home", {role: "page", transition: 'flip'} );
 });
 UpdateFV();
});

$(document).delegate('#Tip', 'pageinit', function() {
 document.getElementById("TipLogo").innerHTML = MakeLogo("Tip", "Calc", false, false);
 $("#TipLogo").bind("click", function(event, ui) {
  $.mobile.changePage( "#Home", {role: "page", transition: 'flip'} );
 });
 $("#TipMenu").bind("click", function(event, ui) {
  $.mobile.changePage( "#Home", {role: "page", transition: 'flip'} );
 });
 $("#TipRound").attr("checked",true).checkboxradio("refresh");
 $("#TipRound").bind( "change", function(event, ui) {
  UpdateTip();
});
});

// General Functions

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function trim(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g, "");
}

function ReplaceCurlies(sString) {
    var s = sString;
    s = s.replace(/\u2018|\u2019|\u201A|\uFFFD/g, "'");
    s = s.replace(/\u201c|\u201d|\u201e/g, '"');
    s = s.replace(/\u02C6/g, '^');
    s = s.replace(/\u2039/g, '<');
    s = s.replace(/\u203A/g, '>');
    s = s.replace(/\u2013/g, '-');
    s = s.replace(/\u2014/g, '--');
    s = s.replace(/\u2026/g, '...');
    s = s.replace(/\u00A9/g, '(c)');
    s = s.replace(/\u00AE/g, '(r)');
    s = s.replace(/\u2122/g, 'TM');
    s = s.replace(/\u00BC/g, '1/4');
    s = s.replace(/\u00BD/g, '1/2');
    s = s.replace(/\u00BE/g, '3/4');
    s = s.replace(/[\u02DC|\u00A0]/g, " ");
    return trim(s);
}

function YearInRomanNumerals() {
  var Today = new Date();
  var YearNumber = Today.getYear();
  YearNumber = (YearNumber < 1000) ? YearNumber + 1900 : YearNumber;
  var sRomanNumeralYears = new Array("MMXIV", "MMXV", "MMXVI", "MMXVII", "MMXVIII", "MMXIX", "MMXX", "MMXXI", "MMXXII", "MMXXIII");
  return sRomanNumeralYears[YearNumber-2014];
}

function MakeLogo(sFirst, sLast, bCentered, bImage) {
  var aColors = new Array("#00a0ff", "#2715aa", "#ffba00", "#d1664d", "#689360", "#25822f", "#c047ba", "#763575", "#91160d", "#ff1a08");
  var nColor = getRandomInt (0, aColors.length-1);
  var sLogo = "";
  if (bImage)
    sLogo += "<p align='center'><a href='javascript:ShowStopWatch()'><img src='/assets/StopWatch128.png'></a></p>";
  if (bCentered)
    sLogo += "<div class='CopyHeadline' style='color: gray; line-height: 100%;";
  else
    sLogo += "<span class='CopyHeadline' style='color: gray; line-height: 100%;";
  if (!bCentered)
    sLogo += "text-align: left;";
  sLogo += "'><span class='CopyHeadline300'>"+sFirst+"</span><span class='CopyHeadline900' style='color: " + aColors[nColor] + ";'>"+sLast+"</span>";
  if (bCentered)
    sLogo += "</div>";
  else
    sLogo += "</span>";
  return sLogo;
}

function ShowStopWatch() {
 $.mobile.changePage( "#StpWatch", {role: "page", transition: 'flip'} );
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function IsEMailAddressValid(sEMAddress) {
  if (sEMAddress.length > 5 && sEMAddress.search('@') > 0  && sEMAddress.indexOf('.') > 0 && sEMAddress.search('www.') === -1 && sEMAddress.search('http') === -1)
    return true;
  else
    return false;
}

function MonthNumToText(nMonth) {
  var month = new Array("January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December");
  return month[nMonth];
}

function roundNumber(rnum, rlength) {   // Arguments: number to round, number of decimal places
   var newnumber = Math.round(rnum*Math.pow(10,rlength))/Math.pow(10,rlength);
   return parseFloat(newnumber);
}

// End of General Functions

// Start of StopWatch Functions
function StartClicked() {
 if (StartClicked.Start) {  // Stop clicked
  StartClicked.EndTime = new Date().valueOf();
  StartClicked.ElapsedTime = StartClicked.EndTime - StartClicked.StartTime;
  window.clearInterval(StartClicked.DisplayTimer);
  StartClicked.Start = false;
  document.getElementById("SWStart").innerHTML = "Start";
  $('#SWStart').button('refresh');
  document.getElementById("SWReset").innerHTML = "Reset";
  $('#SWReset').button('refresh');
  ResetClicked.Reset = 'Reset';
  UpdateReadout(false);
 }
 else { // Start clicked
  StartClicked.StartTime = new Date().valueOf() - StartClicked.ElapsedTime;
  StartClicked.DisplayTimer = setInterval(function(){UpdateReadout(true)},50);
  StartClicked.Start = true;
  document.getElementById("SWStart").innerHTML = "Stop";
  $('#SWStart').button('refresh');
  $('#SWReset').button('enable');
  $('#SWReset').button('refresh');
  document.getElementById("SWReset").innerHTML = "Lap";
  $('#SWReset').button('refresh');
  ResetClicked.Reset = 'Lap';
 }
}

function ResetClicked() {
  if ('Lap' === ResetClicked.Reset) { // Lap clicked
   window.clearInterval(StartClicked.DisplayTimer);
   var nElapsed = new Date().valueOf() - StartClicked.StartTime;
   ResetClicked.LapList = ResetClicked.LapList ? "Lap marked at " + MS2HMST(nElapsed) + "\n" + ResetClicked.LapList : "Lap marked at " + MS2HMST(nElapsed);
   // ResetClicked.LapList = "Lap marked at " + MS2HMST(nElapsed) + "\n" + ResetClicked.LapList;
   document.getElementById("LapList").innerHTML = ResetClicked.LapList;
   document.getElementById("SWReadout").innerHTML = MS2HMST(nElapsed);
   document.getElementById("SWReset").innerHTML = "Lap off";
   $('#SWReset').button('refresh');
   ResetClicked.Reset = 'Off';
  }
  else if ('Off' === ResetClicked.Reset) { // Lap off clicked
   StartClicked.DisplayTimer = setInterval(function(){UpdateReadout(true)},50);
   document.getElementById("SWReset").innerHTML = "Lap";
   $('#SWReset').button('refresh');
   ResetClicked.Reset = 'Lap';
  }
  else if ('Reset' === ResetClicked.Reset) { // Reset clicked
   StartClicked.ElapsedTime = 0;
   ResetClicked.LapList = '';
   document.getElementById("LapList").innerHTML = '';
   document.getElementById("SWReadout").innerHTML = "00:00:00.0";
   $('#SWReset').button('disable');
   $('#SWReset').button('refresh');
   ResetClicked.Reset = 'Lap';
  }
}

function UpdateReadout(bRunning) {
 var nElapsed = 0;
 if (bRunning) {
  nElapsed = new Date().valueOf() - StartClicked.StartTime;
  document.getElementById("SWReadout").innerHTML = MS2HMST(nElapsed);
 }
 else {
  nElapsed = StartClicked.EndTime - StartClicked.StartTime;
  document.getElementById("SWReadout").innerHTML = MS2HMST(nElapsed);
 }
}

function MS2HMST(nMS) {
 var milliseconds = parseInt((nMS%1000)/100)
  , seconds = parseInt((nMS/1000)%60)
  , minutes = parseInt((nMS/(1000*60))%60)
  , hours = parseInt((nMS/(1000*60*60))%24);
 hours = (hours < 10) ? "0" + hours : hours;
 minutes = (minutes < 10) ? "0" + minutes : minutes;
 seconds = (seconds < 10) ? "0" + seconds : seconds;
 return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
// End of StopWatch Functions

// Start of CPI Functions
function UpdateBP() {
  var nDifference = 0;
  var sStartingValue = 0;
  // Last year is 2014
  var nThisYear = '2014';
  var aCPIYears = new Array("1.010101010", "1.010000000", // 1913
  "1.079207921", "1.174311927", "1.179687500", "1.145695364", "1.156069364", // 1915
  "0.895000000", "0.938547486", "1.017857143", "1.000000000", "1.023391813", // 1920
  "1.011428571", "0.983050847", "0.982758621", "1.000000000", "0.976608187", // 1925
  "0.910179641", "0.901315789", "0.948905109", "1.030769231", "1.022388060", // 1930
  "1.014598540", "1.035971223", "0.979166667", "0.985815603", "1.007194245",
  "1.050000000", "1.108843537", "1.061349693", "1.017341040", "1.022727273",
  "1.083333333", "1.143589744", "1.080717489", "0.987551867", "1.012605042",
  "1.078838174", "1.019230769", "1.007547170", "1.007490637", "0.996282528",
  "1.014925373", "1.033088235", "1.028469751", "1.006920415", "1.017182131",
  "1.010135135", "1.010033445", "1.013245033", "1.013071895", "1.016129032",
  "1.028571429", "1.030864198", "1.041916168", "1.054597701", "1.057220708",
  "1.043814433", "1.032098765", "1.062200957", "1.110360360", "1.091277890",
  "1.057620818", "1.065026362", "1.075907591", "1.113496933", "1.134986226",
  "1.103155340", "1.061606161", "1.032124352", "1.043172691", "1.035611165",
  "1.018587361", "1.036496350", "1.041373239", "1.048182587", "1.054032258",
  "1.042081102", "1.030102790", "1.029935852", "1.025605536", "1.028340081",
  "1.029527559", "1.022944551", "1.015576324", "1.022085890", "1.033613445",
  "1.028455285", "1.015810277", "1.022790439", "1.026630435", "1.033880360",
  "1.032258065", "1.028482143", "1.038395501", "0.996442223", "1.016402765", // 2005
  "1.031565286", "1.020694499", "1.014647595", "1.021218508" // 2010
  );
  
  var nYearOffset = nThisYear - aCPIYears.length;
  document.getElementById('CPIStartingAmount').value = document.getElementById('CPIStartingAmount').value.replace("$", "");
  if (document.getElementById('CPIStartYear').value == document.getElementById('CPIEndYear').value) {
    var sSameValue = document.getElementById('CPIStartingAmount').value;
    document.getElementById('CPIResultAmount').innerHTML = '$' + sSameValue;
  }
  else if (document.getElementById('CPIStartYear').value > document.getElementById('CPIEndYear').value) {
    nDifference = document.getElementById('CPIStartYear').value - document.getElementById('CPIEndYear').value;
    sStartingValue = document.getElementById('CPIStartingAmount').value;
    var sEndYear = document.getElementById('CPIEndYear').value - nYearOffset;
    for (x=sEndYear; x<nDifference + sEndYear; x++)
      sStartingValue /= aCPIYears[x];
    document.getElementById('CPIResultAmount').innerHTML = '$' + roundNumber(sStartingValue, 2).toFixed(2);
  }
  else if (document.getElementById('CPIStartYear').value < document.getElementById('CPIEndYear').value) {
    nDifference = document.getElementById('CPIEndYear').value - document.getElementById('CPIStartYear').value;
    sStartingValue = document.getElementById('CPIStartingAmount').value;
    var sStartingYear = document.getElementById('CPIStartYear').value - nYearOffset;
    for (x=sStartingYear; x<nDifference + sStartingYear; x++)
      sStartingValue *= aCPIYears[x];
    document.getElementById('CPIResultAmount').innerHTML = '$' + roundNumber(sStartingValue, 2).toFixed(2);
  }
  if (document.getElementById('CPIEndYear').value == nThisYear)
    document.getElementById('CPITransLine').innerHTML = 'has the same buying power in';
  else
    document.getElementById('CPITransLine').innerHTML = 'had the same buying power in';
  
  document.getElementById('CPIStartingAmount').value = "$" + document.getElementById('CPIStartingAmount').value;
}

// End of CPI Functions

// Start of FV Functions
function ChangeFVCalc() {
  ChangeFVCalc.sFVCalcType = document.getElementById('FVCalcType').value;
  
  if ('Find Future Value' == ChangeFVCalc.sFVCalcType) {
    document.getElementById('FVFutureValue').readOnly = true;
    document.getElementById('FVPresentValue').readOnly = false;
    document.getElementById('FVNumOfPeriods').readOnly = false;
    document.getElementById('FVFutureValue').style.backgroundColor = '#f1f1f1';
    document.getElementById('FVPresentValue').value = UpdateFV.sPresentValue;
    document.getElementById('FVPresentValue').style.backgroundColor = 'white';
    document.getElementById('FVNumOfPeriods').value = UpdateFV.sNumOfPeriods;
    document.getElementById('FVNumOfPeriods').style.backgroundColor = 'white';
    $('#FVRate').slider("enable");
    document.getElementById('FVRate').style.display = 'inline';
  }
  else if ('Find Present Value' == ChangeFVCalc.sFVCalcType) {
    document.getElementById('FVFutureValue').readOnly = false;
    document.getElementById('FVPresentValue').readOnly = true;
    document.getElementById('FVNumOfPeriods').readOnly = false;
    document.getElementById('FVFutureValue').value = UpdateFV.sFutureValue;
    document.getElementById('FVFutureValue').style.backgroundColor = 'white';
    document.getElementById('FVFutureValue').style.borderStyle = 'inset';
    document.getElementById('FVPresentValue').style.backgroundColor = '#f1f1f1';
    document.getElementById('FVNumOfPeriods').value = UpdateFV.sNumOfPeriods;
    document.getElementById('FVNumOfPeriods').style.backgroundColor = 'white';
    $('#FVRate').slider("enable");
    document.getElementById('FVRate').style.display = 'inline';
  }
  else if ('Find Rate' == ChangeFVCalc.sFVCalcType) {
    document.getElementById('FVFutureValue').readOnly = false;
    document.getElementById('FVPresentValue').readOnly = false;
    document.getElementById('FVNumOfPeriods').readOnly = false;
    document.getElementById('FVFutureValue').value = UpdateFV.sFutureValue;
    document.getElementById('FVFutureValue').style.backgroundColor = 'white';
    document.getElementById('FVFutureValue').style.borderStyle = 'inset';
    document.getElementById('FVPresentValue').value = UpdateFV.sPresentValue;
    document.getElementById('FVPresentValue').style.backgroundColor = 'white';
    document.getElementById('FVNumOfPeriods').value = UpdateFV.sNumOfPeriods;
    document.getElementById('FVNumOfPeriods').style.backgroundColor = 'white';
    document.getElementById('FVRate').style.display = 'none';
    $('#FVRate').slider("disable");
  }
  else if ('Find Number of Periods' == ChangeFVCalc.sFVCalcType) {
    document.getElementById('FVFutureValue').readOnly = false;
    document.getElementById('FVPresentValue').readOnly = false;
    document.getElementById('FVNumOfPeriods').readOnly = true;
    document.getElementById('FVFutureValue').value = UpdateFV.sFutureValue;
    document.getElementById('FVFutureValue').style.backgroundColor = 'white';
    document.getElementById('FVFutureValue').style.borderStyle = 'inset';
    document.getElementById('FVPresentValue').value = UpdateFV.sPresentValue;
    document.getElementById('FVPresentValue').style.backgroundColor = 'white';
    document.getElementById('FVNumOfPeriods').style.backgroundColor = '#f1f1f1';
    $('#FVRate').slider("enable");
    document.getElementById('FVRate').style.display = 'inline';
  }
  UpdateFV();
}

function UpdateFV() {
  document.getElementById('FVRateLable').innerHTML = document.getElementById('FVRate').value + '%';
  if (typeof ChangeFVCalc.sFVCalcType == 'undefined')
    ChangeFVCalc.sFVCalcType = document.getElementById('FVCalcType').value;
  if ('Find Future Value' == ChangeFVCalc.sFVCalcType) {
    UpdateFV.sPresentValue = document.getElementById('FVPresentValue').value;
    UpdateFV.sNumOfPeriods = document.getElementById('FVNumOfPeriods').value;
    UpdateFV.sRate = document.getElementById('FVRate').value;
    UpdateFV.sFutureValue = FV(UpdateFV.sPresentValue, UpdateFV.sNumOfPeriods, UpdateFV.sRate);
    UpdateFV.sFutureValue = roundNumber(UpdateFV.sFutureValue, 2);
    UpdateFV.sFutureValue = UpdateFV.sFutureValue.toFixed(2);
    document.getElementById('FVFutureValue').value = 'Future Value is ' + UpdateFV.sFutureValue;
  }
  else if ('Find Present Value' == ChangeFVCalc.sFVCalcType) {
    UpdateFV.sNumOfPeriods = document.getElementById('FVNumOfPeriods').value;
    UpdateFV.sRate = document.getElementById('FVRate').value;
    UpdateFV.sFutureValue = document.getElementById('FVFutureValue').value;
    UpdateFV.sPresentValue = PV(UpdateFV.sFutureValue, UpdateFV.sNumOfPeriods, UpdateFV.sRate);
    UpdateFV.sPresentValue = roundNumber(UpdateFV.sPresentValue, 2);
    UpdateFV.sPresentValue = UpdateFV.sPresentValue.toFixed(2);
    document.getElementById('FVPresentValue').value = 'Present Value is ' + UpdateFV.sPresentValue;
  }
  else if ('Find Rate' == ChangeFVCalc.sFVCalcType) {
    UpdateFV.sNumOfPeriods = document.getElementById('FVNumOfPeriods').value;
    UpdateFV.sPresentValue = document.getElementById('FVPresentValue').value;
    UpdateFV.sFutureValue = document.getElementById('FVFutureValue').value;
    UpdateFV.sRate = Rate(UpdateFV.sPresentValue, UpdateFV.sFutureValue, UpdateFV.sNumOfPeriods);
    UpdateFV.sRate = roundNumber(UpdateFV.sRate, 5);
    UpdateFV.sRate = UpdateFV.sRate.toFixed(5);
    document.getElementById('FVRateLable').innerHTML = 'Rate is ' + (UpdateFV.sRate * 100) + '%';
    document.getElementById('FVRate').value = UpdateFV.sRate * 100;
  }
  else if ('Find Number of Periods' == ChangeFVCalc.sFVCalcType) {
    UpdateFV.sPresentValue = document.getElementById('FVPresentValue').value;
    UpdateFV.sRate = document.getElementById('FVRate').value;
    UpdateFV.sFutureValue = document.getElementById('FVFutureValue').value;
    UpdateFV.sNumOfPeriods = NPer(UpdateFV.sPresentValue, UpdateFV.sFutureValue, UpdateFV.sRate);
    UpdateFV.sNumOfPeriods = roundNumber(UpdateFV.sNumOfPeriods, 5);
    UpdateFV.sNumOfPeriods = UpdateFV.sNumOfPeriods.toFixed(5);
    document.getElementById('FVNumOfPeriods').value = 'Number of Periods: ' + UpdateFV.sNumOfPeriods;
  }
}

function FV (PV, n, r) {
  return PV*Math.pow(1+r/100, n);
}

function PV (FV, n, r) {
  return FV*(1/Math.pow(1+r/100, n));
}

function Rate (PV, FV, n) {
  return Math.pow((FV/PV), 1/n) - 1;
}

function NPer (PV, FV, r) {
  return Math.log(FV/PV)/Math.log(1+(r/100));
}

// End of FV Functions

// Start of Tip Functions
function UpdateTip() {
  document.getElementById('TipPercentageLable').innerHTML = document.getElementById('TipPercentage').value + '%';
  var sTipBill = document.getElementById('TipBill').value;
  var sTipPercentage = document.getElementById('TipPercentage').value/100;
  var sTip = Number(sTipBill) * Number(sTipPercentage);
  var sTipTotal = Number(sTipBill) + Number(sTip);
  if (document.getElementById('TipRound').checked) {
    var sTipTotalRndUp = Number(sTipTotal) + 1;
    var sExtra = Number(sTipTotalRndUp.toFixed(0)) - Number(sTipTotal);
    if (sExtra > 0.99)
      sExtra -= 1;
    sTip += sExtra;
    sTipTotal = Number(sTipBill) + Number(sTip);
  }
  
  document.getElementById('TipTip').innerHTML = 'Tip = $' + sTip.toFixed(2);
  document.getElementById('TipTotal').innerHTML = 'Total = $' + sTipTotal.toFixed(2);
}

// End of Tip Functions
