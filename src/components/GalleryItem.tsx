import Image from 'next/image';
import Link from 'next/link';
import { GalleryItem as GalleryItemType } from '@/data/gallery';

interface GalleryItemProps {
  item: GalleryItemType;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item }) => {
  return (
    <Link href={`/gallery/${item.id}`} className="block group">
      <div className="overflow-hidden rounded-lg shadow-lg break-inside-avoid group-hover:shadow-xl transition-shadow duration-300">
        {item.type === 'image' ? (
          <Image
            src={item.src}
            alt={item.alt}
            width={500}
            height={500}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="overflow-hidden">
            <video
              src={item.src}
              width="500"
              height="500"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            >
              抱歉，您的浏览器不支持内嵌视频。
            </video>
          </div>
        )}
        <div className="p-4 bg-white">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default GalleryItem; 