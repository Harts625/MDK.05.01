import { title } from 'process';
import React from 'react';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-white font-sans text-gray-poo'>
      <title>BOXPACK</title>
      <header className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold tracking-wider text-slate-900'>
          BOXPACK
        </div>
        <nav className='hidden md:flex space-x-6 text-sm text-gray-600'>
          <a href="#" className='hover: text-slate-900'>Услуги</a>
          <a href="#" className='hover: text-slate-900'>Как это работает</a>
          <a href="#" className='hover: text-slate-900'>Видеофиксация</a>
          <a href="#" className='hover: text-slate-900'>Калькулятор</a>
          <a href="#" className='hover: text-slate-900'>Кейсы</a>
          <a href="#" className='hover: text-slate-900'>Контакты</a>
        </nav>
      </header>

      <section className='bg-[#1a2342] text-white py-16 md:py-24'>
        <div className='max-w-7x1 mx-auto px-4 grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <p className='text-sm text-gray-300 mb-4'>Автоматизированный фулфилмент</p>
            <h1 className='text-4x1 md:text-5x1 font-bold leading-tight mb-6'>
              Фулфилмент, <br />
              который держит <br />
              сроки и репутацию
            </h1>
            <p className='text-gray-300 mb-8 max-w-lg'>
              Автоматизированная упаковка, видеоконтроль каждого заказа и отправка в день поступления. Мы берём на себя хранение, сборку, маркировку и логистику.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mb-12'>
              <button className='bg-transparent border border-white hover:bg-white hover:text-slate-900 text-white px-6 py-3 rounded-mb transition font-medium'>
                Расчитать стоимость
              </button>
              <button className='bg-transparent border border-white hover:bg-white hover:text-slate-900 text-white px-6 py-3 rounded-mb transition font-medium'>
                Получить видеозапись
              </button>
            </div>
            <div className='flex flex-wrap gap-4'>
              <div className='bg-white/10 p-4 rounded-lg backdrop-blur-sm'>
                <div className='font-bold text-xl'>5000+</div>
                <div className='textt-xs text-gray-300'>точность сборки</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
