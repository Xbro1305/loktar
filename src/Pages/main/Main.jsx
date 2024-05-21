import React from "react";
import "./Main.css";
// import "https://xn--80atcmmk.xn--p1ai/_next/static/css/5cff7d40b5605ce8.css";
// import "https://xn--80atcmmk.xn--p1ai/_next/static/media/7b13109b4b0a718d-s.p.ttf";
// import "https://xn--80atcmmk.xn--p1ai/_next/static/media/e231be0606733bf5-s.p.ttf";

export const Main = () => {
  return (
    <main className="border-l-2 w100 border-l-white ml-20 mt-28 pb-96 relative main-window __className_ab9d8f">
      <div className="absolute -top-16 left-[-3.0625rem] main-logo">
        <svg
          width="98"
          height="44"
          viewBox="0 0 98 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2105_880)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.0005 0L52.4567 3.44514L52.4512 12.762L49.0005 16.2128L45.5498 12.762V3.44514L49.0005 0ZM55.9019 10.352H62.8033L53.1413 20.0084L49.6906 16.5577L55.9019 10.352ZM61.4225 13.1071H68.3239L60.7268 20.6932H53.8309L61.4225 13.1071ZM59.701 34.5071L49 23.8043L38.299 34.5071H31.3976L49 16.9029L66.6024 34.5071H59.701ZM61.4225 37.2676L49 24.8397L36.5775 37.2676H43.4733L49 31.7411L54.5267 37.2676H61.4225ZM61.7675 20.6932H93.169L98 15.8677H66.5985L61.7675 20.6932ZM59.352 26.2198H84.8873L89.7183 21.3888H54.521L59.352 26.2198ZM76.6056 31.7409H64.8732L60.0422 26.91H81.4366L76.6056 31.7409ZM29.6761 13.1071H36.5775L44.1691 20.6932H37.2732L29.6761 13.1071ZM4.83099 20.6932H36.2325L31.4015 15.8677H0L4.83099 20.6932ZM13.1127 26.2198H38.648L43.479 21.3888H8.28169L13.1127 26.2198ZM33.1268 31.7409H21.3944L16.5634 26.91H37.9578L33.1268 31.7409ZM42.0986 10.352H35.1972L44.8591 20.0084L48.3099 16.5577L42.0986 10.352ZM52.4567 36.2325L49.0005 32.7873L45.5498 36.2325V40.0282L49.0005 43.4789L52.4512 40.0282L52.4567 36.2325Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2105_880">
              <rect width="98" height="44" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <section className="slide slide-dark flex flex-col gap-5 relative">
        <img
          alt="compass"
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          dataNimg="fill"
          className="object-contain -z-10"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            color: "transparent",
            zIndex: "999999999",
          }}
          src="https://xn--80atcmmk.xn--p1ai/bg.png"
        />
        <header style={{ zIndex: "999999999" }}>
          <h1 className="uppercase text-2xl">Локтар - это победа</h1>
        </header>
        <p className="w-3/4" style={{ zIndex: "999999999" }}>
          Мы независимая группа гражданских волонтеров с опытом работы в ИТ,
          связи, разработке и развитии цифровых продуктов.
        </p>
      </section>
      <section className="px-28 bg-white text-dark-main grid xl:grid-cols-2 gap-10 second-window">
        <div className="py-48 flex flex-col gap-10">
          <header>
            <h2 className="uppercase text-xl">Локтар - это люди</h2>
          </header>
          <p>
            Наша команда создает технологии и сервисы, которые помогут решить
            наиболее острые фронтовые и гуманитарные проблемы для десятков и
            сотен тысяч людей. Мы вкладываем наши сердца, энергию, труд и
            профессионализм для того, чтобы приблизить нашу общую победу и
            сделать нашу страну и общество сильнее.
          </p>
        </div>
        <div className="relative hidden xl:block">
          <img
            alt="Devs Image"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-contain object-right"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: "0",
              top: "0",
              right: "0",
              bottom: "0",
              color: "transparent",
            }}
            src="/devs.png"
          />
        </div>
      </section>
      <section className="slide slide-dark flex flex-col gap-20">
        <header>
          <h2 className="uppercase text-xl">
            Локтар - это Свобода, Открытость и Честность
          </h2>
        </header>
        <div className="grid grid-cols-2 gap-x-10 gap-y-20">
          <p>У нас нет кураторов, владельцев или руководителей</p>
          <p>У нас нет бюрократии и процедур, все решения принимает команда</p>
          <p>
            Мы движемся к результату быстрыми и ритмичными шагами, от простого к
            сложному
          </p>
          <p>
            Мы максимально открыты к сотрудничеству, партнерству, обмену
            мнениями и опытом
          </p>
          <p>
            Мы напрямую общаемся с пользователями наших сервисов, слушаем и
            учитываем их идеи и мнения, чтобы создавать полезные и нужные
            решения
          </p>
          <p>
            Мы берем лучшие гражданские практики и стандарты и переосмысливаем
            их для помощи тем, кто защищает нашу страну
          </p>
        </div>
        <p className="border-2 border-white flex p-10">
          Мы не являемся коммерческой организацией. Наша команда растет и
          развивается за счет взносов основателей и небезразличных людей,
          которые разделяют наши ценности и стремления.
        </p>
      </section>
      <section className="slide slide-light flex flex-col gap-20">
        <header>
          <h2 className="uppercase text-xl">Локтар - это будущее</h2>
        </header>
        <p>
          Объединив тех, кто готов приносить пользу Родине и кому не все равно,
          мы создаем такую движущую силу, которая может изменить многое. Вместе
          мы способны преодолеть любые препятствия и сложности и добиться
          впечатляющего результата. А другие, глядя на нас, последуют нашему
          примеру и внесут свой вклад в развитие потенциала и эффективности
          нашей Страны.
        </p>
      </section>
      <section className="slide slide-dark flex flex-col gap-20">
        <header>
          <h2 className="uppercase text-xl">Локтар - это Ты</h2>
        </header>
        <div className="border-2 border-white flex p-10 gap-5 items-center">
          <p>
            Если у тебя или твоей команды есть интересные идеи и наработки, мы
            готовы тебя выслушать, помочь и обсудить варианты сотрудничества.
          </p>
          <a
            className="bg-white text-dark-main flex gap-3 items-center py-3 px-4 leading-none flex-shrink-0 link-next"
            referrerPolicy="no-referrer"
            href="https://t.me/loctar_bot"
          >
            <span>Написать нам</span>
            <svg
              width="20"
              height="13"
              viewBox="10 10 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block"
            >
              <mask
                id="mask0_2209_1104"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <rect width="40" height="40" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_2209_1104)">
                <path
                  d="M10.083 31.6668L18.4163 20.0002L10.083 8.3335H14.1663L22.4997 20.0002L14.1663 31.6668H10.083ZM19.9997 31.6668L28.333 20.0002L19.9997 8.3335H24.083L32.4163 20.0002L24.083 31.6668H19.9997Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-20">
          <p className="bg-white text-dark-main p-10">
            Решения для обеспечения устойчивой и дешевой связью
          </p>
          <p className="bg-white text-dark-main p-10">
            Сервисы для цифрового обмена информацией и повышения эффективности
          </p>
          <p className="bg-white text-dark-main p-10">
            Инструменты для сбора, структурирования, анализа и интерпретации
            информации из открытых источников
          </p>
          <p className="bg-white text-dark-main p-10">
            Сервисы по автоматическому выявлению объектов и событий на основе
            аудио, фото и видео информации
          </p>
          <p className="bg-white text-dark-main p-10">
            Мобильные комплексы для анализа спектра, детектирования и подавления
            радиоизлучения
          </p>
          <p className="bg-white text-dark-main p-10">
            Проектирование и разработка БПЛА (программная и аппаратная часть)
          </p>
          <p className="bg-white text-dark-main p-10">
            Информационно-справочные сервисы для решения гуманитарных задач и
            бытовых проблем
          </p>
        </div>
      </section>
      <section className="slide slide-light flex flex-col gap-20">
        <header>
          <h2 className="uppercase text-xl">Кого мы ищем</h2>
        </header>
        <ul className="list-disc list-inside list-employees">
          <li>
            Разработчиков различной специализации - Embedded, Backend, Frontend,
            DevOps
          </li>
          <li>Data Science, ML/AI и CV специалистов</li>
          <li>Конструкторов, инженеров, роботехников, авиамоделистов</li>
          <li>UI/UX специалистов и дизайнеров</li>
          <li>Специалистов по связи, радиосвязи и коммуникационным сетям</li>
          <li>Разработчиков электроники и новых устройств</li>
          <li>Менеджеров продуктов, проектов и производств</li>
        </ul>
        <div className="border-2 border-dark-main flex p-10 gap-5 items-center">
          <p>
            Пишите нам, если вы уверены в том, что вы нам нужны, а мы не
            осознаем потребность в вашей уникальной специализации и опыте
          </p>
          <a
            className="bg-dark-main text-white flex gap-3 items-center py-3 px-4 leading-none flex-shrink-0 link-next"
            referrerPolicy="no-referrer"
            href="https://t.me/loctar_bot"
          >
            <span>Написать нам</span>
            <svg
              width="20"
              height="13"
              viewBox="10 10 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block"
            >
              <mask
                id="mask0_2209_1104"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <rect width="40" height="40" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_2209_1104)">
                <path
                  d="M10.083 31.6668L18.4163 20.0002L10.083 8.3335H14.1663L22.4997 20.0002L14.1663 31.6668H10.083ZM19.9997 31.6668L28.333 20.0002L19.9997 8.3335H24.083L32.4163 20.0002L24.083 31.6668H19.9997Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
};
