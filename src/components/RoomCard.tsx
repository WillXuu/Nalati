import Image from 'next/image';
import Link from 'next/link';
import { Room } from '@/data/rooms';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <Image
          src={room.imageUrl}
          alt={room.name}
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 flex flex-col justify-between md:w-1/2">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{room.name}</h2>
          <p className="mt-2 text-gray-600">{room.description}</p>
        </div>
        <div className="mt-4">
          <p className="text-xl font-semibold text-green-600">{room.price}</p>
          <Link href={`/rooms/${room.id}`} className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            查看详情
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard; 