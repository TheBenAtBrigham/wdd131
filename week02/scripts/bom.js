const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");



button.addEventListener('click', function() {
  if (input.value.trim() !== '') {
    
    const deleteButton = document.createElement("button");
    const li = document.createElement("li");

    li.textContent = input.value; 
    deleteButton.textContent = '❌';
    deleteButton.ariaLabel = "Close"
    deleteButton.id = "close-button";

    li.append(deleteButton);
    list.append(li);
    input.value = '';
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
  }
});

