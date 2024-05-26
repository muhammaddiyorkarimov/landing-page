// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        translation: {
          "carouselTitle": "Biz bilan o'z biznesingni rivojlantiring.",
          "carouselDescription": "Har qanday biznesni Avtomatlashtiramiz! 7 kunda tizimni o'rnatib, xodimlaringizni tayyorlab beramiz +365 kunlik support (video materiallar orqali).",
          "aboutUsTitle": "Biz haqimizda",
          "loading": "Yuklanmoqda...",
          "error": "Xatolik",
					"ourPartners": "Bizning hamkorlar",
          "home": "Asosiy",
          "aboutUs": "Biz haqimizda",
          "partners": "Hamkorlar",
          "services": "Xizmatlar",
          "ourTeam": "Bizning jamoa",
          "contact": "Aloqa",
          "socialMedia": "Ijtimoiy tarmoqlarimiz",
          "address": "Toshkent shahar, Yakkasaroy tumani, Rakatboshi mahallasi, O'rikzor ko'chasi 7-uy, Rakatboshi Biznes Center 202-xona",
          "ourServices": "Bizning xizmatlarimiz",
          "ourTeams": "Bizning jamoa",
          "contactUs": "Biz bilan bog'laning",
          "answerAllQuestions": "Barcha savollaringizga javob beramiz",
          "happyToAssist": "va hal qilishga yordam beramiz. Siz bilan hamkorlik qilganimizdan mamnunmiz!",
          "online": "Online",
          "workingHours": "Ish vaqti: 09:00 - 18:00",
          "excludingWeekends": "(dam olish kunlari bundan mustasno)",
          "name": "Ism",
          "phoneNumber": "Telefon raqam",
          "description": "Ta'rif",
          "submit": "Yuborish",
          "nameRequired": "Ism kiritilishi kerak",
          "phoneNumberRequired": "Telefon raqam kiritilishi kerak",
          "descriptionRequired": "Ta'rif kiritilishi kerak",
          "submissionSuccess": "Ma'lumotlar muvaffaqiyatli yuborildi!",
          "submissionError": "Xatolik yuz berdi"
        }
      },
      ru: {
        translation: {
          "carouselTitle": "Развивайте свой бизнес с нами.",
          "carouselDescription": "Автоматизируем любой бизнес! Установим систему за 7 дней, подготовим ваших сотрудников + 365 дней поддержки (через видеоматериалы).",
          "aboutUsTitle": "О нас",
          "loading": "Загрузка...",
          "error": "Ошибка",
					"ourPartners": "Наши партнеры",
          "home": "Главная",
          "aboutUs": "О нас",
          "partners": "Партнёры",
          "services": "Услуги",
          "ourTeam": "Наша команда",
          "contact": "Контакты",
          "socialMedia": "Наши социальные сети",
          "address": "г. Ташкент, Яккасарайский район, махалля Ракатбоши, улица Орикзор, дом 7, бизнес-центр Ракатбоши, офис 202",
          "ourServices": "Наши услуги",
          "ourTeams": "Наша команда",
          "contactUs": "Связаться с нами",
          "answerAllQuestions": "Ответим на все ваши вопросы",
          "happyToAssist": "и поможем решить. Мы рады сотрудничеству с вами!",
          "online": "Онлайн",
          "workingHours": "Часы работы: 09:00 - 18:00",
          "excludingWeekends": "(кроме выходных)",
          "name": "Имя",
          "phoneNumber": "Номер телефона",
          "description": "Описание",
          "submit": "Отправить",
          "nameRequired": "Имя обязательно для заполнения",
          "phoneNumberRequired": "Номер телефона обязателен для заполнения",
          "descriptionRequired": "Описание обязательно для заполнения",
          "submissionSuccess": "Данные успешно отправлены!",
          "submissionError": "Произошла ошибка"
        }
      }
    },
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
