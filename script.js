const nameInput = document.getElementById("nameInput");
const dobInput = document.getElementById("dobInput");
const generateBtn = document.getElementById("generateBtn");
const hobbiesInput = document.getElementById("hobbiesInput");
const phoneInput = document.getElementById("phoneInput");


const values = document.querySelectorAll(".card .value");


function formatDob(dobStr) {
  if (!dobStr) return "—";
  const date = new Date(dobStr);
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatHobbies(h) {
  if (!h.trim()) return "—";
  return h
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean)
    .join(", ");
}

generateBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const dob = dobInput.value; 
  const hobbies = hobbiesInput.value;
  const phone = phoneInput.value.trim();

  if (!name) {
    alert("Please enter your name.");
    nameInput.focus();
    return;
  }

  
  values[0].textContent = name;
  values[1].textContent = formatDob(dob);
  values[2].textContent = formatHobbies(hobbies);
  values[3].textContent = phone || "—";
});