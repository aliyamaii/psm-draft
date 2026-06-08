import { EventStatus } from '../types/event.types';

interface EventStatusBadgeProps {
  status: EventStatus;
}

export default function EventStatusBadge({ status }: EventStatusBadgeProps) {
  const statusConfig = {
    pending: {
      color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      label: 'Pending Approval',
      icon: '⏳'
    },
    approved: {
      color: 'bg-green-100 text-green-700 border-green-200',
      label: 'Approved',
      icon: '✅'
    },
    rejected: {
      color: 'bg-red-100 text-red-700 border-red-200',
      label: 'Rejected',
      icon: '❌'
    }
  };

  const config = statusConfig[status];

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium border ${config.color} flex items-center gap-1.5`}
    >
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </span>
  );
}