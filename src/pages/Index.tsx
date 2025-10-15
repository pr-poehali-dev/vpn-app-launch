import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const plans = [
    {
      name: "Базовый",
      price: "₽299",
      period: "/месяц",
      features: [
        "1 устройство",
        "50+ стран",
        "Стандартная скорость",
        "Поддержка 24/7"
      ],
      popular: false
    },
    {
      name: "Премиум",
      price: "₽599",
      period: "/месяц",
      features: [
        "5 устройств",
        "90+ стран",
        "Максимальная скорость",
        "Приоритетная поддержка"
      ],
      popular: true
    },
    {
      name: "Семейный",
      price: "₽899",
      period: "/месяц",
      features: [
        "10 устройств",
        "90+ стран",
        "Максимальная скорость",
        "VIP поддержка"
      ],
      popular: false
    }
  ];

  const platforms = [
    { name: "Windows", icon: "Laptop" },
    { name: "macOS", icon: "Monitor" },
    { name: "iOS", icon: "Smartphone" },
    { name: "Android", icon: "Tablet" },
    { name: "Linux", icon: "Terminal" }
  ];

  const locations = [
    { region: "Европа", countries: 35, icon: "MapPin" },
    { region: "Америка", countries: 25, icon: "MapPin" },
    { region: "Азия", countries: 20, icon: "MapPin" },
    { region: "Океания", countries: 10, icon: "MapPin" }
  ];

  const faqs = [
    {
      question: "Как начать использовать VPN?",
      answer: "Выберите подходящий тариф, создайте аккаунт и скачайте приложение для вашей платформы. Весь процесс займёт не более 2 минут."
    },
    {
      question: "Безопасны ли мои данные?",
      answer: "Мы используем военное шифрование AES-256 и не храним логи вашей активности. Ваша конфиденциальность — наш главный приоритет."
    },
    {
      question: "Можно ли использовать на нескольких устройствах?",
      answer: "Да, в зависимости от выбранного тарифа вы можете подключить от 1 до 10 устройств одновременно."
    },
    {
      question: "Есть ли гарантия возврата средств?",
      answer: "Мы предлагаем 30-дневную гарантию возврата денег без каких-либо вопросов."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Shield" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-foreground">SecureVPN</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Главная</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
            <a href="#locations" className="text-muted-foreground hover:text-foreground transition-colors">Локации</a>
            <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">Поддержка</a>
          </div>
          <Button className="hidden md:flex">Начать</Button>
        </div>
      </nav>

      <section id="home" className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Безопасный интернет без границ
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Защитите свои данные и получите доступ к контенту из любой точки мира с военным шифрованием и серверами в 90+ странах
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 h-14">
                Попробовать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                Узнать больше
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">10M+</div>
                <div className="text-sm text-muted-foreground">Пользователей</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">90+</div>
                <div className="text-sm text-muted-foreground">Стран</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full"></div>
            <Card className="relative border-2 shadow-2xl">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Подключено
                  </Badge>
                  <Icon name="Shield" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl">Защищённое соединение</CardTitle>
                <CardDescription>Ваш IP скрыт, данные зашифрованы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Локация</span>
                    <span className="font-medium">Нидерланды, Амстердам</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Скорость</span>
                    <span className="font-medium">245 Мбит/с</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Протокол</span>
                    <span className="font-medium">WireGuard</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <Button className="w-full" variant="outline">Сменить сервер</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Доступно на всех платформах</h2>
          <p className="text-muted-foreground text-lg">Одна подписка для всех ваших устройств</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {platforms.map((platform, index) => (
            <Card key={index} className="hover:shadow-lg transition-all hover-scale cursor-pointer">
              <CardContent className="pt-8 pb-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name={platform.icon as any} className="text-primary" size={32} />
                </div>
                <p className="font-semibold text-lg">{platform.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="pricing" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите свой тариф</h2>
          <p className="text-muted-foreground text-lg">Прозрачные цены без скрытых платежей</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-2xl transition-all ${plan.popular ? 'border-primary border-2 scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Популярный</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1 pt-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Выбрать план
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="locations" className="container mx-auto px-6 py-20 bg-gradient-to-b from-blue-50/50 to-transparent rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Серверы по всему миру</h2>
          <p className="text-muted-foreground text-lg">Более 2000 серверов в 90+ странах</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <Card key={index} className="hover:shadow-lg transition-all hover-scale">
              <CardContent className="pt-8 pb-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name={location.icon as any} className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">{location.region}</h3>
                  <p className="text-muted-foreground">{location.countries} стран</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="support" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
          <p className="text-muted-foreground text-lg">Ответы на популярные вопросы о нашем сервисе</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Не нашли ответ на свой вопрос?</p>
            <Button size="lg" variant="outline">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Связаться с поддержкой
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Shield" className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold">SecureVPN</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Надёжная защита вашей конфиденциальности в интернете
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Приложения</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Серверы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Конфиденциальность</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 SecureVPN. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
