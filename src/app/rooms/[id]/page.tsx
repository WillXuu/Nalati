import Image from 'next/image';
import { rooms, Room } from '@/data/rooms';

const RoomDetailPage = async ({ params }: { params: { id: string } }) => {
  const room: Room | undefined = rooms.find(r => r.id === parseInt(params.id));

  if (!room) {
    return (
      <div className="container mx-auto px-6 py-8 text-center">
        <h1 className="text-3xl font-bold">未找到房型</h1>
        <p className="mt-4">抱歉，我们找不到您要查找的房型。</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="lg:flex">
          <div className="lg:w-1/2">
            <Image
              src={room.imageUrl}
              alt={room.name}
              width={800}
              height={600}
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <h1 className="text-4xl font-bold leading-tight text-gray-800">{room.name}</h1>
            <p className="mt-4 text-2xl font-semibold text-green-600">{room.price}</p>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">{room.description}</p>
            <div className="mt-8">
              <p className="text-gray-700 font-semibold">主要设施:</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>免费 Wi-Fi</li>
                <li>空调</li>
                <li>24小时热水</li>
                <li>独立卫浴</li>
                <li>观景窗</li>
              </ul>
            </div>
            <div className="mt-8">
              <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg">
                立即预订 (功能待开发)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailPage; 