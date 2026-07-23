interface MetricValueProps {
  label: string;
  value: string;
}

export function MetricValue({ label, value }: MetricValueProps) {
  return (
    <div>
      <strong>{value}</strong>
      <p>{label}</p>
    </div>
  );
}
