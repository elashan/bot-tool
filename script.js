// JavaScript to handle button clicks and navigation

// Get references to the buttons
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

// Define the URLs you want to link to
const url1 = "https://mytime-lite.aka.corp.amazon.com/wfcstatic/applications/navigator/html5/dist/container/index.html?version=8.1.7.1380#/";
const url2 = "https://timesheet.eink.amazon.dev/timesheet/dashboard";
const url3 = "https://drive.corp.amazon.com/folders/Eink%20Functional%20Team_Regression%20Log/July_2023";
const url4 = "https://quip-amazon.com/wSmlANtVPIUt/QS-Team-Daily-activity-Monitoring-tracker#temp:C:cIH61ee24854c5f4c2d8a270bb97";
// Add click event listeners to the buttons
button1.addEventListener("click", () => {
    window.location.href = url1;
});

button2.addEventListener("click", () => {
    window.location.href = url2;
});

button3.addEventListener("click", () => {
    window.location.href = url3;
});

button4.addEventListener("click", () => {
    window.location.href = url4;
});
