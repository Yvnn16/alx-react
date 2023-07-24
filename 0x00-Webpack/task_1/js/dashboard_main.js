// Import jQuery 
import $ from 'jquery';

// Import Lodash debounce
import debounce from 'lodash/debounce';

// Function to update the counter
let count = 0; // Initialize the count

function updateCounter() {
  count++; // Increment the count
  $('#count').text(count + ' clicks on the button'); // Update the paragraph content with the new count
}

// Wait 500 milliseconds before allowing the click event to be triggered again
const debouncedUpdateCounter = debounce(updateCounter, 500);

// Document ready event
$(document).ready(function() {
  // Paragraph element: Holberton Dashboard
  $('<p>', {
    text: 'Holberton Dashboard'
  }).appendTo('body');

  // Paragraph element: Dashboard data for the students
  $('<p>', {
    text: 'Dashboard data for the students'
  }).appendTo('body');

  // Button element with the text Click here to get started
  $('<button>', {
    text: 'Click here to get started',
    id: 'clickButton'
  }).appendTo('body');

  // Add a paragraph element with id='count'
  $('<p>', {
    id: 'count'
  }).appendTo('body');

  // Add another paragraph: Copyright - Holberton School step by step
  $('<p>', {
    text: 'Copyright - Holberton School step by step'
  }).appendTo('body');

  // Bind the debounced updateCounter function to the click event of the button
  $('#clickButton').click(debouncedUpdateCounter);
});

