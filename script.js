// Javascript
// Lista para armazenar os exercícios
let exercises = [];

// Função para adicionar um exercício
document.getElementById('exerciseForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const exerciseName = document.getElementById('exerciseName').value;
  const weight = document.getElementById('weight').value;

  // Adiciona o exercício à lista
  exercises.push({ name: exerciseName, weight: weight });

  // Limpa os campos do formulário
  document.getElementById('exerciseName').value = '';
  document.getElementById('weight').value = '';

  // Atualiza a lista de exercícios
  displayExercises();
});

// Função para exibir a lista de exercícios
function displayExercises() {
  const exerciseList = document.getElementById('exerciseList');
  exerciseList.innerHTML = '';

  exercises.forEach(exercise => {
    const li = document.createElement('li');
    li.innerHTML = `${exercise.name} - <span>${exercise.weight}kg</span>`;
    exerciseList.appendChild(li);
  });
}

// Função para buscar e exibir os exercícios filtrados
function searchExercise() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filteredExercises = exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(searchTerm)
  );
  
  const exerciseList = document.getElementById('exerciseList');
  exerciseList.innerHTML = '';

  filteredExercises.forEach(exercise => {
    const li = document.createElement('li');
    li.innerHTML = `${exercise.name} - <span>${exercise.weight}kg</span>`;
    exerciseList.appendChild(li);
  });
}
