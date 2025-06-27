import Image from 'next/image';
import Link from 'next/link';
import RoomCard from '@/components/RoomCard';
import { rooms } from '@/data/rooms';

const RoomsPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">房型展示</h1>
        <p className="text-center text-gray-600 mb-12">选择一个您喜欢的房间，开始您的梦幻之旅</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsPage; 