export type ApplePayType = "Plain" | "Pay" | "Buy";
export type ApplePayStyle = "White" | "Outline" | "Black";
export type ApplePayShape = "Rounded" | "Pill";

export type ApplePayButtonProps = {
  type?: ApplePayType;
  style?: ApplePayStyle;
  shape?: ApplePayShape;
};

const APPLE_MARK = "";

export const APPLE_PAY_PRESETS: Array<Required<ApplePayButtonProps>> = [
  { type: "Plain", style: "White", shape: "Rounded" },
  { type: "Plain", style: "Outline", shape: "Rounded" },
  { type: "Plain", style: "Black", shape: "Rounded" },
  { type: "Pay", style: "White", shape: "Rounded" },
  { type: "Pay", style: "Outline", shape: "Rounded" },
  { type: "Pay", style: "Black", shape: "Rounded" },
  { type: "Buy", style: "White", shape: "Rounded" },
  { type: "Buy", style: "Outline", shape: "Rounded" },
  { type: "Buy", style: "Black", shape: "Rounded" },
  { type: "Plain", style: "White", shape: "Pill" },
  { type: "Plain", style: "Outline", shape: "Pill" },
  { type: "Plain", style: "Black", shape: "Pill" },
  { type: "Pay", style: "White", shape: "Pill" },
  { type: "Pay", style: "Outline", shape: "Pill" },
  { type: "Pay", style: "Black", shape: "Pill" },
  { type: "Buy", style: "White", shape: "Pill" },
  { type: "Buy", style: "Outline", shape: "Pill" },
  { type: "Buy", style: "Black", shape: "Pill" },
];

export default function ApplePayButton({
  type = "Plain",
  style = "White",
  shape = "Rounded",
}: ApplePayButtonProps) {
  const isPill = shape === "Pill";
  const isOutline = style === "Outline";
  const isBlack = style === "Black";
  const showPrefix = type !== "Plain";

  const baseClasses = [
    "apple-pay-button",
    isPill ? "apple-pay-button--pill" : "apple-pay-button--rounded",
    isOutline ? "apple-pay-button--outline" : "",
    isBlack ? "apple-pay-button--black" : "apple-pay-button--white",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={baseClasses}
      data-name={`Type=${type}, Style=${style}, Shape=${shape}`}
    >
      {showPrefix && (
        <span className="apple-pay-text apple-pay-prefix">{`${type} with `}</span>
      )}
      <span className="apple-pay-text apple-pay-brand">
        {APPLE_MARK} Pay
      </span>
    </div>
  );
}
