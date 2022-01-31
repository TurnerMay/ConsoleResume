let myName = "Turner May";

let myCareer = "Full Time Student";

let myDescription = "El queso es viejo y petrido. Donde esta el sanitarios?";

let myInterests = ["Music", "Food", "Movies", "My dog"];

let myPastPositions = [
  {
    companyName: "* La Paz",
    Title: "General Manager",
    Description:
      "Oversaw all function of the restaurant in both front and back of houses.",
  },

  {
    companyName: "* Saw's Juke Joint",
    Title: "Bartender",
    Description: "Keeping fights from breaking out in the front row.",
  },

  {
    companyName: "* Allstate",
    Title: "Licensed Sales Producer",
    Description: "Preventing myself from dying of boredom.",
  },
];

let mySkills = [
  { skill: "Bartending", bam: true },
  { skill: "Customer Service", bam: false },
  { skill: "Management", bam: false },
  { skill: "Getting people wasted", bam: true },
];

console.log("Name:", myName.toUpperCase());
console.log("Career:", myCareer);
console.log("Description:", myDescription);
console.log("");
console.log("My Interests:");
console.log("* " + myInterests[0]);
console.log("* " + myInterests[1]);
console.log("* " + myInterests[2]);
console.log("* " + myInterests[3]);
console.log("");
console.log("My Previous Experience:");

function displayPosition(companyName, Title, Description) {
  console.log(companyName + ": " + Title + "- " + Description);
}

displayPosition(
  myPastPositions[0].companyName,
  myPastPositions[0].Title,
  myPastPositions[0].Description
);

displayPosition(
  myPastPositions[1].companyName,
  myPastPositions[1].Title,
  myPastPositions[1].Description
);

displayPosition(
  myPastPositions[2].companyName,
  myPastPositions[2].Title,
  myPastPositions[2].Description
);

console.log("");                            

function displaySkill(mySkills, bam) {
  if (bam == true) console.log("* Bam: " + mySkills);
  else if (bam == false) console.log("* " + mySkills);
}

displaySkill(mySkills[0].skill, mySkills[0].bam);
displaySkill(mySkills[1].skill, mySkills[1].bam);
displaySkill(mySkills[2].skill, mySkills[2].bam);
displaySkill(mySkills[3].skill, mySkills[3].bam);
