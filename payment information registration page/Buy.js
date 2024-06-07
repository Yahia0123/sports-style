document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (validateCardNumber(cardNumber) && validateExpiryDate(expiryDate) && validateCVV(cvv)) {
        alert('Data submitted successfully');
        // You can send the data to the server here
    } else {
        alert('Please enter valid payment information');
    }
});

function validateCardNumber(cardNumber) {
    // Add card number validation logic here
    return true; // Placeholder validation
}

function validateExpiryDate(expiryDate) {
    // Add expiry date validation logic here
    return true; // Placeholder validation
}

function validateCVV(cvv) {
    // Add CVV validation logic here
    return true; // Placeholder validation
}
