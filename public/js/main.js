console.info("Hi Ridzi")

// tangkap element dengan id note_form 
let note_form = document.getElementById('note_form');
let note = document.getElementById('note');
let note_storage_data = [];
let root = document.getElementById('root');

// tambahkan event listener
note_form.addEventListener("submit", (event) => {
  
  let value = event.target.note.value;

  if(value === '') {
    alert('Masukkan data')
    return
  }

  // stop form dari reload page
  event.preventDefault();

  // tampilkan ke console
  // console.info(event.target.note.value);

  let note_value = {
      id : Date.now(),
      note: event.target.note.value // apapun yang user masukkan di textarea
    }
  
  // console.info(note_value);

  note_storage_data.push(note_value);

  // console.info(note_storage_data)

  // clear textarea value
  note.value = ""

  // panggil function render HTML
  renderToHtml();
});

function renderToHtml() {
  // clear / reset element root
  root.innerHTML = '';

  // loop foreach dari array note_storage_data
  note_storage_data.forEach((elem, i) => {
    // console.info(elem);
    // root.innerHTML += Card(index, elem.note);
    root.innerHTML += `
    <div class="card">
      <p>${elem.note} </p>
      <button class="card_delete_btn" onClick="deleteNote(${i})"> x </button>
    </div>
    `
  });
}

function deleteNote(index) {

  let confDelete = confirm("are you sure wanna delete ?");

  if (!confDelete) {
    return
  }

  // console.info(indexNo);
  note_storage_data.splice(index, 1);

  renderToHtml();
}



