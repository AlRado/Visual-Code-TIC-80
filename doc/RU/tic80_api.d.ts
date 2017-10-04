/**
 * Функция опрашивает состояние кнопки подключенной к TIC. Вернет true если кнопка нажата.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/io/btn.html
 * 
 * @param {number} id 
 * @returns {boolean} pressed
 */
declare function btn(id: number): boolean;

/**
 * Эта функция позволяет читать статус одной из кнопок, задействованных в TIC.
 * Функция возвращает значение true только в момент нажатия на клавишу.
 * Она также может быть использована с параметрами hold и period, которые позволяют возвращать true во время нажатия кнопки. После того как время нажатия hold закончится, функция вернет true каждый раз когда закончится время указанного периода period.
 * Время выражается в тиках: при 60 fps это означает, что 120 тиков равны 2 секундам.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/io/btnp.html
 * 
 * @param {number} id 
 * @param {number} [hold] 
 * @param {number} [period] 
 * @returns {boolean} pressed
 */
declare function btnp(id: number, hold?: number, period?: number): boolean;

/**
 * Эта функция ограничивает то, что рисуется на экране параметрами ограничивающего прямоугольника. 
 * Всё что выходит за границы, не будет отображаться на экране.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/screen/clip.html
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} w 
 * @param {number} h 
 */
declare function clip(x: number, y: number, w: number, h: number): void;

/**
 * При вызове этой функции очищается весь экран и заливается цветом указанном в качестве параметра. По умолчанию, используется первый цвет (индекс = 0). 
 * Как правило, вызывается из функции TIC, но это не является обязательным условием. Вы можете сделать какие-нибудь странные эффекты либо мерцающий экран используя её.
 * 
 * Подсказка: используйте индексы цветов свыше 15, чтобы получить специальные заполняющие паттерны.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/screen/cls.html
 * 
 * @param {number} color 
 */
declare function cls(color: number): void;

/**
 * Рисует заполненный цветной круг с центром x и y с указанным радиусом. Используется алгоритм "bresenham".
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/draw/circ.html
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} r 
 * @param {number} color 
 */
declare function circ(x: number, y: number, r: number, color: number): void;

/**
 * Рисует цветную окружность с центром x и y с указанным радиусом. Используется алгоритм "bresenham".
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/draw/circb.html
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} r 
 * @param {number} color 
 */
declare function circb(x: number, y: number, r: number, color: number): void;

/**
 * Данная функция используется для выхода из программы в консоль. Точка выхода находится в конце тела функции TIC.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/others/exit.html
 * 
 */
declare function exit(): void;

/**
 * Печатает текст на экран, используя пользовательский шрифт, заданный в области спрайтов переднего плана (FG).
 * Может печатать многострочный текст - для переноса строки используйте \n.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/text/font.html
 * 
 * @param {string} text 
 * @param {number} [x] 
 * @param {number} [y] 
 * @param {number} [colorkey] 
 * @param {number} [w] 
 * @param {number} [h] 
 * @param {boolean} [fixed] 
 * @param {number} [scale] 
 * 
 * @returns {number} width
 */
declare function font(text: string, x?: number, y?: number, colorkey?: number, w?: number, h?: number, fixed?: boolean, scale?: number): number;

/**
 * Рисует прямую цветную линию начиная с координат (x0,y0) до (x1,y1).
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/draw/line.html
 * 
 * @param {number} x0 
 * @param {number} y0 
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} color 
 */
declare function line(x0: number, y0: number, x1: number, y1: number, color: number): void;

/**
 * Карта измеряется в ячейках, блоки 8x8 пикселей, куда вы можете поставить тайл в редакторе карты тайлов. 
 * Функция может печатать всю карту либо часть её. 
 * Максимальный размер карты ограничен значением 240x136 ячеек. 
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/graphics/map.html
 * 
 * @param {number} [x] 
 * @param {number} [y] 
 * @param {number} [w] 
 * @param {number} [h] 
 * @param {number} [sx] 
 * @param {number} [sy] 
 * @param {number} [colorkey] 
 * @param {number} [scale] 
 * @param {(tile: number) => void} [remap] 
 */
declare function map(x?: number, y?: number, w?: number, h?: number, sx?: number, sy?: number, colorkey?: number, scale?: number, remap?: (tile: number) => void): void;

/**
 * Копирует блок памяти указанного размера из одной области в другую. 
 * Адрес указывается в шестнадцатеричном формате, но возвращаемое значение в десятичном.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/memory/memcpy.html
 * 
 * @param {number} toaddr 
 * @param {number} fromaddr 
 * @param {number} len 
 */
