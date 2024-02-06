function appendToDisplay(value) {
    document.getElementById('display').value += value;
    clearErrorMessage();
  }

  function calculate() {
    clearErrorMessage();
    try {
      const result = eval(document.getElementById('display').value);
      if (isNaN(result) || !isFinite(result)) {
        throw "計算エラー";
      }
      document.getElementById('display').value = result;
    } catch (error) {
      displayErrorMessage(error);
    }
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
    clearErrorMessage();
  }

  function displayErrorMessage(message) {
    document.getElementById('error-message').textContent = message;
  }

  function clearErrorMessage() {
    document.getElementById('error-message').textContent = '';
  }