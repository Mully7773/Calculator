class ToggleThemeView {
  _toggleSwitches = document.querySelectorAll(".btn");
  addHandlerRender(handler) {
    const arr = [...this._toggleSwitches];
    console.log(arr);
    arr.forEach((el, index) => {
      el.addEventListener("click", () => {
        el.style.opacity = "1";

        arr
          .filter(function (item) {
            return item !== el;
          })
          .forEach((item) => {
            item.style.opacity = "0";
          });
      });
    });
  }
}

export default new ToggleThemeView();
