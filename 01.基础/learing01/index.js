const creatDomfromString = (domString) => {
  const div = document.createElement("div");
  div.innerHTML = domString;
  return div;
};

class LikeButton {
  render(val = "π") {
    this.el = creatDomfromString(`

    <button id="like-btn">
        <span class="like-btn"></span>
        <span>${val}</span>
    </button>
  
        `);
    this.el.addEventListener("click", () => {
      console.log("click", this.el);
    });
    return this.el;
  }
}

const wrapper = document.querySelector(".wrapper");
const LikeButton1 = new LikeButton();
wrapper.appendChild(LikeButton1.render("ηΉθ΅π"));
const LikeButton2 = new LikeButton();
wrapper.appendChild(LikeButton2.render("εζΆπ"));
