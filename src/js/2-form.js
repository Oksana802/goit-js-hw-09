console.log("Form");

let formData = {
  email: "",
  message: ""
};

document.body.insertAdjacentHTML('beforeend', `
  <form class="feedback-form" autocomplete="off">
    <label>
      Email
      <input type="email" name="email" autofocus />
    </label>
    <label>
      Message
      <textarea name="message" rows="8"></textarea>
    </label>
    <button type="submit">Submit</button>
  </form>
`);

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;
const localStorageKey = "feedback-form-state";



const formButton = document.querySelector('button');
const labelList = document.querySelectorAll('label');
const inputOne = document.querySelector('input');
const textareaOne = document.querySelector('textarea')
const boxLabel = document.createElement('div');


labelList.forEach(labelEl => {
    boxLabel.append(labelEl);
});

form.insertAdjacentElement("afterbegin", boxLabel);
boxLabel.classList.add('label-box');

labelList.forEach(labelEl => {
    labelEl.classList.add('label-element');
});
inputOne.classList.add('input-element');
textareaOne.classList.add('textarea-element');

formButton.classList.add('btn-form');
formButton.innerHTML = 'Log in';


const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
  formData = JSON.parse(savedData);
  emailInput.value = formData.email;
  messageTextarea.value = formData.message;
}

form.addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


form.addEventListener("submit", (event) => {
  event.preventDefault();
    if (!formData.email || !formData.message) {
    return alert("Fill please all fields");
  }
  console.log(formData);
    localStorage.removeItem(localStorageKey);
  formData = { email: "", message: "" };
  form.reset();
});

