function calculateAge(monthEl, dayEl, yearEl, array) {
  // Get user input
  const birthdate = new Date(yearEl, monthEl - 1, dayEl); // Oy va kunni to'g'ri tuzatish
  const now = new Date();

  // Validate input
  if (birthdate > now) {
    console.log("Birthdate cannot be in the future.");
    return;
  }

  // Calculate age
  const ageInMilliseconds = now - birthdate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;

  const years = Math.floor(ageInDays / 365);
  const remainingDays = Math.floor(ageInDays % 365);
  const months = Math.floor(remainingDays / 30);
  const days = remainingDays % 30;

  // Display the result

  const datas = [years, months, days]
  for (let i = 0; i < array.length; i++) {
    array[i].innerHTML = datas[i]
  }
}

export default calculateAge;
