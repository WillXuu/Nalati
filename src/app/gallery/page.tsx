import GalleryItem from '@/components/GalleryItem';
import { galleryItems } from '@/data/gallery';

const GalleryPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">风光相册</h1>
        <p className="text-center text-gray-600 mb-12">那拉提的四季，每一刻都值得珍藏</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className={`${item.className || ''}`}>
              <GalleryItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage; 