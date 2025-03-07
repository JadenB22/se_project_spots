const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];
// Profile Edit Section
const profileEditButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editModalCloseBtn = document.querySelector(".modal__close-btn");
const cardModalBtn = document.querySelector(".profile__add-button");
// Profile Name Input Section
const profileName = document.querySelector(".profile__name");
const editModalNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const modalSubmitBtn = editProfileModal.querySelector("modal__submit-btn");
// Profile Description Input Section
const profileDescription = document.querySelector(".profile__description");
const editModalDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
// Template and cards
const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");
// Function to create a new card
function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardNameElement = cardElement.querySelector(".card__title");
  cardNameElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name; // FIXED: Use `data.name` for `alt`
  return cardElement;
}

// Form Submission
const editFormElement = editProfileModal.querySelector(".modal__form");
function openModal(modal) {
  modal.classList.add("modal_opened");
}
//card modal
const cardModal = document.querySelector("#add-card-modal");
const cardModalCloseBtn = cardModal.querySelector(".modal__close-btn");
const modalSubmitAddBtn = cardModal.querySelector("modal__submit-btn");

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal();
}
function closeModal(modal) {
  modal.classList.remove("modal_opened");
}
profileEditButton.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});
editModalCloseBtn.addEventListener("click", () => {
  closeModal(editProfileModal);
});

cardModalBtn.addEventListener("click", () => {
  openModal(cardModal);
});
cardModalCloseBtn.addEventListener("click", () => {
  closeModal(cardModal);
});

modalSubmitBtn.addEventListener("submit", handleFormEditSubmit);
// Load initial cards using forEach (Cleaner)
initialCards.forEach((card) => {
  const cardElement = getCardElement(card);
  cardsList.append(cardElement);
});
