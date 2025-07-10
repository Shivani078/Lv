const getQualityColor = (quality) => {
  switch (quality) {
    case 'Exp':
      return '#16a34a'; // green
    case 'Fcst':
      return '#dc2626'; // red
    default:
      return '#6b7280'; // gray
  }
};

export default function IntervalCard({ interval }) {
  if (!interval) return <p>No interval data available.</p>;

  console.log("📦 Interval object received in card:", interval);
  console.log("⏱ Interval End:", interval.intervalEnd);

  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '1.5rem',
        marginTop: '1rem',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        maxWidth: '500px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h2 style={{ marginBottom: '1rem', color: '#374151' }}>
        <strong>NMI:</strong>{' '}
        <span style={{ fontWeight: 'normal' }}>{interval.NMI}</span>
      </h2>

      <p style={{ marginBottom: '0.5rem', color: '#111' }}>
        <strong>Interval End:</strong>{' '}
        <span style={{ fontFamily: 'monospace' }}>
          {new Date(interval.intervalEnd).toLocaleString()}
        </span>
      </p>

      <p style={{ marginBottom: '0.5rem', color: '#047857' }}>
        <strong>Earnings FlexUp:</strong> {interval.earningsFlexUp}{' '}
        {interval.earningsFlexUnits}
      </p>

      <p style={{ marginBottom: '0.5rem', color: '#b91c1c' }}>
        <strong>Costs FlexUp:</strong> {interval.costsFlexUp}{' '}
        {interval.costsFlexUnits}
      </p>

      <p>
        <strong>Quality:</strong>{' '}
        <span
          style={{
            color: 'white',
            backgroundColor: getQualityColor(interval.quality),
            padding: '4px 12px',
            borderRadius: '14px',
            fontSize: '0.9rem',
            fontWeight: 'bold',
          }}
        >
          {interval.quality}
        </span>
      </p>
    </div>
  );
}
