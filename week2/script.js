// header-short scroll animation
const headerShort = document.querySelector("#header-short");
const headerShortNav = document.querySelector("#header-short-nav");
const headerShortLeft = document.querySelector("#header-short-left");
const headerShortRight = document.querySelector("#header-short-right");
const headerShortH1 = document.querySelector("#header-short-h1");
const baselineSnackbar = document.querySelector("#baseline-snackbar");
const leadingSnackbar = document.querySelector("#leading-snackbar");
const stackedSnackbar = document.querySelector("#stacked-snackbar");
const snackbar = document.querySelector("#snackbar-container");
const snackbarMsg = document.querySelector("#snack-msg");
const snackbarAction = document.querySelector("#snack-action");
const snackbarCta = document.querySelector("#snack-cta");

const hideBadgeBtn = document.querySelector("#hide-badge-btn");
const hideBadgeCounter = document.querySelector("#hide-badge-counter");

const chipsDivContainer = document.querySelector("#chips-and-input");
const inputForChip = document.querySelector("#input-chip");

const dismissLeftNav = document.querySelector(
  "#drawer-permanent__left-dismiss"
);
const modalLeftNav = document.querySelector("#left-modal-container");

const dismissIcon = document.querySelector("#drawer-right-icon-dismissible");
const modalIcon = document.querySelector("#drawer-right-icon-modal");


const tabs1 = document.querySelectorAll(".tab");

const addClasses = () => {
  headerShortH1.classList.add("hidden");
  headerShortLeft.classList.add("dib");
  headerShortRight.classList.add("dib");
  headerShortNav.classList.add("make-short");
};

const removeClasses = () => {
  headerShortH1.classList.remove("hidden");
  headerShortLeft.classList.remove("dib");
  headerShortRight.classList.remove("dib");
  headerShortNav.classList.remove("make-short");
};

headerShort.addEventListener("scroll", () => {
  if (headerShort.scrollTop === 0) removeClasses();
  else addClasses();
});

hideBadgeBtn.addEventListener("click", () => {
  hideBadgeCounter.classList.toggle("hidden");
});

baselineSnackbar.addEventListener("click", () => {
  snackbarMsg.textContent = "Cannot load, retry in 5 seconds.";
  snackbarAction.textContent = "RETRY";
  snackbar.classList.remove("hidden");
  setTimeout(() => {
    snackbar.classList.add("hidden");
  }, 5000);
});

leadingSnackbar.addEventListener("click", () => {
  snackbarMsg.textContent = "Your photo has been archived.";
  snackbarAction.textContent = "UNDO";

  snackbar.classList.remove("hidden");
  snackbar.classList.add("leading-snackbar");
  setTimeout(() => {
    snackbar.classList.add("hidden");
    snackbar.classList.remove("leading-snackbar");
  }, 5000);
});

stackedSnackbar.addEventListener("click", () => {
  snackbarMsg.textContent =
    "This item already has the label 'travel'. You can add a new label.";
  snackbarAction.textContent = "ADD NEW";
  snackbar.classList.remove("df-r");
  snackbar.classList.add("df-c");

  snackbar.classList.remove("hidden");
  snackbarCta.classList.add("snack-cta-addon");
  setTimeout(() => {
    snackbar.classList.add("hidden");
    snackbar.style.width = "40rem";
    snackbarCta.classList.remove("snack-cta-addon");

    snackbar.classList.add("df-r");
    snackbar.classList.remove("df-c");
  }, 5000);
});

inputForChip.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const text = inputForChip.value;
    inputForChip.value = "";
    inputForChip.insertAdjacentHTML(
      "beforebegin",
      `<div class="chip">
    <span class="chips-text">${text}</span>
    <ion-icon class="chip-remove" name="close-circle"></ion-icon>
    </div>`
    );
  }
});

dismissIcon.addEventListener("click", () => {
  dismissLeftNav.classList.toggle("hidden");
});

modalIcon.addEventListener("click", () => {
  modalLeftNav.classList.toggle("hidden");
});

modalLeftNav.addEventListener("click", () => {
  modalLeftNav.classList.toggle("hidden");
});

let activeTab;
console.log('from outside = ' + activeTab)
tabs1.forEach(tab => {
  tab.addEventListener('click', () => {
    tab.style.backgroundColor = '#f3eafc';
    activeTab ? activeTab.style.backgroundColor = '#f9f6fc' : undefined;
    activeTab = tab;
console.log('from inside = ' + activeTab)

  })
})
