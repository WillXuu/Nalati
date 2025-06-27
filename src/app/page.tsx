import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white">
        <Image
          src="/images/hero.jpeg"
          alt="那拉提草原的壮丽景色"
          fill
          className="absolute z-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            沉浸在雪山与草原的怀抱中
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            探索那拉提的宁静之美，在我们温馨的民宿中找到您的第二个家。
          </p>
          <Link href="/rooms" className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            查看所有房型
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">为何选择我们？</h2>
            <p className="text-gray-600 mt-2">我们提供的不仅仅是住宿，更是一种生活体验。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="flex flex-col items-center">
              <div className="w-full h-48 relative rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/feature-room.jpeg" alt="舒适的客房" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-2">舒适如家的客房</h3>
              <p className="text-gray-600">
                每一间客房都经过精心设计，融合了现代舒适与自然元素，窗外便是无敌美景。
              </p>
            </div>
            
            <div className="flex flex-col items-center">
               <div className="w-full h-48 relative rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/feature-location.jpeg" alt="绝佳的地理位置" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-2">绝佳的地理位置</h3>
              <p className="text-gray-600">
                我们的民宿位于那拉提核心景区附近，方便您探索草原的每一个角落。
              </p>
            </div>

            <div className="flex flex-col items-center">
               <div className="w-full h-48 relative rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/feature-food.jpeg" alt="地道的本地美食" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-2">地道的本地美食</h3>
              <p className="text-gray-600">
                品尝由当地新鲜食材制作的哈萨克族传统美食，体验一次味蕾的旅行。
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
