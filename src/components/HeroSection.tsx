
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffd700" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text mb-6 font-montserrat">
          LUCKY BEAR
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Премиальное онлайн казино с лучшими играми и щедрыми бонусами
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <Button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 text-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all">
            🎰 Играть сейчас
          </Button>
          <Button variant="outline" className="border-2 border-yellow-500 text-yellow-400 px-8 py-3 text-lg hover:bg-yellow-500 hover:text-black">
            💰 Бонус +100%
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-yellow-500 p-6 hover:scale-105 transition-transform">
            <div className="text-4xl mb-4">🎲</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Настольные игры</h3>
            <p className="text-gray-300">Покер, блэкджек, рулетка</p>
          </Card>
          
          <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-yellow-500 p-6 hover:scale-105 transition-transform">
            <div className="text-4xl mb-4">🎰</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Слоты</h3>
            <p className="text-gray-300">500+ игровых автоматов</p>
          </Card>
          
          <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-yellow-500 p-6 hover:scale-105 transition-transform">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Live казино</h3>
            <p className="text-gray-300">Игра с живыми дилерами</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
