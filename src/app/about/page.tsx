import AboutHero from '@/components/AboutHero';

// Note: The server-side logic is temporarily removed for debugging the Hero component.
// We are passing dummy props as the component is currently hardcoded.

const AboutPage = () => {
  return (
    <div>
      <AboutHero mediaType="none" mediaSrc="" />

      <div className="container mx-auto px-6 py-16">
        <div className="prose lg:prose-xl max-w-4xl mx-auto text-gray-800">
          <h2 className="text-3xl font-bold text-center mb-8">源于一次旅行的热爱</h2>
          
          <p>在一次偶然的背包旅行中，我踏上了新疆的土地，瞬间被那拉提草原的壮丽景色所震撼。无垠的绿色地毯在蓝天白云下延伸，远处雪山巍峨，哈萨克牧民的毡房点缀其间，炊烟袅袅，构成了一幅宁静而充满生命力的画卷。</p>
          
          <p>我在这里放慢了脚步，与当地人一同生活，骑马、喝奶茶、听他们讲述草原的故事。那份远离尘嚣的淳朴与真诚，深深地打动了我。我意识到，这不仅仅是一片美丽的风景，更是一种能让心灵回归宁静的生活方式。</p>
          
          <p>于是，一个梦想悄然萌生：我要在这里建造一个家，一个能让更多像我一样的旅人停下脚步，感受草原呼吸，分享这份宁静与美好的地方。这便是我们民宿的由来。它不是一桩生意，而是我热爱的延伸，是我希望与你分享的一个梦。</p>
          
          <p>我们希望每一位来到这里的客人，都能找到属于自己的那份宁静，体验真正的草原生活，带着满满的故事和一颗被治愈的心，重新出发。</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 