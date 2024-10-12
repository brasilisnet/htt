var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813884/random-pics-034.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813884_random-pics-034.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813885/random-pics-035.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813885_random-pics-035.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813886/random-pics-036.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813886_random-pics-036.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);