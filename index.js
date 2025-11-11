
    const display = document.getElementById('display');
    const operators = ['+', '-', '*', '/', '%', '.'];
    const themeToggle = document.getElementById('themeToggle');

    // Append Value (prevent multiple symbols)
    function appendValue(value) {
      const current = display.value;
      const lastChar = current.slice(-1);
      if (operators.includes(value) && operators.includes(lastChar)) return;
      display.value += value;
    }

    // Clear All
    function clearDisplay() {
      display.value = '';
    }

    // Delete last char
    function deleteChar() {
      display.value = display.value.slice(0, -1);
    }

    // Calculate safely
    function calculate() {
      try {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
      } catch {
        display.value = 'Error';
      }
    }

    // Dark/Light Mode Toggle
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
