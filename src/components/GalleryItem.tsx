import Image from 'next/image';
import Link from 'next/link';
import { GalleryItem as GalleryItemType } from '@/data/gallery';

interface GalleryItemProps {
  item: GalleryItemType;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item }) => {
  return (
    <Link href={`/gallery/${item.id}`} className="block group h-full">
      <div className="relative overflow-hidden rounded-lg shadow-lg h-full group-hover:shadow-xl transition-shadow duration-300">
        {item.type === 'image' ? (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <video
            src={item.src}
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          >
            抱歉，您的浏览器不支持内嵌视频。
          </video>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm mt-1">{item.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default GalleryItem; 