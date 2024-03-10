let navShowing = false;
const modal = document.getElementById("modal");

const toggleNav = () => {
  if (navShowing) {
    modal.style.display = "none";
    navShowing = false;
  } else {
    modal.style.display = "flex";
    navShowing = true;
  }
};
