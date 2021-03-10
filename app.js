var i = 1;

const schedule = data;

const accessCode = "ssc21";

const dateObj = new Date;
const dateArr = dateObj.toString().split(" ");
const day = dateArr[0];
const month = dateArr[1];
const date = dateArr[2];
const combination = month + date;

const accessInput = document.forms["accessForm"]["accessCode"];
const table = document.getElementById("table");

function validateAccess() {
	if(accessInput.value == accessCode) {
			document.getElementById("stopper").style = "opacity: 0; pointer-events: none;";
			localStorage.setItem("abledToAccess", "yes");
	}else {
		accessInput.value = "";
			document.getElementById("alert").innerHTML = "Access Denied!";
	}
	return false;
}

function zfill(n) {
	if(n < 10) return "0" + n;
	return n.toString();
}

document.getElementById("date").innerHTML = month + " " + date + ", 2021, " + day;
table.innerHTML += `
	<thead>
		<tr>
			<th class="no">No.</th>
			<th>Estimated Date</th>
			<th>Class / Prep</th>
			<th>Exam</th>
		</tr>
	</thead>
	<tbody>`;
schedule.forEach(data => {
	if(data[0] == combination) {
		document.getElementById("prep").innerHTML = data[1];
		document.getElementById("exam").innerHTML = data[2];
	}
	
	var schDateArr = data[0].split("");
	var schDate = schDateArr[0] + schDateArr[1] + schDateArr[2] + " " + schDateArr[3] + schDateArr[4]
	table.innerHTML += `
		<tr>
			<td>${zfill(i)}.</td>
			<td>${schDate}</td>
			<td>${data[1].split("-").join(" ")}</td>
			<td>${data[2].split("-").join(" ")}</td>
		</tr>`;
		i++;
});
table.innerHTML += `	</tbody>`;

setInterval(() => {
	var currentTime = new Date();
		document.getElementById("time1").innerHTML = currentTime.toString().split(" ")[4];
		document.getElementById("time2").innerHTML = currentTime.toString().split(" ")[4];
	}, 500);


if(localStorage.getItem("abledToAccess") == "yes") {
		document.getElementById("stopper").style = "display: none;";
}

window.addEventListener("load", () => {
	document.getElementById("loader").style = "opacity: 0; pointer-events: none;";
});