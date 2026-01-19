import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    guestCount: '',
    alcoholPreference: '',
    attending: ''
  });

  useEffect(() => {
    const weddingDate = new Date('2026-08-06T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Спасибо! Ваш ответ принят', {
      description: 'Мы свяжемся с вами для уточнения деталей'
    });
    setFormData({
      lastName: '',
      firstName: '',
      guestCount: '',
      alcoholPreference: '',
      attending: ''
    });
  };

  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const firstDayOffset = 4;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] via-[#F5EDE0] to-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-20">
        
        {/* Hero Section */}
        <section className="text-center space-y-8 animate-fade-in">
          <div className="relative w-full aspect-[3/2] max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/20 to-[#D2B48C]/20 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <Icon name="Image" size={80} className="text-[#8B4513] mx-auto opacity-50" />
                <p className="text-[#8B4513] text-sm font-light">Место для вашего фото</p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-6xl md:text-7xl font-light text-[#8B4513]" style={{ fontFamily: 'Cormorant, serif' }}>
              Юрий & Юлия
            </h1>
            <p className="text-3xl md:text-4xl text-[#A0826D] font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              06/08/2026
            </p>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-[#8B4513]" style={{ fontFamily: 'Cormorant, serif' }}>
              ДОРОГИЕ ГОСТИ!
            </h2>
            <p className="text-lg md:text-xl text-[#6B5744] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Скоро наступит день, который будет для нас особенным - ДЕНЬ НАШЕЙ СВАДЬБЫ.
              Мы будем счастливы оказаться в окружении близких нам людей, поэтому приглашаем Вас
              разделить с нами этот праздник!
            </p>
          </div>

          <Card className="max-w-md mx-auto border-[#D2B48C] shadow-lg">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-semibold text-[#8B4513]" style={{ fontFamily: 'Cormorant, serif' }}>
                  Август 2026
                </h3>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-[#8B4513] p-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: firstDayOffset }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {calendarDays.map((day) => (
                  <div
                    key={day}
                    className={`text-center p-2 rounded-lg ${
                      day === 6
                        ? 'bg-[#8B4513] text-white font-bold relative'
                        : 'text-[#6B5744]'
                    }`}
                  >
                    {day}
                    {day === 6 && (
                      <Icon name="Heart" size={12} className="absolute -top-1 -right-1 fill-red-500 text-red-500" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Timeline Section */}
        <section className="space-y-12 animate-fade-in">
          <h2 className="text-4xl font-light text-[#8B4513] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Программа дня
          </h2>

          <div className="space-y-8">
            {/* Gathering */}
            <Card className="border-[#D2B48C] shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#D2B48C] p-3 rounded-full">
                    <Icon name="Clock" size={24} className="text-[#8B4513]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#8B4513]" style={{ fontFamily: 'Cormorant, serif' }}>
                    Сбор гостей
                  </h3>
                </div>
                <div className="aspect-video bg-gradient-to-br from-[#F5EDE0] to-[#D2B48C] rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={60} className="text-[#8B4513] opacity-30" />
                </div>
                <p className="text-[#6B5744]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Время пролетит незаметно за игристым на фуршете и общением с другими гостями
                </p>
              </CardContent>
            </Card>

            {/* Ceremony */}
            <Card className="border-[#D2B48C] shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#D2B48C] p-3 rounded-full">
                    <Icon name="Clock" size={24} className="text-[#8B4513]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#8B4513]" style={{ fontFamily: 'Cormorant, serif' }}>
                    16:00 - Церемония
                  </h3>
                </div>
                <div className="aspect-video bg-gradient-to-br from-[#F5EDE0] to-[#D2B48C] rounded-lg flex items-center justify-center">
                  <Icon name="Heart" size={60} className="text-[#8B4513] opacity-30" />
                </div>
                <p className="text-[#6B5744]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Вы станете свидетелями трогательного момента, приготовьте носовые платочки
                </p>
              </CardContent>
            </Card>

            {/* Banquet */}
            <Card className="border-[#D2B48C] shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#D2B48C] p-3 rounded-full">
                    <Icon name="Clock" size={24} className="text-[#8B4513]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#8B4513]" style={{ fontFamily: 'Cormorant, serif' }}>
                    17:00-22:00 - Банкет
                  </h3>
                </div>
                <div className="aspect-video bg-gradient-to-br from-[#F5EDE0] to-[#D2B48C] rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={60} className="text-[#8B4513] opacity-30" />
                </div>
                <p className="text-[#6B5744]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Время вкусной еды, танцев и развлечений
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Location Section */}
        <section className="space-y-6 animate-fade-in">
          <h2 className="text-4xl font-light text-[#8B4513] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Локация
          </h2>
          
          <Card className="border-[#D2B48C] shadow-md">
            <CardContent className="p-6 space-y-4">
              <div className="aspect-video bg-gradient-to-br from-[#F5EDE0] to-[#D2B48C] rounded-lg flex items-center justify-center">
                <Icon name="MapPin" size={80} className="text-[#8B4513] opacity-30" />
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold text-[#8B4513]" style={{ fontFamily: 'Cormoant, serif' }}>
                  Hide
                </h3>
                <p className="text-lg text-[#6B5744]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  г. Нижний Новгород, Рождественская 40А
                </p>
                <Button 
                  className="bg-[#8B4513] hover:bg-[#6B4423] text-white"
                  onClick={() => window.open('https://yandex.ru/profile/-/CLhDQ26B', '_blank')}
                >
                  <Icon name="Map" size={18} className="mr-2" />
                  Смотреть на карте
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Dress Code Section */}
        <section className="space-y-6 animate-fade-in">
          <h2 className="text-4xl font-light text-[#8B4513] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Дресс-код
          </h2>
          
          <Card className="border-[#D2B48C] shadow-md">
            <CardContent className="p-8 space-y-6">
              <p className="text-center text-lg text-[#6B5744] max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Нам будет приятно, если Вы поддержите стилистику нашей свадьбы и используете в своих нарядах предложенные цвета
              </p>
              <div className="flex justify-center gap-6">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-black shadow-lg mx-auto border-2 border-[#D2B48C]" />
                  <p className="text-sm text-[#6B5744]">Черный</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-[#8B4513] shadow-lg mx-auto border-2 border-[#D2B48C]" />
                  <p className="text-sm text-[#6B5744]">Коричневый</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-[#F5F5DC] shadow-lg mx-auto border-2 border-[#D2B48C]" />
                  <p className="text-sm text-[#6B5744]">Кремовый</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-[#D2B48C] shadow-lg mx-auto border-2 border-[#8B4513]" />
                  <p className="text-sm text-[#6B5744]">Бежевый</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* RSVP Section */}
        <section className="space-y-6 animate-fade-in">
          <h2 className="text-4xl font-light text-[#8B4513] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            DETAILS
          </h2>
          
          <Card className="border-[#D2B48C] shadow-md">
            <CardContent className="p-8 space-y-6">
              <p className="text-center text-lg text-[#6B5744] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Ваши улыбки и смех подарят нам незабываемое счастье в этот день. 
                Пожалуйста, подтвердите свое присутствие до 01.07.2026 и заполните анкету ниже, 
                чтобы мы смогли учесть Ваши пожелания
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-[#8B4513]">Фамилия</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="border-[#D2B48C] focus:border-[#8B4513]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-[#8B4513]">Имя</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="border-[#D2B48C] focus:border-[#8B4513]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guestCount" className="text-[#8B4513]">Сколько будет человек</Label>
                  <Input
                    id="guestCount"
                    type="number"
                    min="1"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    required
                    className="border-[#D2B48C] focus:border-[#8B4513]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="alcoholPreference" className="text-[#8B4513]">Предпочтения по алкоголю</Label>
                  <Input
                    id="alcoholPreference"
                    value={formData.alcoholPreference}
                    onChange={(e) => setFormData({ ...formData, alcoholPreference: e.target.value })}
                    placeholder="Например: вино, шампанское, безалкогольное"
                    className="border-[#D2B48C] focus:border-[#8B4513]"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-[#8B4513]">Будете ли вы присутствовать на свадьбе?</Label>
                  <RadioGroup
                    value={formData.attending}
                    onValueChange={(value) => setFormData({ ...formData, attending: value })}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="cursor-pointer text-[#6B5744]">Да</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="cursor-pointer text-[#6B5744]">Нет</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full bg-[#8B4513] hover:bg-[#6B4423] text-white text-lg py-6">
                  Отправить ответ
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Countdown Section */}
        <section className="space-y-8 animate-fade-in text-center pb-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-light text-[#8B4513]" style={{ fontFamily: 'Cormorant, serif' }}>
              Будем рады увидеться с Вами!
            </h2>
            <p className="text-xl text-[#6B5744]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              До встречи осталось:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Card className="border-[#D2B48C] shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#8B4513]" style={{ fontFamily: 'Cormorant, serif' }}>
                  {timeLeft.days}
                </div>
                <div className="text-sm text-[#6B5744] mt-2">дней</div>
              </CardContent>
            </Card>
            <Card className="border-[#D2B48C] shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#8B4513]" style={{ fontFamily: 'Cormorant, serif' }}>
                  {timeLeft.hours}
                </div>
                <div className="text-sm text-[#6B5744] mt-2">часов</div>
              </CardContent>
            </Card>
            <Card className="border-[#D2B48C] shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#8B4513]" style={{ fontFamily: 'Cormorant, serif' }}>
                  {timeLeft.minutes}
                </div>
                <div className="text-sm text-[#6B5744] mt-2">минут</div>
              </CardContent>
            </Card>
            <Card className="border-[#D2B48C] shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#8B4513]" style={{ fontFamily: 'Cormorant, serif' }}>
                  {timeLeft.seconds}
                </div>
                <div className="text-sm text-[#6B5744] mt-2">секунд</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 aspect-video max-w-2xl mx-auto bg-gradient-to-br from-[#F5EDE0] to-[#D2B48C] rounded-2xl flex items-center justify-center shadow-2xl">
            <div className="text-center space-y-4 p-8">
              <Icon name="Heart" size={80} className="text-[#8B4513] mx-auto opacity-50" />
              <p className="text-[#8B4513] text-sm font-light">Место для вашего фото</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Index;