declare function memcpy(toaddr: number, fromaddr: number, len: number): void;

/**
 * Заполняет память указанным значением.
 * Адрес указывается в шестнадцатеричном формате, но возвращаемое значение в десятичном.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/memory/memset.html
 * 
 * @param {number} addr 
 * @param {number} val 
 * @param {number} len 
 */
declare function memset(addr: number, val: number, len: number): void;

/**
 * Считывает индекс тайла по указанным координатам на карте тайлов. 
 * Этот индекс соответствует индексу спрайта, который размещен в спрайт-листе графики заднего плана, индексы 0-255.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/graphics/mget.html
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {number} id
 */
declare function mget(x: number, y: number): number;

/**
 * Функция возвращает координаты мыши и состояние нажатия.
 * Для использования этой функции в метаданных картриджа должно быть прописано -- input: mouse.
 * 
 * Будьте внимательны, включение поддержки мыши отключит джойстики. 
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/io/mouse.html
 * 
 * @returns {[number , number, boolean]} x, y, pressed
 */
declare function mouse(): number[];

/**
 * Устанавливает индекс тайла карты, т.е. индекс спрайта, который размещен в спрайт-листе графики заднего плана, индексы 0-255.
 * По умолчанию внесенные изменения сохраняются только во время текущей игры. Чтобы внести постоянные изменения в карту, см. sync 
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/graphics/mset.html
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} id 
 */
declare function mset(x: number, y: number, id: number): void;

/**
 * Воспроизводит музыкальный трек по указанному индексу трека. Для того чтобы остановить воспроизведение, нужно вызвать эту функцию без аргументов.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/sound/music.html
 * 
 * @param {number} [track] 
 * @param {number} [frame]  
 * @param {number} [row] 
 * @param {boolean} [loop] 
 */
declare function music(track?: number, frame?: number, row?: number, loop?: boolean): void;

/**
 * Эта функция позволяет читать значения памяти TIC - байт.
 * Она удобна для доступа к ресурсам, созданным с помощью интегрированных средств, таких как спрайты, карты, звуки, данные картриджа.
 * 
 * Адрес указывается в шестнадцатеричном формате, но возвращаемое значение в десятичном.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/memory/peek.html
 * 
 * @param {number} addr 
 * @returns {number} val byte
 */
declare function peek(addr: number): number;

/**
 * Эта функция позволяет читать значения памяти TIC - полубайт.
 * Она используется для доступа к ресурсам, созданным с помощью интегрированных средств, таких например как спрайты в спрайт-листе.
 * Адрес указывается в шестнадцатеричном формате, но возвращаемое значение в десятичном.
 * Стоит также отметить, что peek4 и poke4 оперируют полубайтами (4 бита), поэтому адрес умножается на два по отношению к обычным peek и poke, которые оперируют байтами (8 бит).
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/memory/peek4.html
 * 
 * @param {number} addr 
 * @returns {number} val half-byte
 */
declare function peek4(addr: number): number; 

/**
 * Функция рисует цветной пиксель по указанным координатам.
 * Также может использоваться только для получения значения цвета пикселя на экране. * 
 *
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/draw/pix.html
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} [color] 
 * @returns {(number | void)} color
 */
declare function pix(x: number, y: number, color?: number): number | void;

/**
 * Эта функция позволяет сохранять и получать данные одного из 7 доступных слотов в постоянной памяти. 
 * Она полезна, чтобы сохранить таблицу достижений и любого рода продвижения. 
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/memory/pmem.html
 * 
 * @param {number} index 
 * @param {number} [val] 
 * @returns {(number | void)} val
 */
declare function pmem(index: number, val?: number): number | void;

/**
 * Эта функция позволяет записывать значения в память TIC - байт.
 * 
 * Адрес указывается в шестнадцатеричном формате, но возвращаемое значение в десятичном.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/memory/poke.html
 * 
 * @param {number} addr 
 * @param {number} val byte
 */
declare function poke(addr: number, val: number): void;

/**
 * Эта функция позволяет записывать значения в память TIC - полубайт.
 * С её помощью можно, например, записывать значения пикселей в спрайты спрайт-листа.
 * Адрес указывается в шестнадцатеричном формате, значение в десятичном.
 * Стоит также отметить, что peek4 и poke4 оперируют полубайтами (4 бита), поэтому адрес умножается на два по отношению к обычным peek и poke, которые оперируют байтами (8 бит).
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/memory/poke4.html
 * 
 * @param {number} addr 
 * @param {number} val half-byte
 */
