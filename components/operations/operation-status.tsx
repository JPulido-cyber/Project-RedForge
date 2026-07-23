interface OperationStatusProps {
  status: string;
}

export function OperationStatus({ status }: OperationStatusProps) {
  return (
    <div className="operation-status">
      <span className="status-dot" />
      <span>{status}</span>
    </div>
  );
}
