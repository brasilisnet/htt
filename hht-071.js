var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814211/random-pics-211.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814211_random-pics-211.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814212/random-pics-212.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814212_random-pics-212.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814213/random-pics-213.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814213_random-pics-213.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);