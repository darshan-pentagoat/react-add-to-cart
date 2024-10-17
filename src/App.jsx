import "./App.css";
import { CartProvider } from "./CartContext";
import { ThemeProvider } from "./ThemeContext";
import ToggleView from "./ToggleView";

function App() {
  return (
    
    <ThemeProvider>
      <CartProvider>
        <ToggleView />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
