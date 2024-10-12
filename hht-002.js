var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813854/random-pics-004.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813854_random-pics-004.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813855/random-pics-005.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813855_random-pics-005.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813856/random-pics-006.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813856_random-pics-006.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);