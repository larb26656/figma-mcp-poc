import ApplePayButton, {
  APPLE_PAY_PRESETS,
  type ApplePayButtonProps,
} from "../components/ApplePayButton";
import "../App.css";
import "./ComponentShowcase.css";

export default function ComponentShowcase() {
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
