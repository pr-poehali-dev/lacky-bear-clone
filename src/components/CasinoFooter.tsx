const CasinoFooter = () => {
  return (
    <footer className="bg-black border-t-2 border-yellow-500 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-xl">🐻</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400 font-montserrat">
                  Lucky Bear
                </h3>
                <p className="text-xs text-gray-400">CASINO</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Премиальное онлайн казино с лицензией и честной игрой
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Игры</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Слоты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Рулетка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Блэкджек
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Live казино
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Условия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Ответственная игра
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📧 support@luckybear.casino</li>
              <li>💬 Онлайн чат 24/7</li>
              <li>📱 Telegram: @luckybear</li>
              <li>🌐 luckybear.casino</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 Lucky Bear Casino. Все права защищены.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm">18+</span>
              <span className="text-2xl">🔞</span>
              <span className="text-2xl">🎰</span>
              <span className="text-2xl">🛡️</span>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-yellow-400 font-bold text-lg">
              🌟 Официальный сайт: luckybear.casino 🌟
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Лицензия №12345 • Честная игра • SSL защита
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CasinoFooter;
