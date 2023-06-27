  
(function main() {
  const isCompany = document.querySelector('#company');
  
  const genderForm = document.querySelector('.container__gender');
  isCompany.addEventListener('change', (e) => {
    const value = e.target.value;
    if (value == 'Individual') {
      console.log(genderForm);
      genderForm.innerHTML = `
      
        <label class="label-form" for="label-form">Genero:</label>
          <select  id="00N8b00000IrTyi" name="00N8b00000IrTyi"><option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Binario">Binario</option>
            <option value="No binario">No binario</option>
            <option value="Prefiero no decirlo">Prefiero no decirlo</option>
          </select>
      `
    } else {
      genderForm.innerHTML = ``;
    }

  });

})();  
