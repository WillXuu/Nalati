import GalleryItem from '@/components/GalleryItem';
import { galleryItems } from '@/data/gallery';

const GalleryPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">风光相册</h1>
        <p className="text-center text-gray-600 mb-12">那拉提的四季，每一刻都值得珍藏</p>
        
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage; 