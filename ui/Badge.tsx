const Badge = ({ text }: { text: string }) => {
  return (
    <span className="rounded-full border border-border bg-secondary px-3 py-1 text-title-text/90 text-xs">
      {text}
    </span>
  );
};

export default Badge;
