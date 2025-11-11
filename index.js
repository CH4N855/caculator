  const display = document.getElementById('display');
    const operators = ['+', '-', '*', '/', '%', '.'];

    function appendValue(value) {
      const current = display.value;
      const lastChar = current.slice(-1);

      // Prevent multiple operators in a row
      if (operators.includes(value) && operators.includes(lastChar)) {
        return; // do nothing if both are operators
      }

      display.value += value;
    }

    function clearDisplay() {
      display.value = '';
    }

    function deleteChar() {
      display.value = display.value.slice(0, -1);
    }

    function calculate() {
      try {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
      } catch {
        display.value = 'Error';
      }
    }