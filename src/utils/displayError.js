const displayError = (error, secondaryMessage) => {
  const errorContainer = document.createElement("div");
  errorContainer.classList.add("error-container");
  document.querySelector("body").appendChild(errorContainer);
  errorContainer.innerHTML = `
        <div class="error-message">
            <h2>Oops! An error occured.</h2>
            <p>${error}</p>
            ${secondaryMessage ? `<p>${secondaryMessage}</p>` : ""}
        </div>
    `;
};

export default displayError;
