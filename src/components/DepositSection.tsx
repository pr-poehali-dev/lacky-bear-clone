import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const DepositSection = () => {
  const [amount, setAmount] = useState(500);
  const [currency, setCurrency] = useState("RUB");

  const quickAmounts = [500, 1000, 2500, 5000];

  return (
    <section id="deposit" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4 font-montserrat">
            Пополнение счета
          </h2>
          <p className="text-gray-300 text-lg">
            Быстро и безопасно пополните баланс
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-yellow-500">
            <CardHeader>
              <CardTitle className="text-yellow-400 text-2xl text-center">
                💳 Депозит
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-white mb-2 block">Валюта</Label>
                  <Select value={currency} onValueChange={setCurrency}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="RUB">🇷🇺 Рубли (₽)</SelectItem>
                      <SelectItem value="USD">🇺🇸 Доллары ($)</SelectItem>
                      <SelectItem value="EUR">🇪🇺 Евро (€)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-white mb-2 block">Сумма</Label>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="bg-gray-700 border-gray-600 text-white"
                    min={currency === "RUB" ? 500 : 5}
                  />
                </div>
              </div>

              <div>
                <Label className="text-white mb-3 block">
                  Быстрый выбор суммы
                </Label>
                <div className="grid grid-cols-4 gap-2">
                  {quickAmounts.map((quickAmount) => (
                    <Button
                      key={quickAmount}
                      variant={amount === quickAmount ? "default" : "outline"}
                      className={
                        amount === quickAmount
                          ? "bg-yellow-500 text-black"
                          : "border-gray-600 text-gray-300 hover:border-yellow-500"
                      }
                      onClick={() => setAmount(quickAmount)}
                    >
                      {currency === "RUB"
                        ? `${quickAmount}₽`
                        : `$${quickAmount / 100}`}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <Label className="text-white mb-2 block">Реквизиты карты</Label>
                <div className="bg-black p-3 rounded font-mono text-yellow-400 text-center text-lg tracking-wider">
                  2200 7019 2768 6969
                </div>
                <p className="text-gray-400 text-sm mt-2 text-center">
                  Минимальный депозит: {currency === "RUB" ? "500₽" : "$5"}
                </p>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div>
                  <p className="text-white font-semibold">К зачислению:</p>
                  <p className="text-yellow-400 text-xl font-bold">
                    {currency === "RUB" ? `${amount}₽` : `$${amount / 100}`}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Бонус +100%</p>
                  <p className="text-green-400 font-bold">
                    +{currency === "RUB" ? `${amount}₽` : `$${amount / 100}`}
                  </p>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 text-lg hover:from-red-700 hover:to-red-800">
                💰 Пополнить баланс
              </Button>

              <div className="flex items-center justify-center space-x-4 text-gray-400">
                <span className="text-2xl">🔒</span>
                <span className="text-2xl">💳</span>
                <span className="text-2xl">✅</span>
              </div>
              <p className="text-center text-gray-500 text-sm">
                Защищенные платежи • SSL шифрование • Мгновенное зачисление
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DepositSection;
