export const ComingSoon = ({ title }: { title: string }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full">
      <h2 className="text-[28px] font-bold text-[#161616] dark:text-white mb-3">
        {title}
      </h2>
      <p className="text-[16px] text-[#6F6F6F] dark:text-slate-400">
        We will update soon
      </p>
    </div>
  );
};

export default ComingSoon;
