type SectionHeaderProps = {
  title: string;
  eyebrow: string;
  description: string;
};

const SectionHeader = (props: SectionHeaderProps) => {
  const { title, eyebrow, description } = props;

  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
        {title}
      </h2>
      <p className="text-center text-white/60 mt-4 mx-auto md:text-lg max-w-md lg:text-xl">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
