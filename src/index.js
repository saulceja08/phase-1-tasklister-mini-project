//add DOMContentLoaded to signal when all element in DOM are fully loaded
document.addEventListener('DOMContentLoaded',function() => {
  //add an addEventListener functionS
  addingEventListeners()
})

function addingEventListeners() {
  //get the form and add an eventListener
  document.getElementById('create-task-form')
    .addEventListener('submit', handleFormSubmit)
}

function handleFormSubmit(e){
  e.preventDefault()

  const task = e.target[0].value
  displayTask(task)
}

function displayTask(task) {
  const taskUl = document.getElementById('task')
  const taskLi = document.getElementById('li')

  taskLi.textContent = tasktaskUl.appendChild(taskLi)
}