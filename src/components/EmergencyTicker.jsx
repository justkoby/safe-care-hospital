import React from 'react';

export default function EmergencyTicker() {
  return (
    <a href="tel:+233533990935" className="emergency-pill">
      <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
        <path
          d="M22 14.33a1 1 0 00-1.07-.26l-5.08 1.63a1 1 0 00-.6.56l-1.17 2.68a14.46 14.46 0 01-6.84-6.84l2.68-1.17a1 1 0 00.56-.6l1.63-5.08A1 1 0 0012 5H4.17a1 1 0 00-1 .92A17.17 17.17 0 0020.08 22.83a1 1 0 00.92-1V14.33z"
          fill="currentColor"
        />
      </svg>
      +233 533 990 935
    </a>
  );
}
