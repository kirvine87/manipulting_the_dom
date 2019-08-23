document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');

  const form = document.querySelector('#form')
  form.addEventListener('submit', handleForm)

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAll);

})

const handleForm = function(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const rating = event.target.rating.value;
  const type = event.target.type.value;
  const description = event.target.description.value;
  const atk = event.target.atk.value;
  const def = event.target.def.value;
  const result = document.querySelector('#card-list')

  const newEntry = document.createElement('div');
  newEntry.className = 'newEntry';

  const newName = document.createElement('h2');
  const entryName = document.createTextNode(name);
  newName.appendChild(entryName);

  const newRating = document.createElement('h2');
  const entryRating = document.createTextNode(rating);
  newRating.appendChild(entryRating);

  const newType = document.createElement('h3');
  const entryType = document.createTextNode(type);
  newType.appendChild(entryType);

  const newDescription = document.createElement('h4');
  const entryDescription = document.createTextNode(description);
  newDescription.appendChild(entryDescription);

  const newAtk = document.createElement('h3');
  const entryAtk = document.createTextNode(atk);
  newAtk.appendChild(entryAtk);

  const newDef = document.createElement('h3');
  const entryDef = document.createTextNode(def);
  newDef.appendChild(entryDef);

  newEntry.appendChild(newName);
  newEntry.appendChild(newRating);
  newEntry.appendChild(newType);
  newEntry.appendChild(newDescription);
  newEntry.appendChild(newAtk);
  newEntry.appendChild(newDef);

  result.appendChild(newEntry);

  document.querySelector('form').reset();
}

const handleDeleteAll = function(event) {
  event.preventDefault();
  const emptyList = document.querySelector('#card-list')
  emptyList.innerHTML = "";
}
