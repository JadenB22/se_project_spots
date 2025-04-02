import {
  validationConfig,
  resetValidation,
  disableButton,
} from "./validation.js";

// Initial card data
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

// DOM Elements
const profileEditButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editFormElement = document.forms["edit-profile"];
const editModalNameInput = editFormElement.querySelector("#profile-name-input");
const editModalDescriptionInput = editFormElement.querySelector(
  "#profile-description-input"
);

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const cardModal = document.querySelector("#add-card-modal");
const cardModalBtn = document.querySelector(".profile__add-button");
const cardForm = cardModal.querySelector(".modal__form");
const cardNameInput = cardForm.querySelector("#add-card-name-input");
const cardLinkInput = cardForm.querySelector("#add-card-link-input");

const previewModal = document.querySelector("#preview-modal");
const previewModalImageEl = previewModal.querySelector(".modal__image");
const previewModalCaptionEl = previewModal.querySelector(".modal__caption");

const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");

// Modal functions
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
[editProfileModal, cardModal, previewModal].forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target === modal) closeModal(modal);
  });
});

// Universal close button handler
const closeButtons = document.querySelectorAll(".modal__close");
closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closeModal(popup));
});

// Card functions
function handleDeleteCard(evt) {
  evt.target.closest(".card").remove();
}

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeBtn = cardElement.querySelector(".card__like-button");
  const deleteBtn = cardElement.querySelector(".card__button-delete");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  likeBtn.addEventListener("click", () =>
    likeBtn.classList.toggle("card__like-button_liked")
  );
  deleteBtn.addEventListener("click", handleDeleteCard);
  cardImage.addEventListener("click", () => {
    previewModalImageEl.src = data.link;
    previewModalImageEl.alt = data.name;
    previewModalCaptionEl.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

function renderCard(item, method = "prepend") {
  const cardElement = getCardElement(item);
  cardsList[method](cardElement);
}

// Form submissions
editFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal(editProfileModal);
});

cardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const inputValues = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };

  renderCard(inputValues); // add new card to top
  cardForm.reset();
  disableButton(evt.submitter, validationConfig);
  closeModal(cardModal);
});

// Open form modals
profileEditButton.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  resetValidation(editFormElement, validationConfig);
  openModal(editProfileModal);
});

cardModalBtn.addEventListener("click", () => {
  openModal(cardModal);
});

// Render initial cards (at the bottom)
initialCards.forEach((card) => renderCard(card, "append"));
