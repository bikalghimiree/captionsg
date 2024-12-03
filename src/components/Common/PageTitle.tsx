interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-dark-text-primary mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-dark-text-secondary text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageTitle;