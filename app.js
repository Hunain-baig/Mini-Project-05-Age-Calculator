function calculateAge() {
  let birthdate = new Date(document.getElementById("date").value);

  let ageInMs = Date.now() - birthdate.getTime();
  let ageDate = new Date(ageInMs);
  let age = Math.abs(ageDate.getUTCFullYear() - 1970);
  let month = ageDate.getUTCMonth();
  let day = ageDate.getUTCDate() - 1;

  let ageString = age;
  let monthString = month;
  let dayString = day;

  if (age < 10) {
    ageString = "0" + ageString;
  }
  if (month < 10) {
    monthString = "0" + monthString;
  }
  if (day < 10) {
    dayString = "0" + dayString;
  }

  document.getElementById("year").innerHTML = ageString;
  document.getElementById("month").innerHTML = monthString;
  document.getElementById("day").innerHTML = dayString;
}
