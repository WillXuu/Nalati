import { Phone, Mail, MapPin, Navigation } from 'lucide-react';

const ContactPage = () => {
  const address = "新疆伊犁那拉提旅游风景区";
  const amapUrl = `https://www.amap.com/search?query=${encodeURIComponent(address)}`;

  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">联系我们</h1>
          <p className="mt-4 text-lg text-gray-600">期待您的光临，以下是我们的联系方式和地址</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">民宿地址</h3>
                <p className="text-gray-600 mt-1">{address}</p>
                <a 
                  href={amapUrl}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300 inline-flex items-center mt-2"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  在高德地图上查看
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">预定电话</h3>
                <p className="text-gray-600 mt-1">
                  <a href="tel:188-8888-8888" className="hover:text-blue-700">188-8888-8888</a>（点击拨打）
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">电子邮箱</h3>
                <p className="text-gray-600 mt-1">
                  <a href="mailto:contact@nalati-retreat.com" className="hover:text-blue-700">contact@nalati-retreat.com</a>
                </p>
              </div>
            </div>
             <div className="flex items-start">
              <div className="flex-shrink-0">
                 <svg className="h-7 w-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11.535c-1.336 0-2.673.236-3.945.69-.13.047-.254.11-.37.192-.403.284-.78.618-1.12.99-.34.37-.643.78-.894 1.215-.25.435-.44.9-.56 1.375-.12.473-.173.955-.17 1.442 0 .48.05.95.143 1.41.095.46.23.91.4 1.35.17.44.38.86.62 1.26.24.4.52.78.82 1.13s.63.68.98.98c.35.3.73.58 1.13.82.4.24.81.45 1.26.62.44.17.89.3 1.35.4.46.09.93.14 1.41.14.487 0 .97-.053 1.442-.17.474-.12.94-.31 1.375-.56.435-.25.845-.554 1.215-.894.37-.34.704-.717.99-1.12.28-.402.53-.82.69-1.28.05-.14.08-.28.1-.43.45-1.26.68-2.58.68-3.91s-.23-2.65-.68-3.91c-.02-.15-.05-.29-.1-.43-.16-.46-.39-.88-.69-1.28-.286-.403-.618-.78-.99-1.12-.37-.34-.78-.643-1.215-.894-.435-.25-.9-.44-1.375-.56-.473-.12-.955-.17-1.442-.17zM9.5 9.5a1 1 0 100-2 1 1 0 000 2zm5 0a1 1 0 100-2 1 1 0 000 2z"/>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">微信咨询</h3>
                <p className="text-gray-600 mt-1">扫描二维码或搜索微信号: nalati_helper</p>
                {/* You can place a QR code image here */}
                <div className="w-32 h-32 mt-2 bg-gray-200 flex items-center justify-center">
                  <span className="text-sm text-gray-500">二维码占位</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="h-96 md:h-full bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
               <h3 className="text-2xl font-semibold">位置示意</h3>
               <p className="mt-2">这里可以放置一张静态地图图片</p>
               <a 
                  href={amapUrl}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  在地图上打开
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 