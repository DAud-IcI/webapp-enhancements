"use strict";function getTimeFieldValue(b){return b.fields.resolutiondate}function getTimeField(b){return new Date(getTimeFieldValue(b)).getTime()}function getResolvedByDate(){var a=prompt("Enter min date. (resolved >= minDate)"),b=prompt("Enter max date. (resolved < maxDate)"),c="/rest/api/2/search?filter=-4&jql=assignee in (currentUser()) AND status %3D Resolved AND "+"resolved >= \"".concat(a,"\" AND resolved < \"").concat(b,"\" order by resolutiondate DESC");console.log(c),fetch(c).then(function(a){return a.json()}).then(function(a){var b=a.issues.sort(function(c,a){return getTimeField(c)-getTimeField(a)}),c=b.map(function(a){return a.key+": "+a.fields.summary+" ("+a.fields.customfield_10025+")"}),d=a.issues.map(function(a){return a.fields.customfield_10025}).reduce(function(c,a){return c+a},0),e=[c.join("\n"),"Total: "+d,"Date Range: "+getTimeFieldValue(b[0])+" - "+getTimeFieldValue(b[b.length-1])].join("\n\n\n"),f=document.createElement("pre");document.body.appendChild(f),f.innerHTML=e,f.style.display="block",f.style.position="fixed",f.style.width="100vw",f.style.height="100vh",f.style.top=0,f.style.left=0,f.style.zIndex=99999,f.style.background="white";var g=document.createElement("button");g.innerHTML="Close",g.style.display="block",g.onclick=function(){return f.parentElement.removeChild(f)},f.appendChild(g)})}getResolvedByDate();