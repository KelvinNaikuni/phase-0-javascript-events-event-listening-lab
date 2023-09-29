function addingEventListener() {
  const input = document.getElementById('input');

  function clickAlert() {
    alert('I was clicked!');
  }

  input.addEventListener('click', clickAlert);
}

// Call the addingEventListener function to set up the event listener
addingEventListener();
