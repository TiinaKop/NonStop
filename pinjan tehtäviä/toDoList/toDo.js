const input = document.querySlector('input');
const btn = document.querySlector('.addTask > button');

function addList(e) {
  const notCompleted = document.querySlector('.notCompleted');
  const completed = document.querySlector('.completed');

  btn.addEvenListener('click', addList);

  const newLi = document.createElement('li');
  const checBtn = document.createElement('button');
  const delBtn = document.createElement('button');

  checBtn.innerHTML = '<i class="fa fa-check"></i>';
  delBtn.innerHTML = '<i class="fa fa-trash"></i>';

  if (input.value !=='') {
    newLine.textContent = input.value;
    input.value = '';
    notCompleted.appendChild(newLi);
  }
}
