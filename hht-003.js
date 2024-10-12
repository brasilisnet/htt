var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813857/random-pics-007.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813857_random-pics-007.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813858/random-pics-008.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813858_random-pics-008.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813859/random-pics-009.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813859_random-pics-009.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);