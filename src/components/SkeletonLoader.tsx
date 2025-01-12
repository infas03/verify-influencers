
interface SkeletonLoaderProps {
  length: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ length }) => {
  return (
    <div className="flex flex-col gap-4 w-full p-10">
      {Array.from({ length: length }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4 animate-pulse">
          <div className="flex-1 space-y-2">
            <div className="w-full h-10 bg-gray-800 rounded"></div>
            <div className="w-1/2 h-8 bg-gray-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
