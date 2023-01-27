export const coloricon = () => {
  setTimeout(() => {
    const items = document.getElementsByClassName("items");
    for (let i = 0; i < items.length; i++) {
      const as = items[i].getElementsByClassName("VPLink");
      for (let j = 0; j < as.length; j++) {
        if (as[j].innerHTML.indexOf("v-u-e") !== -1) {
          as[
            j
          ].innerHTML = `<div style="display:flex;"><img style="margin-right:8px;" src="/icon/vue.svg" alt="null" p-id="1416">Vue<div>`;
        }
        if (as[j].innerHTML.indexOf("t-s") !== -1) {
          as[
            j
          ].innerHTML = `<div style="display:flex;"><img style="margin-right:8px;" src="/icon/typescript.svg" alt="null" p-id="1416">TS<div>`;
        }
        if (as[j].innerHTML.indexOf("d-a-r-t") !== -1) {
          as[
            j
          ].innerHTML = `<div style="display:flex;"><img style="margin-right:8px;" src="/icon/dart.svg" alt="null" p-id="1416">Dart<div>`;
        }
        if (as[j].innerHTML.indexOf("f-l-u-t-t-e-r") !== -1) {
          as[
            j
          ].innerHTML = `<div style="display:flex;"><img style="margin-right:8px;" src="/icon/flutter.svg" alt="null" p-id="1416">Flutter<div>`;
        }
        if (as[j].innerHTML.indexOf("h-t-m-l") !== -1) {
          as[
            j
          ].innerHTML = `<div style="display:flex;"><img style="margin-right:8px;" src="/icon/HTML.svg" alt="null" p-id="1416">HTML<div>`;
        }
        if (as[j].innerHTML.indexOf("c-s-s") !== -1) {
          as[
            j
          ].innerHTML = `<div style="display:flex;"><img style="margin-right:8px;" src="/icon/css.svg" alt="null" p-id="1416">CSS<div>`;
        }
      }
    }
  }, 0);
};
