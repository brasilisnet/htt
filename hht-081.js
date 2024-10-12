var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814241/random-pics-241.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814241_random-pics-241.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814242/random-pics-242.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814242_random-pics-242.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814243/random-pics-243.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814243_random-pics-243.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);