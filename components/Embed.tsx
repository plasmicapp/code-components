export function Embed({
  className,
  code,
}: {
  className?: string;
  code: string;
}) {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: code }} />
  );
}
