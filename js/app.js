document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');

  const form = document.querySelector('#form')
  form.addEventListener('submit', handleForm)

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAll);

})

const addEntry = function(text, element) {
  entry = document.createElement(element);
  entry.textContent = text;
  return entry
}


const handleForm = function(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const rating = event.target.rating.value;
  const type = event.target.type.value;
  const description = event.target.description.value;
  const atk = event.target.atk.value;
  const def = event.target.def.value;
  const result = document.querySelector('#card-list')

  nameEntry = addEntry(this.name.value, 'h2');
  ratingEntry = addEntry(this.rating.value, 'h2');
  typeEntry = addEntry(this.type.value, 'h3');
  descriptionEntry = addEntry(this.description.value, 'h4');
  atkEntry = addEntry(this.atk.value, 'h3');
  defEntry = addEntry(this.def.value, 'h3');


  const cardEntry = document.createElement('div');
  cardEntry.appendChild(nameEntry);
  cardEntry.appendChild(ratingEntry);
  cardEntry.appendChild(typeEntry);
  cardEntry.appendChild(descriptionEntry);
  cardEntry.appendChild(atkEntry);
  cardEntry.appendChild(defEntry);
  result.appendChild(cardEntry);
  cardEntry.classList.add('entry')

  document.querySelector('form').reset();
}

const handleDeleteAll = function(event) {
  event.preventDefault();
  const emptyList = document.querySelector('#card-list')
  emptyList.innerHTML = "";
}
