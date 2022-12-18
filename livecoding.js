//Convert full names to intials with a period in between

function abbrevName(name) {
  let array = name.split(" ");
  let firstName = array[0];
  let lastName = array[1];
  let firstInitial = firstName.charAt(0).toUpperCase();
  let lastInitial = lastName.charAt(0).toUpperCase();
  return `${firstInitial}.${lastInitial}`;
}

abbrevName("Sam Harris");
