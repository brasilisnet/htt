var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814196/random-pics-196.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814196_random-pics-196.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814197/random-pics-197.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814197_random-pics-197.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814198/random-pics-198.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814198_random-pics-198.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);