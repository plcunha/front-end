document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const resultDiv = document.getElementById("result");
  
    calculateButton.addEventListener("click", function () {
      const date1Input = document.getElementById("date1");
      const date2Input = document.getElementById("date2");
  
      const date1 = new Date(date1Input.value);
      const date2 = new Date(date2Input.value);
  
      if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        resultDiv.textContent = "Por favor, insira datas válidas.";
        return;
      }
  
      const maxDate = findMaxDate(date1, date2);
      const intervalDays = calculateDateInterval(date1, date2);
      const currentDate = getCurrentDate();
  
      resultDiv.innerHTML = `
        <p><strong>Data mais recente:</strong> ${formatDate(maxDate)}</p>
        <p><strong>Intervalo:</strong> ${intervalDays} dias</p>
        <p><strong>Data atual:</strong> ${currentDate}</p>
      `;
    });

    const addDaysButton = document.getElementById("addDaysButton");
    const addResultDiv = document.getElementById("addResult");

    addDaysButton.addEventListener("click", function () {
      const baseDateInput = document.getElementById("baseDate");
      const daysInput = document.getElementById("daysToAdd");

      const baseDate = new Date(baseDateInput.value);
      const days = parseInt(daysInput.value, 10);

      if (isNaN(baseDate.getTime())) {
        addResultDiv.textContent = "Por favor, insira uma data válida.";
        return;
      }

      if (isNaN(days) || days < 0) {
        addResultDiv.textContent = "Por favor, insira um número de dias válido.";
        return;
      }

      const newDate = addDaysToDate(baseDate, days);

      addResultDiv.innerHTML = `
        <p><strong>Data original:</strong> ${formatDate(baseDate)}</p>
        <p><strong>+${days} dias =</strong> ${formatDate(newDate)}</p>
      `;
    });
  });
  