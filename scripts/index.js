<<<<<<< HEAD
=======
// Array of initial cards
>>>>>>> 24b2489787962e5f452cbd1c08b50aa929f6c111
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
<<<<<<< HEAD
const cardModalBtn = document.querySelector(".profile__add-button");
=======
>>>>>>> 24b2489787962e5f452cbd1c08b50aa929f6c111

// Profile Name Input Section
const profileName = document.querySelector(".profile__name");
const editModalNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
<<<<<<< HEAD
const modalSubmitBtn = editProfileModal.querySelector(".modal__submit-btn");
=======
>>>>>>> 24b2489787962e5f452cbd1c08b50aa929f6c111

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
<<<<<<< HEAD
  cardNameElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name; // FIXED: Use `data.name` for `alt`
=======

  cardNameElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name; // FIXED: Use `data.name` for `alt`

>>>>>>> 24b2489787962e5f452cbd1c08b50aa929f6c111
  return cardElement;
}

// Form Submission
const editFormElement = editProfileModal.querySelector(".modal__form");

<<<<<<< HEAD
function openModal(modal) {
  modal.classList.add("modal_opened");
}

// Card modal
const cardModal = document.querySelector("#add-card-modal");
const cardModalCloseBtn = cardModal.querySelector(".modal__close-btn");
const modalSubmitAddBtn = cardModal.querySelector(".modal__submit-btn");

=======
function openModal() {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  editProfileModal.classList.add("modal_opened");
}

>>>>>>> 24b2489787962e5f452cbd1c08b50aa929f6c111
function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
<<<<<<< HEAD
  closeModal(editProfileModal); // Pass editProfileModal as argument
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

// Fixing the event listener for modal submit button
modalSubmitBtn.addEventListener("click", handleFormEditSubmit);
=======
  closeModal();
}

function closeModal() {
  editProfileModal.classList.remove("modal_opened");
}

profileEditButton.addEventListener("click", openModal);
editModalCloseBtn.addEventListener("click", closeModal);
editFormElement.addEventListener("submit", handleFormEditSubmit);
>>>>>>> 24b2489787962e5f452cbd1c08b50aa929f6c111

// Load initial cards using forEach (Cleaner)
initialCards.forEach((card) => {
  const cardElement = getCardElement(card);
<<<<<<< HEAD
  cardsList.append(cardElement);
=======
  cardsList.prepend(cardElement);
>>>>>>> 24b2489787962e5f452cbd1c08b50aa929f6c111
});
