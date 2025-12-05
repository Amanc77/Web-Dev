function handlsubmint() {
  console.log("handel submit clicked ");
  let name1 = document.querySelector(".name") as HTMLInputElement;

  let email = document.querySelector(".email") as HTMLInputElement;

  console.log(
    "name is ",
    name1.value.toUpperCase(),
    " and  email is ",
    email.value
  );
}
