export default function InfoBar() {
  const items = [
    '📚 Admissions Open 2025-26',
    '★ CBSE Curriculum',
    '📍 DholakPur Public School',
    '⏰ School Hours: 8:00 AM – 2:30 PM',
    '📞 +91 98765 43210',
  ];

  /* Items are duplicated so the CSS translateX(-50%) creates a seamless loop */
  const doubled = [...items, ...items];

  return (
    <div className="bg-primary text-white/80 text-xs overflow-hidden h-9 flex items-center">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="mx-8 inline-flex items-center">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
