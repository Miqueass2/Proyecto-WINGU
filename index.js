/*   
(function main() { 
  const submitMoney = document.querySelector('#submit-money');

  const submitEspecie = document.querySelector('#submit-especie');

  const submitVoluntary = document.querySelector('#submit-voluntary');

  const productInterest = document.querySelector('#product_interest');
  
  
  submitMoney.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedDiv = document.querySelector('#selected-div');
    
    productInterest.value = 'Donación Monetaria';
    console.log("inputvalue::",productInterest.value);
    selectedDiv.innerHTML = `<p class="p-selected">Seleccionaste Donación Monetaria</p>`;
  });
  submitEspecie.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedDiv = document.querySelector('#selected-div');
    productInterest.value = 'Donación en Especie';
    selectedDiv.innerHTML = `<p class="p-selected">Seleccionaste Donación en Especie</p>`;
  });
  submitVoluntary.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedDiv = document.querySelector('#selected-div');
    productInterest.value = 'Voluntariado';
    selectedDiv.innerHTML = `<p class="p-selected">Seleccionaste Voluntariado</p>`;
  });
})();  
 */