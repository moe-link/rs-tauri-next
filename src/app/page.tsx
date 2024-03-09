import Link from 'next/link';

const Homepage = () => {
  return (
    <div className="p-10 flex justify-center">
      <Link href="/dashboard">
        {/* 使用 div 代替 a 元素 */}
        <div className="border rounded px-2 min-w-16 ml-3 flex items-center justify-center">
          去 Dashboard
        </div>
      </Link>
    </div>
  );
};

export default Homepage;