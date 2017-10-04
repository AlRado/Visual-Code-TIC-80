/**
 * This function allow to read the status of one of the buttons attached to TIC. The function return true when the key interrogated using its id, is pressed.
 * 
 * https://github.com/nesbox/TIC-80/wiki/btn
 * 
 * @param {number} id 
 * @returns {boolean} pressed
 */
declare function btn(id: number): boolean;

/**
 * This function allow to read the status of one of the buttons attached to TIC. The function return true value only in the moment the key is pressed.
 * It can also be used with hold and period parameters that allow to return true keeping the key pressed. After the hold time is elapsed the function return true every time period is passed.
 * Time is expressed in ticks: at 60 fps it means you need to use 120 to wait 2 seconds.
 * 
 * https://github.com/nesbox/TIC-80/wiki/btnp
 * 
 * @param {number} id 
 * @param {number} [hold] 
 * @param {number} [period] 
 * @returns {boolean} pressed
 */
declare function btnp(id: number, hold?: number, period?: number): boolean;

/**
 * This function will limit what is drawn to the screen by x,y,w,h. Things drawn outside of the parameters will not be drawn to the screen.
 * Calling clip() with no parameters will reset the draw area.
 * 
 * https://github.com/nesbox/TIC-80/wiki/clip
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} w 
 * @param {number} h 
 */
declare function clip(x: number, y: number, w: number, h: number): void;

/**
 * When called this function clear all the screen using the color passed as argument.
 * If no parameter is passed first color (0) is used.
 * Usually is called inside TIC() function, but it's not mandatory. You can make some strange effect by avoid calling it, or use it to "flash" the screen when some events occur.
 * 
 * Tips: Use a color over 15 to see some special fill pattern
 * 
 * https://github.com/nesbox/TIC-80/wiki/cls
 * 
 * @param {number} color 
 */
declare function cls(color: number): void;

/**
 * It draw a filled circle with center x and y of the radius requested. It use bresenham algorithm.
 * 
 * https://github.com/nesbox/TIC-80/wiki/circ
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} r 
 * @param {number} color 
 */
declare function circ(x: number, y: number, r: number, color: number): void;

/**
 * It draw a circumference with center x and y of the radius requested. It use bresenham algorithm.
 * 
 * https://github.com/nesbox/TIC-80/wiki/circb
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} r 
 * @param {number} color 
 */
declare function circb(x: number, y: number, r: number, color: number): void;

/**
 * Interrupt program execution and return to the console at the END of the TIC function.
 * 
 * https://github.com/nesbox/TIC-80/wiki/exit
 * 
 */
declare function exit(): void;

/**
 * This function will draw text to the screen using part of the spritesheet as the font.
 * 
 * https://github.com/nesbox/TIC-80/wiki/font
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
 * It draw a straight colored line from (x0,y0) point to (x1,y1) point.
 * 
 * https://github.com/nesbox/TIC-80/wiki/line
 * 
 * @param {number} x0 
 * @param {number} y0 
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} color 
 */
declare function line(x0: number, y0: number, x1: number, y1: number, color: number): void;

/**
 * The map is measured in cells, 8x8 blocks where you can place sprites in the map editor. This function will draw the entire map, or parts of it. The map's cell limit is 240x136.
 * 
 * https://github.com/nesbox/TIC-80/wiki/map
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
 * This function allow to copy a continuous block of the RAM memory of TIC to an another address. Address are in hexadecimal format, values are decimal.
 * 
 * https://github.com/nesbox/TIC-80/wiki/memcpy
 * 
 * @param {number} toaddr 
 * @param {number} fromaddr 
 * @param {number} len 
 */
declare function memcpy(toaddr: number, fromaddr: number, len: number): void;

/**
 * This function allow to write a continuous block of the same value to the RAM memory of TIC. Address are in hexadecimal format, values are decimal.
 * 
 * https://github.com/nesbox/TIC-80/wiki/memset
 * 
 * @param {number} addr 
 * @param {number} val 
 * @param {number} len 
 */
declare function memset(addr: number, val: number, len: number): void;

/**
 * This function returns the sprite id at the given x and y map coordinate
 * 
 * https://github.com/nesbox/TIC-80/wiki/mget
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {number} id
 */
declare function mget(x: number, y: number): number;

/**
 * This function returns mouse coordinates and pressed state. For use this function you need to set cartridge metadata input to mouse. Be careful, activating mouse support will turn off the gamepad.
 * 
 * https://github.com/nesbox/TIC-80/wiki/mouse
 * 
 * @returns {[number , number, boolean]} x, y, pressed
 */
declare function mouse(): number[];

/**
 * This function will change the sprite in map as specified coordinates. By default, changes made are only kept while the current game is running. To make permanent changes to the map, see sync.
 * 
 * https://github.com/nesbox/TIC-80/wiki/mset
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} id 
 */
declare function mset(x: number, y: number, id: number): void;

