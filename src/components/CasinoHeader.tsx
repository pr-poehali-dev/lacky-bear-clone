import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CasinoHeader = () => {
  return (
    <header className="bg-black border-b-2 border-yellow-500 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
            <span className="text-2xl">🐻</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-yellow-400 font-montserrat">
              Lucky Bear
            </h1>
            <p className="text-xs text-gray-400">CASINO</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#games"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Игры
          </a>
          <a
            href="#slots"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Слоты
          </a>
          <a
            href="#live"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Live
          </a>
          <a
            href="#deposit"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Депозит
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black"
          >
            Войти
          </Button>
          <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold hover:from-yellow-600 hover:to-yellow-700">
            Регистрация
          </Button>
        </div>
      </div>
    </header>
  );
};

export default CasinoHeader;