declare function poke4(addr: number, val: number): void; 

/**
 * Просто печатает текст на экран, используя системный шрифт, заданный в файле конфигурации.
 * Может печатать многострочный текст - для переноса строки используйте \n.

 * Для печати специально заданным шрифтом, воспользуйтесь оператором font.
 * Для печати в консоль воспользуйтесь оператором trace.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/text/print.html
 * 
 * @param {string} str 
 * @param {number} [x] 
 * @param {number} [y] 
 * @param {number} [color] 
 * @param {boolean} [fixed] 
 * @param {number} [scale] 
 * @returns {number} width 
 */
declare function print(str: string, x?: number, y?: number, color?: number, fixed?: boolean, scale?: number): number;

/**
 * Эта функция рисует цветной заполненный прямоугольник по указанным координатам.
 * Если Вам нужно отрисовать только рамку, используйте функцию rectb
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/draw/rect.html
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} w 
 * @param {number} h 
 * @param {number} color 
 */
declare function rect(x: number, y: number, w: number, h: number, color: number);

/**
 * Эта функция рисует цветную рамку-прямоугольник по указанным координатам.
 * Если Вам нужно отрисовать заполненный цветом прямоугольник, используйте функцию rect
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/draw/rectb.html
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} w 
 * @param {number} h 
 * @param {number} color 
 */
declare function rectb(x: number, y: number, w: number, h: number, color: number);

/**
 * Воспроизводит звуковой эффект по указанному id и параметрам. 
 * 
 * Для того чтобы остановить воспроизведение звукового эффекта, нужно указать id равный -1 в том же канале.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/sound/sfx.html
 * 
 * @param {number} id 
 * @param {(number | string)} [note] 
 * @param {number} [duration] 
 * @param {number} [channel] 
 * @param {number} [volume] 
 * @param {number} [speed] 
 */
declare function sfx(id: number, note?: number | string, duration?: number, channel?: number, volume?: number, speed?: number);

/**
 * Выводит на экран спрайт по указанному индексу в определенные координаты.
 * Вы можете выбрать цвет из палитры, который будет прозрачным. 
 * 
 * Используйте -1 для отсутствия прозрачных пикселей
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/graphics/spr.html
 * 
 * @param {number} id 
 * @param {number} x 
 * @param {number} y 
 * @param {number} [colorkey] 
 * @param {number} [scale] 
 * @param {(number | boolean)} [flip] 
 * @param {number} [rotate] 
 * @param {number} [w] 
 * @param {number} [h] 
 */
declare function spr(id: number, x: number, y: number, colorkey?: number, scale?: number, flip?: number | boolean, rotate?: number, w?: number, h?: number);

/**
 * Данная функция используется для сохранения изменений в спрайтах/карте тайлов во время игры, иначе данные возвращаются к исходному состоянию. 
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/others/sync.html
 * 
 */
declare function sync();

/**
 * Функция возвращает количество миллисекунд прошедших с начала запуска приложения. 
 * Полезно при отслеживании времени, анимации объектов и событиях изменяющихся во времени.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/others/time.html
 * 
 * @returns {number} 
 */
declare function time(): number;

/**
 * Это сервисная функция для отладки кода. Выводит в консоль переданный параметр.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/text/trace.html
 * 
 * @param msg 
 * @param {number} color 
 */
declare function trace(msg: any, color?: number): void;

/**
 * Рисует треугольник заполненный цветом.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/draw/tri.html
 * 
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 * @param {number} x3 
 * @param {number} y3 
 * @param {number} color 
 */
declare function tri(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, color: number): void;

/**
 * TIC это главная функция. Она вызывается с частотой 60 fps (60 раз в секунду).
 * У неё нет параметров и она является местом, в котором и совершается вся магия.
 * Это единственная функция, которая обязательно должна присутствовать в коде.
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/special/tic.html
 * 
 */
declare function TIC(): void;

/**
 * scanline это callback функция, как и главная функция TIC, но вызывается системой после рендера каждой СТРОКИ.
 * Идея в том, что можно менять палитру в этот момент. Т.е. имея 136 строк * 16 цветов получим 2176 цветов, которые можно отобразить за один кадр. 
 * Этот трюк называется "scanline trick" и использовался раньше на приставках, для увеличения количества цветов. 
 * 
 * https://nesbox.gitbooks.io/tic-80-rus/content/api/special/scanline.html
 * 
 * @param {number} line 
 */
declare function scanline(line: number): void;