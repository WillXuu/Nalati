export interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
  title: string;
  description: string;
  className?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    src: '/images/gallery-1.jpeg',
    alt: '那拉提草原的日出',
    title: '草原日出',
    description: '清晨的第一缕阳光洒在广袤的草原上。',
    className: 'lg:col-span-2 lg:row-span-2',
  },
  {
    id: 2,
    type: 'video',
    src: '/videos/gallery-2.mp4',
    alt: '雪山下的牛羊',
    title: '雪山下的生机',
    description: '远处的雪山与近处的牛羊构成一幅和谐的画面。',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/gallery-3.jpeg',
    alt: '哈萨克族的毡房',
    title: '草原之家',
    description: '白色的毡房点缀在绿色的草原上，是牧民的家。',
  },
  {
    id: 4,
    type: 'image',
    src: '/images/gallery-4.jpeg',
    alt: '夏季盛开的野花',
    title: '遍地花海',
    description: '夏季，草原上开满了五颜六色的野花。',
  },
  {
    id: 5,
    type: 'video',
    src: '/videos/gallery-5.mp4',
    alt: '蜿蜒的巩乃斯河',
    title: '生命之河',
    description: '巩乃斯河静静流淌，滋养着这片土地。',
    className: 'lg:col-span-2',
  },
  {
    id: 6,
    type: 'image',
    src: '/images/gallery-6.jpeg',
    alt: '金色的秋季桦树林',
    title: '金色童话',
    description: '秋季的桦树林，满目尽是金黄。',
  },
  {
    id: 7,
    type: 'image',
    src: '/images/gallery-7.jpeg',
    alt: '星空下的草原',
    title: '璀璨星河',
    description: '夜晚的草原，可以欣赏到银河和流星。',
  },
  {
    id: 8,
    type: 'image',
    src: '/images/gallery-8.jpeg',
    alt: '牧民在马背上',
    title: '马背上的民族',
    description: '矫健的牧民骑着马，驰骋在草原上。',
  },
]; 