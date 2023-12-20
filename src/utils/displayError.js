const displayError = (error, secondaryMessage, container) => {
  container.innerHTML = `
        <div class="error-message">
            <h2>Oops! An error occured.</h2>
            <p>${error}</p>
            ${secondaryMessage ? `<p>${secondaryMessage}</p>` : ""}
        </div>
    `;
};

export default displayError;
