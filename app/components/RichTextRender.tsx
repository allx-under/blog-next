interface RichTextRendererProps {
  content: string;
  size?: "lg" | "xs";
  color?: string;
}

const RichTextRender: React.FC<RichTextRendererProps> = ({
  content,
  size = "lg",
  color,
}) => {
  return (
    <div
      className={`text-${size} ${
        color ? "text-white" : "text-slate-800"
      } mt-5 mb-3`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichTextRender;
