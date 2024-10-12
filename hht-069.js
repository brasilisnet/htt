var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814205/random-pics-205.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814205_random-pics-205.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814206/random-pics-206.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814206_random-pics-206.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814207/random-pics-207.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814207_random-pics-207.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);