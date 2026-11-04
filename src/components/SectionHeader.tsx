type SectionHeaderProps = {
  number: string;
  title?: React.ReactNode;
  light?: boolean;
  className?: string;
};

export default function SectionHeader({ number, title, light = false, className = "" }: SectionHeaderProps) {
  return (
    <div className={`section-number ${light ? "light" : ""} ${className}`.trim()}>{title ?? number}</div>
  );
}
