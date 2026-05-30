export default function Cell({ value, onClick, isWinning, disabled }) {
  return (
    <button
      type="button"
      className={`cell ${value ? `cell--${value.toLowerCase()}` : ""} ${isWinning ? "cell--winning" : ""}`}
      onClick={onClick}
      disabled={disabled || Boolean(value)}
      aria-label={value ? `${value} mark` : "Empty cell"}
    >
      {value && <span className="cell__mark">{value}</span>}
    </button>
  );
}
