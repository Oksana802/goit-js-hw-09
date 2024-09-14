import"./assets/styles-DXm3MVBf.js";console.log("Form");let e={email:"",message:""};document.body.insertAdjacentHTML("beforeend",`
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
`);const a=document.querySelector(".feedback-form"),r=a.elements.email,c=a.elements.message,l="feedback-form-state",n=document.querySelector("button"),m=document.querySelectorAll("label"),i=document.querySelector("input"),u=document.querySelector("textarea"),o=document.createElement("div");m.forEach(t=>{o.append(t)});a.insertAdjacentElement("afterbegin",o);o.classList.add("label-box");m.forEach(t=>{t.classList.add("label-element")});i.classList.add("input-element");u.classList.add("textarea-element");n.classList.add("btn-form");n.innerHTML="Log in";const s=localStorage.getItem(l);s&&(e=JSON.parse(s),r.value=e.email,c.value=e.message);a.addEventListener("input",t=>{e[t.target.name]=t.target.value,localStorage.setItem(l,JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message)return alert("Fill please all fields");console.log(e),localStorage.removeItem(l),e={email:"",message:""},a.reset()});
//# sourceMappingURL=2-form.js.map
