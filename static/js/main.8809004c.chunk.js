(this.webpackJsonpbirthday_helper=this.webpackJsonpbirthday_helper||[]).push([[0],{12:function(e,t,a){e.exports=a(23)},17:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),i=a(2),c=(a(17),a(8)),s=a(4),m=function(e){var t=Object(n.useRef)();return r.a.createElement("form",{ref:t,onSubmit:function(a){a.preventDefault(),"Select your team"===e.teamName?alert("Please choose your team's name from the list.\n\nIf your team is not on the list, contact Steven in QA about getting your team set up to use this tool. Thank you!"):"Select one"===e.occasion?alert("Please select either Birthday or Fetchiversary for the Occasion field."):window.confirm("Are you sure you want to send this eCard to your team for signing?")?"QA"===e.teamName?s.a.sendForm("service_m8joa5x","qa_bday_fetchiversary",t.current,"user_xVl1ngq3WZGS7s1PEVLcD").then((function(e){console.log(e.text),alert("Yay! Your eCard has been sent out to the QA team for signing.")}),(function(e){console.log(e.text),alert("Oh no! We were not able to successfuly send your eCard. Please reach out to Steven in QA for troubleshooting.\nBe sure to bring a copy of this error message: ".concat(e.text))})):"Fraud"===e.teamName?s.a.sendForm("service_nwdrjd8","template_fpj7t9h",t.current,"user_MprloyfAX6KHYk5heeHq8").then((function(e){console.log(e.text),alert("Yay! Your eCard has been sent out to the Fraud team for signing.")}),(function(e){console.log(e.text),alert("Oh no! We were not able to successfuly send your eCard. Please reach out to Steven in QA for troubleshooting.\nBe sure to bring a copy of this error message: ".concat(e.text))})):"Data Integrity"===e.teamName?s.a.sendForm("service_nsizf8t","template_iepf23n",t.current,"user_sS2mN5EUqz6iKBjdnGSBi").then((function(e){console.log(e.text),alert("Yay! Your eCard has been sent out to the Data Integrity team for signing.")}),(function(e){console.log(e.text),alert("Oh no! We were not able to successfuly send your eCard. Please reach out to Steven in QA for troubleshooting.\nBe sure to bring a copy of this error message: ".concat(e.text))})):"Support"===e.teamName&&s.a.sendForm("service_mda3oke","template_hlckzb8",t.current,"user_oqkBjOxwvA4tNkKYqrvia").then((function(e){console.log(e.text),alert("Yay! Your eCard has been sent out to the Support team for signing.")}),(function(e){console.log(e.text),alert("Oh no! We were not able to successfuly send your eCard. Please reach out to Steven in QA for troubleshooting.\nBe sure to bring a copy of this error message: ".concat(e.text))})):alert("Your eCard has not been sent. Please ensure you have filled out the form completely with valid data.")},id:"email-form"},r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",null,"Team"),r.a.createElement("select",{type:"text",name:"teamName",id:"teamName",onChange:e.updateTeamName,className:"input-text editableFields"},r.a.createElement("option",null,"Select your team"),r.a.createElement("option",null,"QA"),r.a.createElement("option",null,"Fraud"),r.a.createElement("option",null,"Data Integrity"),r.a.createElement("option",null,"Support"))),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",name:"first_name",value:e.firstName,className:"input-text",required:!0,readOnly:!0})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",name:"last_name",value:e.lastName,className:"input-text",required:!0,readOnly:!0})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",null,"Occasion"),r.a.createElement("select",{type:"text",name:"occasion",id:"occasion",onChange:e.updateOccasionDate,className:"input-text editableFields"},r.a.createElement("option",null,"Select one"),r.a.createElement("option",null,"Birthday"),r.a.createElement("option",null,"Fetchiversary"))),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",null,"Occasion Date"),r.a.createElement("input",{type:"text",name:"occasion_date",value:e.occasionDate,className:"input-text",required:!0,readOnly:!0})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",null,"List of Recipients"),r.a.createElement("input",{type:"text",name:"mailing_list",value:e.mailingList,className:"input-text",required:!0,readOnly:!0})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",null,"eCard URL"),r.a.createElement("input",{type:"text",name:"ecard_url",id:"ecardUrl",className:"input-text editableFields",required:!0})),r.a.createElement("input",{type:"submit",value:"Send",id:"submit-btn"}))},u=a(9),d=a.n(u),h=a(10),y=a(11);var p=function(){var e=Object(n.useState)(c),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),s=Object(i.a)(o,2),u=s[0],p=s[1],f=Object(n.useState)(""),b=Object(i.a)(f,2),E=b[0],g=b[1],v=Object(n.useState)(""),N=Object(i.a)(v,2),O=N[0],S=N[1],C=Object(n.useState)(""),k=Object(i.a)(C,2),j=k[0],x=k[1],F=Object(n.useState)(""),B=Object(i.a)(F,2),w=B[0],_=B[1],D=Object(n.useState)(""),I=Object(i.a)(D,2),P=I[0],T=I[1],A=Object(n.useState)(""),q=Object(i.a)(A,2),U=q[0],Y=q[1],Q=Object(n.useState)(""),R=Object(i.a)(Q,2),L=R[0],M=R[1],H=Object(n.useState)("Select one"),J=Object(i.a)(H,2),W=J[0],z=J[1],V=Object(n.useState)(""),K=Object(i.a)(V,2),G=K[0],X=K[1],Z=Object(n.useState)("Select your team"),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ae=function(e,t){var a=e.data.map((function(e){return{name:e.name,email:e.email,birthday:e.birthday,fetchiversary:e.fetchiversary}}));l(a)},ne=Object(n.useCallback)((function(){"Birthday"===document.getElementById("occasion").value?(z("Birthday"),M(P)):"Fetchiversary"===document.getElementById("occasion").value?(z("Fetchiversary"),M(U)):(z("Select one"),M("Select an occasion"))}),[P,U]),re=Object(n.useCallback)((function(){E.name?(S(E?E.name.split(" ")[0]:"First name not found"),x(E?E.name.split(" ")[1]:"Last name not found"),_(E?E.email:"Email not found"),T(E?E.birthday:"Birthday not found"),Y(E?E.fetchiversary:"Fetchiversary not found")):console.log("Birthday person data cannot be updated")}),[E]),le=Object(n.useCallback)((function(){if(E.name){var e=a.map((function(e){return e.name!==E.name.trim()&&r.a.createElement("li",{key:"".concat(e.email)},e.email)}));p(e)}else console.log("Recipients cannot be updated")}),[E,a]),oe=Object(n.useCallback)((function(){if(E.name){var e=a.map((function(e){return e.name!==E.name.trim()&&e.email})).filter((function(e){return!1!==e}));X(e.join(","))}else console.log("Mailing list cannot be updated")}),[E,a]),ie=a.map((function(e){return r.a.createElement("li",{key:"".concat(e.name)},r.a.createElement("strong",null,e.name)," (",e.email,")")})),ce=a.map((function(e){return{name:e.name,birthday:e.birthday}})).sort((function(e,t){return new Date(e.birthday)-new Date(t.birthday)})).map((function(e){return""===e.birthday?r.a.createElement("li",{key:"".concat(e.bithday),style:{color:"red"}},r.a.createElement("strong",null,e.name)):r.a.createElement("li",{key:"".concat(e.birthday)},e.birthday," (",e.name,")")})),se=a.map((function(e){return{name:e.name,fetchiversary:e.fetchiversary}})).sort((function(e,t){return new Date(e.fetchiversary)-new Date(t.fetchiversary)})).map((function(e){return""===e.fetchiversary?r.a.createElement("li",{key:"".concat(e.fetchiversary),style:{color:"red"}},r.a.createElement("strong",null,e.name)):r.a.createElement("li",{key:"".concat(e.fetchiversary)},e.fetchiversary," (",e.name,")")})),me=0===u.length?r.a.createElement("ol",null,r.a.createElement("li",{key:"manual-step1"},"Enter the first and last name of the Birthday/Fetchiversary Person in the field above"),r.a.createElement("li",{key:"manual-step2"},"Click Update, and you should see the mailing list appear in this container (excluding the Birthday/Fetchiversary Person)")):r.a.createElement("ul",{className:"ul-data"},u);return Object(n.useEffect)((function(){re(),le(),ne(),oe()}),[re,le,ne,oe]),r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"birthday cake emoji"},"\ud83c\udf82")," Birthday Helper ",r.a.createElement("span",{role:"img","aria-label":"envelope emoji"},"\u2709\ufe0f")),r.a.createElement("p",null,"Automating the mental overhead of doing birthday e-cards for your team ",r.a.createElement("span",{role:"img","aria-label":"party popper emoji"},"\ud83c\udf89"))),r.a.createElement("section",{className:"container-getting-started"},r.a.createElement("h2",null,"How to Use this Tool"),r.a.createElement("p",null,"Make a copy of this spreadsheet and fill in your team's data: ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://docs.google.com/spreadsheets/d/1yZ-axvE-6IDCDqpLvmusmzHKMbFHzRTKi_DXhtjjkOc/edit#gid=0"},"Team Data Template")),r.a.createElement("p",null,"Please stick to the formatting choices on the spreadsheet to ensure your data is uploaded properly to the tool later on (date, capitalization, etc.)"),r.a.createElement("ol",null,r.a.createElement("li",{key:"step1"},"Download your spreadsheet from Google Sheets as a CSV file"),r.a.createElement("li",{key:"step2"},"Upload the CSV file using the ",r.a.createElement("strong",null,"Choose File")," button"),r.a.createElement("li",{key:"step3"},"Enter the name of the team member (first and last) to whom you're sending the eCard"),r.a.createElement("li",{key:"step4"},"Click the ",r.a.createElement("strong",null,"Update")," button"),r.a.createElement("li",{key:"step5"},"Create the eCard on a platform of your choosing. We recommend ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://sendwishonline.com/en/group-cards/category"},"SendWishOnline")),r.a.createElement("li",{key:"step6"},"Copy the shareable link for the eCard you created, so you can distribute it to other team members for signing"),r.a.createElement("li",{key:"step7"},"Fill out the rest of the form, ensuring you choose the correct ",r.a.createElement("strong",null,"Team")," and ",r.a.createElement("strong",null,"Occasion")),r.a.createElement("ul",null,r.a.createElement("li",{key:"step7a"},"If you don't see your team name, ask Steven in QA to get you set up with a free account for sending templated emails")),r.a.createElement("li",{key:"step8"},"Click ",r.a.createElement("strong",null,"Send")," to distribute your eCard to the team for signing. Give the team enough time to sign it before it arrives in your team member's inbox!"))),r.a.createElement("section",{className:"birthdayPersonInput"},r.a.createElement("div",{className:"container-file"},r.a.createElement("label",{className:"label-file",htmlFor:"file",onClick:function(){alert("\n      Your CSV should have this format:\n\n\n      Row 1 -> name, email, birthday, fetchiversary\n\n      Row 2 -> Test User1, test1@user.com, January 1, January 10\n\n      Row 3 -> Test User2, test2@user.com, February 2, February 20\n\n      Row 4 -> Test User3, test3@user.com, March 3, March 30\n\n      etc.")}},"Upload your CSV of names, emails, and birthdays:"),r.a.createElement("input",{type:"file",accept:".csv",multiple:!1,onChange:function(e){e.target.files&&e.target.files.length>0?d.a.parse(e.target.files[0],{header:!0,complete:function(e,t){return ae(e,t)},error:function(e){console.log("Parsing has failed unexpectedly:",e)}}):alert("File selection was not successful. Please reload the page and try again.")},name:"file",id:"file",className:"input-file"})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"birthdayPerson"},"Birthday/Fetchiversary Person"),r.a.createElement("input",{type:"text",name:"birthdayPerson",className:"input-text editableFields",id:"nameInput"}),r.a.createElement("button",{onClick:function(){void 0!==a.find((function(e){return e.name===document.getElementById("nameInput").value}))?g(a.find((function(e){return e.name===document.getElementById("nameInput").value}))):(g(""),console.log("Birthday person could not be found"))}},"Update")),r.a.createElement("p",{id:"advisory"},"Schedule the eCard to be sent to",r.a.createElement("strong",{className:"recipientEmail",onClick:function(){var e=document.getElementById("emailText").innerHTML;navigator.clipboard.writeText(e).then((function(){return alert("\u2705 Email copied\n".concat(e))}))}},r.a.createElement("span",{id:"emailText"},w||"Birthday/Fetchiversary Person's Email"),r.a.createElement("span",null," "),r.a.createElement(h.a,{icon:y.a})),"on their birthday/Fetchiversary.",r.a.createElement("br",null),r.a.createElement("br",null),"Do ",r.a.createElement("strong",null,"not")," include their email in the ",r.a.createElement("strong",null,"List of Recipients")," below."),r.a.createElement(m,{teamName:ee,updateTeamName:function(){"QA"===document.getElementById("teamName").value?te("QA"):"Fraud"===document.getElementById("teamName").value?te("Fraud"):"Data Integrity"===document.getElementById("teamName").value?te("Data Integrity"):te("Select your team")},firstName:O,lastName:j,occasion:W,occasionDate:L,updateOccasionDate:ne,mailingList:G}),r.a.createElement("div",{className:"container-data"},r.a.createElement("section",{className:"column"},r.a.createElement("h3",null,"Birthdays"),r.a.createElement("ul",{className:"ul-data"},ce)),r.a.createElement("section",{className:"column"},r.a.createElement("h3",null,"Fetchiversaries"),r.a.createElement("ul",{className:"ul-data"},se)),r.a.createElement("section",{className:"column"},r.a.createElement("h3",null,"Names"),r.a.createElement("ul",{className:"ul-data"},ie)),r.a.createElement("section",{className:"column"},r.a.createElement("h3",null,"Recipients"),me)))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"name":"Test Person1","email":"test1@user.com","birthday":"January 1","fetchiversary":"January 10"},{"name":"Test Person2","email":"test2@user.com","birthday":"February 2","fetchiversary":"February 20"},{"name":"Test Person3","email":"test3@user.com","birthday":"March 3","fetchiversary":"March 30"}]')}},[[12,1,2]]]);
//# sourceMappingURL=main.8809004c.chunk.js.map