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
const modalSubmitBtn = editProfileModal.querySelector(".modal__submit-btn");

// Profile Description Input Section
const profileDescription = document.querySelector(".profile__description");
const editModalDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

// Template and cards
const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");

//funtion to delete card
function handleDeleteCard(evt) {
  evt.target.closest(".card").remove();
}
// Function to create a new card
function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardNameElement = cardElement.querySelector(".card__title");
  const cardLikeBtn = cardElement.querySelector(".card__like-button"); // Selecting like button
  const cardDeleteBtn = cardElement.querySelector(".card__button_delete");
  cardNameElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  // Add delete button event listener
  cardDeleteBtn.addEventListener("click", handleDeleteCard);
  // Add like button event listener
  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_liked");
  });

  return cardElement;
}

// Form Submission
const editFormElement = editProfileModal.querySelector(".modal__form");

function openModal(modal) {
  modal.classList.add("modal_opened");
}

// Card modal
const cardModal = document.querySelector("#add-card-modal");
const cardModalCloseBtn = cardModal.querySelector(".modal__close-btn");
const modalSubmitAddBtn = cardModal.querySelector(".modal__submit-btn");
const cardForm = cardModal.querySelector(".add-card__form");
const cardNameInput = cardModal.querySelector("#add-card-name-input");
const cardLinkInput = cardModal.querySelector("#add-card-link-input");

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal(editProfileModal);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const inputValues = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };

  if (!inputValues.name || !inputValues.link) {
    alert("Please provide both a name and a valid image URL.");
    return;
  }

  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement); // Add new card to the top of the list

  closeModal(cardModal);
  cardForm.reset(); // Clears the form after submission
}

// Event Listeners
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

cardForm.addEventListener("submit", handleAddCardSubmit);
modalSubmitBtn.addEventListener("click", handleFormEditSubmit);
//set delete event listener

// Load initial cards
initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.append(cardElement);
});
