var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813924/random-pics-064.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813924_random-pics-064.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813926/random-pics-065.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813926_random-pics-065.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813927/random-pics-066.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813927_random-pics-066.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);