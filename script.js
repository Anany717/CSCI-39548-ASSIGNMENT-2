let itemCount = 2;

function addItem() {
    itemCount++;
    const list = document.getElementById('dynamic-list');
    const listItem = document.createElement('li');
    listItem.textContent = `Sample Item ${itemCount}`;
    list.appendChild(listItem);
}

function removeItem() {
    const list = document.getElementById('dynamic-list');
    if (list.children.length > 0) {
        list.removeChild(list.lastChild);
    }
}
