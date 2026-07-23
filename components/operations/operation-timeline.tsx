interface OperationTimelineProps {
  progress: number;
}

export function OperationTimeline({ progress }: OperationTimelineProps) {
  return (
    <div className="progress-block" data-progress={progress}>
      <div className="progress-header">
        <span>MISSION PROGRESS</span>
        <span>{progress}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" />
      </div>
    </div>
  );
}
