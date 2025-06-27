import Image from 'next/image';
import Link from 'next/link';
import { galleryItems } from '@/data/gallery';

const GalleryDetailPage = async ({ params }: { params: { id: string } }) => {
  const item = galleryItems.find(i => i.id === parseInt(params.id));

  if (!item) {
    return (
      <div className="container mx-auto px-6 py-8 text-center">
        <h1 className="text-3xl font-bold">未找到该作品</h1>
        <p className="mt-4">抱歉，我们找不到您要查找的作品。</p>
        <Link href="/gallery" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          返回相册
        </Link>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen bg-black flex items-center justify-center">
      {/* Background blurred image */}
      {item.type === 'image' && (
        <Image
          src={item.src}
          alt={item.alt}
          layout="fill"
          objectFit="cover"
          className="opacity-20 blur-lg"
        />
      )}
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
        {/* Main content */}
        <div className="w-full h-full max-w-6xl max-h-screen flex items-center justify-center">
          {item.type === 'image' ? (
            <Image
              src={item.src}
              alt={item.alt}
              width={1920}
              height={1080}
              className="object-contain w-auto h-auto max-w-full max-h-full rounded-lg shadow-2xl"
            />
          ) : (
            <video
              src={item.src}
              controls
              autoPlay
              loop
              className="object-contain w-auto h-auto max-w-full max-h-full rounded-lg shadow-2xl"
            >
              抱歉，您的浏览器不支持内嵌视频。
            </video>
          )}
        </div>

        {/* Info Box */}
        <div className="absolute bottom-5 left-5 z-20 bg-black bg-opacity-60 text-white p-4 rounded-lg max-w-sm">
          <h1 className="text-2xl font-bold">{item.title}</h1>
          <p className="mt-2 text-gray-300">{item.description}</p>
        </div>
      </div>

       {/* Close Button */}
       <Link href="/gallery" className="absolute top-5 right-5 z-20 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
      </Link>
    </div>
  );
};

export default GalleryDetailPage; 