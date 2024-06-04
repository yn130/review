// let realTodo = document.querySelectorAll('.done');
// let realDone = document.querySelectorAll('.todo');


// realTodo.forEach(done => {
//     done.classList.remove('done');
//     done.classList.add('todo');
// });

// realDone.forEach(todo => {
//     todo.classList.remove('todo');
//     todo.classList.add('done');

// });

let li = document.querySelectorAll('li');
li.forEach(li => {
    li.classList.toggle('todo');
    li.classList.toggle('done');
});
