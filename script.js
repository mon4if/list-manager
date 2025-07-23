let items = [];

function renderList() {
  const list = document.getElementById("itemList");
  list.innerHTML = ""; // Clear existing items

  items.forEach((item, index) => {
    list.innerHTML += `
      <li>
        ${item}
        <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
      </li>
    `;
  });
}

function addItem() {
  const input = document.getElementById("itemInput");
  const value = input.value.trim();

  if (value !== "") {
    items.push(value);
    input.value = "";
    renderList();
  } else {
    alert("Please enter a valid item.");
  }
}

function deleteItem(index) {
  items.splice(index, 1);
  renderList();
}
