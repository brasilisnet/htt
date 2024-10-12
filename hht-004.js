var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813860/random-pics-010.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813860_random-pics-010.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813861/random-pics-011.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813861_random-pics-011.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813862/random-pics-012.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813862_random-pics-012.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);