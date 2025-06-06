import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GamesGrid = () => {
  const games = [
    {
      id: 1,
      name: "Book of Dead",
      category: "Слот",
      image: "🏺",
      multiplier: "x5000",
    },
    {
      id: 2,
      name: "Starburst",
      category: "Слот",
      image: "⭐",
      multiplier: "x500",
    },
    {
      id: 3,
      name: "European Roulette",
      category: "Рулетка",
      image: "🎡",
      multiplier: "x35",
    },
    {
      id: 4,
      name: "Blackjack Classic",
      category: "Карты",
      image: "🃏",
      multiplier: "x3",
    },
    {
      id: 5,
      name: "Mega Moolah",
      category: "Джекпот",
      image: "💎",
      multiplier: "MEGA",
    },
    {
      id: 6,
      name: "Lightning Baccarat",
      category: "Live",
      image: "⚡",
      multiplier: "x500",
    },
    {
      id: 7,
      name: "Wolf Gold",
      category: "Слот",
      image: "🐺",
      multiplier: "x2500",
    },
    {
      id: 8,
      name: "Sweet Bonanza",
      category: "Слот",
      image: "🍭",
      multiplier: "x21000",
    },
  ];

  return (
    <section id="games" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4 font-montserrat">
            Популярные игры
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Лучшие слоты и настольные игры с высокими выплатами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <Card
              key={game.id}
              className="bg-gradient-to-b from-gray-800 to-black border-gray-700 hover:border-yellow-500 transition-all hover:scale-105 group cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-6xl">
                    {game.image}
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {game.multiplier}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                    <Button className="opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-500 text-black font-bold hover:bg-yellow-600">
                      Играть
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white mb-1">{game.name}</h3>
                  <p className="text-gray-400 text-sm">{game.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold px-8 py-3 hover:from-yellow-600 hover:to-yellow-700">
            Показать все игры
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GamesGrid;
