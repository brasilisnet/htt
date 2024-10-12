var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814166/random-pics-166.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814166_random-pics-166.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814167/random-pics-167.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814167_random-pics-167.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814168/random-pics-168.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814168_random-pics-168.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);