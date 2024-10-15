// Show Header Text Button
document.getElementById('showHeaderText').onclick = function() {
    const headerText = document.querySelector('.header').textContent; // Get the text content of the h1
    alert(headerText); // Show it in an alert
};

// Add Box Button
document.getElementById('addBox').onclick = function() {
    const newBox = document.createElement('div'); // Create a new div
    newBox.className = 'box-style'; // Add the box style
    newBox.textContent = 'New Box'; // Set the text content
    document.querySelector('.container').appendChild(newBox); // Append to container
};

// Remove Box Button
document.getElementById('removeBox').onclick = function() {
    const boxes = document.getElementsByClassName('box-style'); // Get all boxes
    if (boxes.length > 0) {
        boxes[boxes.length - 1].remove(); // Remove the last box
    }
};

// Show Box Count Button
document.getElementById('showBoxCount').onclick = function() {
    const boxCount = document.getElementsByClassName('box-style').length; // Count boxes
    alert(`Number of boxes: ${boxCount}`); // Show alert with box count
};

// Create Link Button
const createLinkButton = document.createElement('button'); // Create a button for the link
createLinkButton.textContent = 'Create Link'; // Set button text
document.querySelector('.container').appendChild(createLinkButton); // Append button

createLinkButton.onclick = function() {
    const link = document.createElement('a'); // Create an anchor element
    link.href = '#'; // Set href
    link.textContent = 'link example'; // Set link text
    document.querySelector('.container').appendChild(link); // Append link
};


