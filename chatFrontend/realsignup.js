function saveLogin(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  const obj = {
    name,
    email,
    password,
  };

  console.log(obj, "frontend");
}
