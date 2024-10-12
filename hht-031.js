var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814056/random-pics-091.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814056_random-pics-091.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814058/random-pics-092.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814058_random-pics-092.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814060/random-pics-093.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814060_random-pics-093.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);