/**
 * It starts playing the track created in the Music Editor. Call without arguments to stop the music.
 * 
 * https://github.com/nesbox/TIC-80/wiki/music
 * 
 * @param {number} [track] 
 * @param {number} [frame]  
 * @param {number} [row] 
 * @param {boolean} [loop] 
 */
declare function music(track?: number, frame?: number, row?: number, loop?: boolean): void;

/**
 * This function allow to read the memory from TIC.
 * It's useful to access resources created with the integrated tools like sprite, maps, sounds, cartridges data? Never dream to sound a sprite?
 * 
 * Address are in hexadecimal format but values are decimal.
 * 
 * https://github.com/nesbox/TIC-80/wiki/peek
 * 
 * @param {number} addr 
 * @returns {number} val byte
 */
declare function peek(addr: number): number;

/**
 * Read a half byte value from RAM
 * 
 * https://github.com/nesbox/TIC-80/wiki/peek4
 * 
 * @param {number} addr 
 * @returns {number} val half-byte
 */
declare function peek4(addr: number): number; 

/**
 * This function color a pixel at the coordinates specified. The function can be used also to interrogate the color of a pixel in the screen.
 * 
 * https://github.com/nesbox/TIC-80/wiki/pix
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} [color] 
 * @returns {(number | void)} color
 */
declare function pix(x: number, y: number, color?: number): number | void;

/**
 * This function allow to save and retrieve data in one of the 7 slots available in the persistent memory.
 * This is useful to save high-score and any sort of advancement.
 * FYI pmem read 4 bytes(32 bit) at time. For small data, you can read with peek or write with poke 8bit at time pointing the correct registers in RAM.
 * 
 * https://github.com/nesbox/TIC-80/wiki/pmem
 * 
 * @param {number} index 
 * @param {number} [val] 
 * @returns {(number | void)} val
 */
declare function pmem(index: number, val?: number): number | void;

/**
 * This function allows you to write to the virtual RAM of TIC.
 * The address should be specified in hexadecimal format, and values should be given in decimal.
 * 
 * https://github.com/nesbox/TIC-80/wiki/poke
 * 
 * @param {number} addr 
 * @param {number} val byte
 */
declare function poke(addr: number, val: number): void;

/**
 * Write a half byte value to RAM
 * 
 * https://github.com/nesbox/TIC-80/wiki/poke4
 * 
 * @param {number} addr 
 * @param {number} val half-byte
 */
declare function poke4(addr: number, val: number): void; 

/**
 * This will simply print text to the screen using the font defined in config.
 * 
 * https://github.com/nesbox/TIC-80/wiki/print
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
 * This function draw a colored filled rectangle at the position request. If you need to draw only the border see rectb
 * 
 * https://github.com/nesbox/TIC-80/wiki/rect
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} w 
 * @param {number} h 
 * @param {number} color 
 */
declare function rect(x: number, y: number, w: number, h: number, color: number);

/**
 * This function draw a rectangle border of one pixel size at the position request. If you need to fill the rectangle with a color see rect instead.
 * 
 * https://github.com/nesbox/TIC-80/wiki/rectb
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} w 
 * @param {number} h 
 * @param {number} color 
 */
declare function rectb(x: number, y: number, w: number, h: number, color: number);

/**
 * This function will play a sound from the sfx editor.
 * 
 * https://github.com/nesbox/TIC-80/wiki/sfx
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
 * It will put the sprite number index in the x and y coordinate.
 * You can specify a colorkey in the palette that will be used as transparent color. Use -1 to have an opaque sprite.
 * The sprite can be scaled up by a desired factor. As example: a scale of 2 means the sprite is draw in the screen as 16x16 pixel
 * 
 * https://github.com/nesbox/TIC-80/wiki/spr
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
 * Sprite/map data restores on every startup. Call sync() api to save sprite/map data modified during runtime.
 * 
 * https://github.com/nesbox/TIC-80/wiki/sync
 * 
 */
declare function sync();

/**
 * The function return elapsed time from the start of the cartridge expressed in milliseconds. Useful to take track of the time, animate items and rise events.
 * 
 * https://github.com/nesbox/TIC-80/wiki/time
 * 
 * @returns {number} 
 */
declare function time(): number;

/**
 * This is a service function useful to debug your code. It will print back in the console the parameter passed.
 * 
 * https://github.com/nesbox/TIC-80/wiki/trace
 * 
 * @param msg 
 * @param {number} color 
 */
declare function trace(msg: any, color?: number): void;

/**
 * It draw a triangle filled with color
 * 
 * https://github.com/nesbox/TIC-80/wiki/tri
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
 * TIC is the main function. It's call at 60 fps (60 times every second).
 * It has no parameters and is the core where all the magic happens.
 * 
 * https://github.com/nesbox/TIC-80/wiki/tic
 * 
 */
declare function TIC(): void;

/**
 * scanline() is called on every line render and allows you to execute some code between each line, like for scanline color trick
 * 
 * https://github.com/nesbox/TIC-80/wiki/scanline
 * 
 * @param {number} line 
 */
declare function scanline(line: number): void;