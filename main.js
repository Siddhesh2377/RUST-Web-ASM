// main.js
import init, { greet } from './pkg/web_project.js';

async function run() {
    // Initialize the Wasm module
     await init();

    // Get references to DOM elements
    const nameInput = document.getElementById('name');
    const greetBtn = document.getElementById('greetBtn');
    const greetingEl = document.getElementById('greeting');

    // Attach event listener to button
    greetBtn.addEventListener('click', () => {
        const name = nameInput.value || 'World';
        // Call the Rust function
        greetingEl.textContent = greet(name);
    });
}

run().then(() => {

});