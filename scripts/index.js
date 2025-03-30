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

// Validation config
const validationConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
};

// DOM Elements
const profileEditButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const cardModalBtn = document.querySelector(".profile__add-button");
const editModalCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const cardModal = document.querySelector("#add-card-modal");
const cardModalCloseBtn = cardModal.querySelector(".modal__close-btn");
const cardForm = cardModal.querySelector(".modal__form");
const cardNameInput = cardModal.querySelector("#add-card-name-input");
const cardLinkInput = cardModal.querySelector("#add-card-link-input");

const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");
const previewModalImageEl = previewModal.querySelector(".modal__image");
const previewModalCaptionEl = previewModal.querySelector(".modal__caption");

const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editModalNameInput = document.querySelector("#profile-name-input");
const editModalDescriptionInput = document.querySelector(
  "#profile-description-input"
);

// Modal Functions
function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscClose);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscClose);
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".modal_opened");
    if (openModal) closeModal(openModal);
  }
}

// Close modal on overlay click
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target === modal) closeModal(modal);
  });
});

// Card Rendering
function handleDeleteCard(evt) {
  evt.target.closest(".card").remove();
}

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardNameElement = cardElement.querySelector(".card__title");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__button-delete");

  cardNameElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;

  cardDeleteBtn.addEventListener("click", handleDeleteCard);
  cardLikeBtn.addEventListener("click", () =>
    cardLikeBtn.classList.toggle("card__like-button_liked")
  );
  cardImageElement.addEventListener("click", () => {
    previewModalImageEl.src = data.link;
    previewModalImageEl.alt = data.name;
    previewModalCaptionEl.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

// Reset validation helper
function resetValidation(formEl, config) {
  const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
  const buttonEl = formEl.querySelector(config.submitButtonSelector);

  inputList.forEach((inputEl) => {
    hideInputError(formEl, inputEl, config);
  });

  toggleButtonState(inputList, buttonEl, config);
}

// Event Listeners
profileEditButton.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  resetValidation(editFormElement, validationConfig);
  openModal(editProfileModal);
});

editModalCloseBtn.addEventListener("click", () => closeModal(editProfileModal));
cardModalBtn.addEventListener("click", () => {
  resetValidation(cardForm, validationConfig);
  openModal(cardModal);
});
cardModalCloseBtn.addEventListener("click", () => closeModal(cardModal));
previewModalCloseBtn.addEventListener("click", () => closeModal(previewModal));

cardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const inputValues = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };

  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  cardForm.reset();

  const inputList = Array.from(
    cardForm.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonEl = cardForm.querySelector(
    validationConfig.submitButtonSelector
  );
  disableButton(buttonEl);

  closeModal(cardModal);
});

// Profile Form Submission
const editFormElement = editProfileModal.querySelector(".modal__form");

editFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  evt.target.reset();
  closeModal(editProfileModal);
});

// Load cards
initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.append(cardElement);
});
