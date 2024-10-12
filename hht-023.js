var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814012/random-pics-067.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814012_random-pics-067.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814014/random-pics-068.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814014_random-pics-068.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814016/random-pics-069.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814016_random-pics-069.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);