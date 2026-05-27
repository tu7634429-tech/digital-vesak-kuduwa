import Home from "./pages/Home";
import { LanternProvider } from "./context/LanternContext";

export default function App() {
  return (
    <LanternProvider>
      <Home />
    </LanternProvider>
  );
}