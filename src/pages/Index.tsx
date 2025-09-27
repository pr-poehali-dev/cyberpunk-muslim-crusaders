import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigateToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Cyber Grid Background */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-cyber-dark/90 backdrop-blur-sm neon-border-cyan border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="neon-text-cyan font-orbitron text-2xl font-bold animate-neon-pulse">
              CYBER FAITH
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'cyberpunk', label: 'Киберпанк', icon: 'Cpu' },
                { id: 'religions', label: 'Религии', icon: 'Zap' },
                { id: 'future', label: 'Будущее', icon: 'Rocket' },
                { id: 'gallery', label: 'Галерея', icon: 'Image' },
                { id: 'contact', label: 'Контакты', icon: 'MessageCircle' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'neon-text-cyan neon-border-cyan'
                      : 'text-gray-400 hover:neon-text-magenta'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-orbitron text-6xl md:text-8xl font-black mb-8 animate-float glitch-effect" data-text="CYBER FAITH">
            <span className="neon-text-cyan">CYBER</span>
            <span className="neon-text-magenta"> FAITH</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Исследуйте будущее духовности в эпоху киберпанка. 
            Где древние традиции встречаются с цифровыми технологиями.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button 
              onClick={() => navigateToSection('religions')}
              className="neon-border-cyan bg-transparent hover:bg-cyber-cyan/20 text-cyber-cyan px-8 py-4 text-lg animate-glow"
            >
              <Icon name="Zap" className="mr-2" />
              Изучить Религии
            </Button>
            <Button 
              onClick={() => navigateToSection('future')}
              className="neon-border-magenta bg-transparent hover:bg-cyber-magenta/20 text-cyber-magenta px-8 py-4 text-lg"
            >
              <Icon name="Rocket" className="mr-2" />
              Взгляд в Будущее
            </Button>
          </div>
        </div>
      </section>

      {/* Cyberpunk Section */}
      <section id="cyberpunk" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-center mb-16 neon-text-green">
            КИБЕРПАНК
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-orbitron text-2xl font-bold mb-6 neon-text-cyan">
                Эпоха Цифровой Духовности
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                В мире высоких технологий и низкой жизни религия не исчезает, 
                а трансформируется. Киберпанк показывает нам будущее, где духовность 
                сливается с технологией, создавая новые формы веры.
              </p>
              <div className="space-y-4">
                {[
                  'Цифровые храмы и виртуальные паломничества',
                  'ИИ-священники и алгоритмические пророчества',
                  'Нейроинтерфейсы для духовного опыта'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Circuit" className="text-cyber-green" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-cyber-darker/50 neon-border-green">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-cyber-green/20 to-cyber-cyan/20 rounded-lg flex items-center justify-center">
                  <Icon name="Cpu" size={64} className="text-cyber-green" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Religions Section */}
      <section id="religions" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-center mb-16 neon-text-magenta">
            РЕЛИГИИ БУДУЩЕГО
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Киберпанк Ислам',
                image: '/img/91afaddd-d4bc-4036-929b-076921295bd1.jpg',
                description: 'Цифровые мечети с голографической каллиграфией. Где традиция встречается с технологией.',
                color: 'cyan',
                glitchText: 'CYBER ISLAM'
              },
              {
                title: 'Крестоносцы 2.0',
                image: '/img/7e22bde7-539b-4632-8996-c67f5bfc7f92.jpg',
                description: 'Неоновые рыцари киберпространства. Защитники цифровой веры в мире корпораций.',
                color: 'magenta',
                glitchText: 'CYBER CRUSADERS'
              },
              {
                title: 'Дзен Машин',
                image: '/img/647a86cd-096a-4ce2-a0b3-71b01733bf15.jpg',
                description: 'Буддистские храмы с квантовыми мандалами. Просветление через нейроинтерфейс.',
                color: 'green',
                glitchText: 'MACHINE ZEN'
              }
            ].map((religion, index) => (
              <div key={index} className="group" style={{ perspective: '1000px' }}>
                <Card className={`card-3d holographic matrix-bg bg-cyber-darker/50 neon-border-${religion.color} group-hover:animate-tilt-3d transition-all duration-500 transform-gpu`}>
                  <CardContent className="p-0 card-content">
                    <div className="aspect-video overflow-hidden rounded-t-lg relative">
                      <img 
                        src={religion.image} 
                        alt={religion.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className={`absolute bottom-4 left-4 glitch-effect neon-text-${religion.color} font-orbitron font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`} data-text={religion.glitchText}>
                        {religion.glitchText}
                      </div>
                    </div>
                    <div className="p-6 depth-2">
                      <h3 className={`font-orbitron text-xl font-bold mb-3 neon-text-${religion.color} group-hover:animate-neon-pulse`}>
                        {religion.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {religion.description}
                      </p>
                      <div className={`mt-4 h-1 bg-gradient-to-r from-transparent via-${religion.color === 'cyan' ? 'cyber-cyan' : religion.color === 'magenta' ? 'cyber-magenta' : 'cyber-green'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section id="future" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-center mb-16 neon-text-cyan">
            БУДУЩЕЕ
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="font-orbitron text-2xl font-bold mb-4 neon-text-magenta">
                    Цифровое Бессмертие
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Загрузка сознания в квантовые серверы. Где находится душа 
                    в мире цифровых копий?
                  </p>
                </div>
                <div>
                  <h3 className="font-orbitron text-2xl font-bold mb-4 neon-text-green">
                    Мета-Религии
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Синтез всех верований в едином цифровом пространстве. 
                    Универсальная духовность эпохи сингулярности.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-orbitron text-2xl font-bold mb-4 neon-text-cyan">
                    ИИ-Божества
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Искусственный интеллект как новая форма божественности. 
                    Алгоритмы, превосходящие человеческое понимание.
                  </p>
                </div>
                <div>
                  <h3 className="font-orbitron text-2xl font-bold mb-4 neon-text-magenta">
                    Квантовая Медитация
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Духовные практики на квантовом уровне реальности. 
                    Просветление через понимание мультивселенной.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-center mb-16 neon-text-green">
            ГАЛЕРЕЯ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/img/91afaddd-d4bc-4036-929b-076921295bd1.jpg',
              '/img/647a86cd-096a-4ce2-a0b3-71b01733bf15.jpg',
              '/img/7e22bde7-539b-4632-8996-c67f5bfc7f92.jpg'
            ].map((image, index) => (
              <div key={index} className="group" style={{ perspective: '1000px' }}>
                <Card className="card-3d holographic bg-cyber-darker/50 neon-border-cyan hover:neon-border-magenta transition-all duration-300 group-hover:animate-hologram">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden rounded-lg relative">
                      <img 
                        src={image} 
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/20 to-cyber-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Icon name="Zap" className="text-cyber-cyan animate-pulse" size={24} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-center mb-16 neon-text-magenta">
            КОНТАКТЫ
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-cyber-darker/50 neon-border-magenta">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-cyber-cyan font-semibold mb-2">
                      Имя
                    </label>
                    <Input 
                      placeholder="Введите ваше имя"
                      className="bg-cyber-dark/50 border-cyber-cyan/30 text-gray-300 focus:border-cyber-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-cyber-cyan font-semibold mb-2">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      className="bg-cyber-dark/50 border-cyber-cyan/30 text-gray-300 focus:border-cyber-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-cyber-cyan font-semibold mb-2">
                      Сообщение
                    </label>
                    <Textarea 
                      placeholder="Поделитесь вашими мыслями о будущем религии..."
                      rows={4}
                      className="bg-cyber-dark/50 border-cyber-cyan/30 text-gray-300 focus:border-cyber-cyan"
                    />
                  </div>
                  <Button className="w-full neon-border-magenta bg-transparent hover:bg-cyber-magenta/20 text-cyber-magenta py-3 text-lg">
                    <Icon name="Send" className="mr-2" />
                    Отправить в Киберпространство
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t neon-border-cyan/30">
        <div className="container mx-auto px-6 text-center">
          <div className="neon-text-cyan font-orbitron text-2xl font-bold mb-4">
            CYBER FAITH
          </div>
          <p className="text-gray-400">
            © 2077 Cyber Faith. Все права защищены квантовым шифрованием.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;