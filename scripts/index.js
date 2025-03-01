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

// Profile Name Input Section
const profileName = document.querySelector(".profile__name");
const editModalNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);

// Profile Description Input Section
const profileDescription = document.querySelector(".profile__description");
const editModalDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

// Form Submission
const editFormElement = editProfileModal.querySelector(".modal__form");

function openModal() {
  editModalNameInput.value = profileName.textContent; // Fill profile name form field
  editModalDescriptionInput.value = profileDescription.textContent; // Fill description form field
  editProfileModal.classList.add("modal_opened");
}

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value; // Input to text
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal();
}

function closeModal() {
  editProfileModal.classList.remove("modal_opened");
}

profileEditButton.addEventListener("click", openModal);
editModalCloseBtn.addEventListener("click", closeModal);
editFormElement.addEventListener("submit", handleFormEditSubmit);
