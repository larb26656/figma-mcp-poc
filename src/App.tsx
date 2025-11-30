import "./App.css";
import ApplePayButton, {
  APPLE_PAY_PRESETS,
  type ApplePayButtonProps,
} from "./components/ApplePayButton";

function App() {
  return (
    <main className="page">
      <section className="panel">
        {APPLE_PAY_PRESETS.map((preset: ApplePayButtonProps) => (
          <ApplePayButton key={JSON.stringify(preset)} {...preset} />
        ))}
      </section>
    </main>
  );
}

export default App;
