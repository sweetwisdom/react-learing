const creatDomfromString = (domString) => {
  const div = document.createElement("div");
  div.innerHTML = domString;
  return div;
};

class LikeButton {
  constructor(doms) {
    this.doms = doms;
    this.state = {
      isLike: false,
    };
  }
  setState(state) {
    const oldEl = this.el;
    this.state = state;
    this.el = this.render();
    console.log(oldEl);
    this.onStateChange(oldEl, this.el);
  }

  changeLikeText() {
    console.log("用户点击了");
    this.setState({
      isLike: !this.state.isLike,
    });
  }
  onStateChange(oldEl, newEl) {
    this.doms.insertBefore(newEl, oldEl);
    this.doms.removeChild(oldEl);
  }
  render() {
    this.el = creatDomfromString(`

    <button id="like-btn">
        <span class="like-text"> ${this.state.isLike ? "取消" : "点赞"} </span>
        <span>👍</span>
    </button>
  
        `);
    this.el.addEventListener("click", this.changeLikeText.bind(this));
    return this.el;
  }
}

const wrapper = document.querySelector(".wrapper");
const LikeButton1 = new LikeButton(wrapper);
wrapper.appendChild(LikeButton1.render());

// LikeButton1.onStateChange = (oldEl, newEl) => {
//   wrapper.insertBefore(newEl, oldEl);
//   wrapper.removeChild(oldEl);
// };

/**
 * 
 * 
 * options包括三个布尔值选项：
capture: 默认值为false（即 使用事件冒泡）. 是否使用事件捕获；
once: 默认值为false. 是否只调用一次，if true，会在调用后自动销毁listener
passive: if true, 意味着listener永远不远调用preventDefault方法，如果又确实调用了的话，浏览器只会console一个warning，而不会真的去执行preventDefault方法。根据规范，默认值为false. 但是chrome, Firefox等浏览器为了保证滚动时的性能，在document-level nodes(Window, Document, Document.body)上针对touchstart和touchmove事件将passive默认值改为了true， 保证了在页面滚动时不会因为自定义事件中调用了preventDefault而阻塞页面渲染。
https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener

 */
