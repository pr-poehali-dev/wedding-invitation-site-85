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
    <div className="min-h-screen bg-gradient-to-br from-[#6B5D56] via-[#8B7D76] to-[#A69589] py-12">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        
        {/* Hero Card */}
        <Card className="bg-[#2B2320] border-none shadow-2xl rounded-3xl overflow-hidden w-full">
          <CardContent className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-light text-[#E8DDD0] tracking-widest" style={{ fontFamily: 'Cormorant, serif' }}>
                ЮРИЙ<br />&<br />ЮЛИЯ
              </h1>
              <p className="text-2xl text-[#C9B5A0] font-light" style={{ fontFamily: 'Cormorant, serif' }}>
                06/08/2026
              </p>
            </div>
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2B2320]/80 flex items-end justify-center p-8">
                <div className="text-center space-y-2">
                  <Icon name="Image" size={60} className="text-[#C9B5A0] mx-auto opacity-40 mb-4" />
                  <p className="text-[#C9B5A0] text-xs">Место для вашего фото</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Welcome Card */}
        <Card className="bg-white border-none shadow-xl rounded-3xl w-full">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-light text-[#2B2320] text-center tracking-wider" style={{ fontFamily: 'Cormorant, serif' }}>
              ДОРОГИЕ ГОСТИ!
            </h2>
            <p className="text-base text-[#5C4F47] text-center leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Скоро наступит день, который будет для нас особенным - ДЕНЬ НАШЕЙ СВАДЬБЫ.
              Мы будем счастливы оказаться в окружении близких нам людей, поэтому приглашаем Вас
              разделить с нами этот праздник!
            </p>
            <div className="text-center pt-4">
              <p className="text-sm text-[#8B7D76] font-light tracking-wider" style={{ fontFamily: 'Cormorant, serif' }}>
                АВГУСТ 2026
              </p>
            </div>
            <div className="grid grid-cols-7 gap-3 max-w-lg mx-auto">
              {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'].map((day) => (
                <div key={day} className="text-center text-xs font-medium text-[#5C4F47] py-2">
                  {day}
                </div>
              ))}
              {Array.from({ length: firstDayOffset }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {calendarDays.map((day) => (
                <div
                  key={day}
                  className="text-center py-3 text-sm rounded-lg relative text-[#5C4F47] hover:bg-[#F5EDE0] transition-all"
                >
                  {day}
                  {day === 6 && (
                    <Icon name="Heart" size={36} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-red-400/30 text-red-400/30" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Timeline Card - Combined */}
        <Card className="bg-[#4A3832] border-none shadow-xl rounded-3xl w-full">
          <CardContent className="p-8 space-y-8">
            <h3 className="text-2xl font-light text-[#E8DDD0] tracking-wider text-center" style={{ fontFamily: 'Cormorant, serif' }}>
              TIMING OF THE DAY
            </h3>
            
            <div className="space-y-8">
              {/* Gathering */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-[#C9B5A0] p-2 rounded-lg">
                    <Icon name="Clock" size={20} className="text-[#2B2320]" />
                  </div>
                  <h4 className="text-lg text-[#E8DDD0] font-light" style={{ fontFamily: 'Cormorant, serif' }}>
                    18:00 - СБОР ГОСТЕЙ
                  </h4>
                </div>
                <div className="aspect-video bg-gradient-to-br from-[#6B5D56] to-[#4A3832] rounded-xl flex items-center justify-center">
                  <Icon name="Users" size={40} className="text-[#C9B5A0] opacity-30" />
                </div>
                <p className="text-sm text-[#C9B5A0]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Время пролетит незаметно за игристым на фуршете и общением с другими гостями
                </p>
              </div>

              {/* Ceremony */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-[#C9B5A0] p-2 rounded-lg">
                    <Icon name="Heart" size={20} className="text-[#2B2320]" />
                  </div>
                  <h4 className="text-lg text-[#E8DDD0] font-light" style={{ fontFamily: 'Cormorant, serif' }}>
                    18:30 - ЦЕРЕМОНИЯ
                  </h4>
                </div>
                <div className="aspect-video bg-gradient-to-br from-[#6B5D56] to-[#4A3832] rounded-xl flex items-center justify-center">
                  <Icon name="Heart" size={40} className="text-[#C9B5A0] opacity-30" />
                </div>
                <p className="text-sm text-[#C9B5A0]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Вы станете свидетелями трогательного момента, приготовьте носовые платочки
                </p>
              </div>

              {/* Banquet */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-[#C9B5A0] p-2 rounded-lg">
                    <Icon name="Utensils" size={20} className="text-[#2B2320]" />
                  </div>
                  <h4 className="text-lg text-[#E8DDD0] font-light" style={{ fontFamily: 'Cormorant, serif' }}>
                    19:00-01:00 - БАНКЕТ
                  </h4>
                </div>
                <div className="aspect-video bg-gradient-to-br from-[#6B5D56] to-[#4A3832] rounded-xl flex items-center justify-center">
                  <Icon name="Sparkles" size={40} className="text-[#C9B5A0] opacity-30" />
                </div>
                <p className="text-sm text-[#C9B5A0]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Время вкусной еды, танцев и развлечений
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location Card */}
        <Card className="bg-white border-none shadow-xl rounded-3xl w-full">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-light text-[#2B2320] text-center tracking-wider" style={{ fontFamily: 'Cormorant, serif' }}>
              LOCATION
            </h2>
            <div className="aspect-video bg-gradient-to-br from-[#E8DDD0] to-[#C9B5A0] rounded-2xl flex items-center justify-center">
              <Icon name="MapPin" size={60} className="text-[#4A3832] opacity-40" />
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold text-[#2B2320]" style={{ fontFamily: 'Cormorant, serif' }}>
                Hide
              </h3>
              <p className="text-lg text-[#5C4F47]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                г. Нижний Новгород, Рождественская 40А
              </p>
              <Button 
                className="bg-[#4A3832] hover:bg-[#2B2320] text-[#E8DDD0] rounded-full px-8 py-6 text-sm tracking-wider"
                onClick={() => window.open('https://yandex.ru/profile/-/CLhDQ26B', '_blank')}
              >
                СМОТРЕТЬ НА КАРТЕ
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Dress Code Card */}
        <Card className="bg-white border-none shadow-xl rounded-3xl w-full">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-light text-[#2B2320] text-center tracking-wider" style={{ fontFamily: 'Cormorant, serif' }}>
              DRESS CODE
            </h2>
            <p className="text-sm text-[#5C4F47] text-center leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Нам будет приятно, если Вы поддержите стилистику нашей свадьбы и используете в своих нарядах предложенные цвета
            </p>
            <div className="flex justify-center gap-6 py-6">
              <div className="w-16 h-16 rounded-full bg-[#1A1614] shadow-lg" />
              <div className="w-16 h-16 rounded-full bg-[#4A3832] shadow-lg" />
              <div className="w-16 h-16 rounded-full bg-[#C9B5A0] shadow-lg" />
              <div className="w-16 h-16 rounded-full bg-[#E8DDD0] shadow-lg border-2 border-[#C9B5A0]" />
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#E8DDD0] to-[#C9B5A0] rounded-xl" />
              <div className="aspect-[3/4] bg-gradient-to-br from-[#C9B5A0] to-[#8B7D76] rounded-xl" />
              <div className="aspect-[3/4] bg-gradient-to-br from-[#8B7D76] to-[#6B5D56] rounded-xl" />
            </div>
          </CardContent>
        </Card>

        {/* RSVP Form Card */}
        <Card className="bg-white border-none shadow-xl rounded-3xl w-full">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-light text-[#2B2320] text-center tracking-wider" style={{ fontFamily: 'Cormorant, serif' }}>
              DETAILS
            </h2>
            <p className="text-sm text-[#5C4F47] text-center leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Ваши улыбки и смех подарят нам незабываемое счастье в этот день. 
              Пожалуйста, подтвердите свое присутствие до 01.07.2026 и заполните анкету ниже, 
              чтобы мы смогли учесть Ваши пожелания
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#2B2320] text-xs tracking-wider">ФАМИЛИЯ</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="border-[#C9B5A0] focus:border-[#4A3832] rounded-xl bg-[#F9F6F3]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#2B2320] text-xs tracking-wider">ИМЯ</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="border-[#C9B5A0] focus:border-[#4A3832] rounded-xl bg-[#F9F6F3]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guestCount" className="text-[#2B2320] text-xs tracking-wider">КОЛИЧЕСТВО ГОСТЕЙ</Label>
                <Input
                  id="guestCount"
                  type="number"
                  min="1"
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  required
                  className="border-[#C9B5A0] focus:border-[#4A3832] rounded-xl bg-[#F9F6F3]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="alcoholPreference" className="text-[#2B2320] text-xs tracking-wider">ПРЕДПОЧТЕНИЯ ПО АЛКОГОЛЮ</Label>
                <Input
                  id="alcoholPreference"
                  value={formData.alcoholPreference}
                  onChange={(e) => setFormData({ ...formData, alcoholPreference: e.target.value })}
                  placeholder="Например: вино, шампанское, безалкогольное"
                  className="border-[#C9B5A0] focus:border-[#4A3832] rounded-xl bg-[#F9F6F3]"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-[#2B2320] text-xs tracking-wider">БУДЕТЕ ЛИ ВЫ ПРИСУТСТВОВАТЬ?</Label>
                <RadioGroup
                  value={formData.attending}
                  onValueChange={(value) => setFormData({ ...formData, attending: value })}
                  required
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" className="border-[#4A3832]" />
                    <Label htmlFor="yes" className="cursor-pointer text-[#5C4F47]">Да</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" className="border-[#4A3832]" />
                    <Label htmlFor="no" className="cursor-pointer text-[#5C4F47]">Нет</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full bg-[#4A3832] hover:bg-[#2B2320] text-[#E8DDD0] rounded-full py-6 text-sm tracking-widest">
                ОТПРАВИТЬ
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Countdown Card */}
        <Card className="bg-[#4A3832] border-none shadow-xl rounded-3xl w-full">
          <CardContent className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-light text-[#E8DDD0] tracking-wider" style={{ fontFamily: 'Cormorant, serif' }}>
                БУДЕМ РАДЫ УВИДЕТЬСЯ С ВАМИ!
              </h2>
              <p className="text-lg text-[#C9B5A0]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                До встречи осталось:
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-[#E8DDD0]" style={{ fontFamily: 'Cormorant, serif' }}>
                  {timeLeft.days}
                </div>
                <div className="text-xs text-[#C9B5A0] tracking-wider">ДНЕЙ</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-[#E8DDD0]" style={{ fontFamily: 'Cormorant, serif' }}>
                  {timeLeft.hours}
                </div>
                <div className="text-xs text-[#C9B5A0] tracking-wider">ЧАСОВ</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-[#E8DDD0]" style={{ fontFamily: 'Cormorant, serif' }}>
                  {timeLeft.minutes}
                </div>
                <div className="text-xs text-[#C9B5A0] tracking-wider">МИНУТ</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-[#E8DDD0]" style={{ fontFamily: 'Cormorant, serif' }}>
                  {timeLeft.seconds}
                </div>
                <div className="text-xs text-[#C9B5A0] tracking-wider">СЕКУНД</div>
              </div>
            </div>

            <div className="mt-8 aspect-video bg-gradient-to-br from-[#6B5D56] to-[#4A3832] rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <Icon name="Heart" size={60} className="text-[#C9B5A0] mx-auto opacity-40" />
                <p className="text-[#C9B5A0] text-xs">Место для вашего фото</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default Index;