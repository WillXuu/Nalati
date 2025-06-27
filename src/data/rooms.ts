export interface Room {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

export const rooms: Room[] = [
  {
    id: 1,
    name: '星空观景大床房',
    description: '拥有超大落地窗，夜晚可以躺在床上欣赏璀璨星空。配备舒适大床和现代设施。',
    price: '880元/晚',
    imageUrl: '/images/room-1.jpeg',
  },
  {
    id: 2,
    name: '草原家庭套房',
    description: '宽敞的家庭套房，包含一个主卧和一个儿童房，是家庭出游的理想选择。',
    price: '1280元/晚',
    imageUrl: '/images/room-2.jpeg',
  },
  {
    id: 3,
    name: '林间静谧双床房',
    description: '房间被白桦林环绕，环境静谧，适合喜欢安静的旅客。',
    price: '780元/晚',
    imageUrl: '/images/room-3.jpeg',
  },
  {
    id: 4,
    name: '豪华露台房',
    description: '自带私人露台，可以尽享无遮挡的草原美景和新鲜空气。',
    price: '1080元/晚',
    imageUrl: '/images/room-4.jpeg',
  },
]; 