use wasm_bindgen::prelude::*;

// Expose a simple function to JavaScript
#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! Greetings from Rust + WebAssembly.", name)
}
