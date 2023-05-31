  
(function main() { 
  const submitMoney = document.querySelector('#submit-money');
  console.log("im submi",submitMoney);
  const submitEspecie = document.querySelector('#submit-especie');
  console.log("im input",submitEspecie);
  const submitVoluntary = document.querySelector('#submit-voluntary');
  console.log("im ul", submitVoluntary);
  
  
  submitMoney.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedDiv = document.querySelector('#selected-div');
    selectedDiv.innerHTML = `<p class="p-selected">Seleccionaste Donación Monetaria</p>`;
  });
  submitEspecie.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedDiv = document.querySelector('#selected-div');
    selectedDiv.innerHTML = `<p class="p-selected">Seleccionaste Donación en Especie</p>`;
  });
  submitVoluntary.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedDiv = document.querySelector('#selected-div');
    selectedDiv.innerHTML = `<p class="p-selected">Seleccionaste Voluntariado</p>`;
  });
})();  
