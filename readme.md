* ТЕХНИЧЕСКИЕ ТРЕБОВАНИЯ

+ Книжный магазин должен быть реализован по принципу SPA.
То есть все действия пользователя: подгрузка книг, переключение категории — происходят без перезагрузки страницы.

+ JS-файлы в проекте должны быть разделены на модули (ES6), структура файлов должна быть логичной и понятной.

+ Для создания проекта необходимо использовать npm. В папке проекта должны быть файлы package.json и package-lock.json. В package.json необходимо прописать скрипт npm run build, который будет запускать сборку проекта.

В проекте необходимо использовать ещё как минимум 2 инструмента оптимизации разработки (помимо npm и Webpack), которые вы прошли в предыдущих модулях. Вы можете выбрать любые из списка:
+ методология БЭМ;
+ CSS-препроцессор Sass (или аналог);
Шаблонизатор pug или аналог;
+ Webpack Dev Server;
+ Линтер.

+ К проекту необходимо подключить Webpack.
Если запустить сборку проекта, ожидается следующий результат:
+ сборка завершается успешно и без ошибок;
+ CSS-файлы также является частью сборки;
+ CSS подключается отдельным файлом, не в теге <style>;
+ JS и CSS-файлы минифицируются в процессе сборки.