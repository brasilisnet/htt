var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814094/random-pics-112.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814094_random-pics-112.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814096/random-pics-113.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814096_random-pics-113.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814098/random-pics-114.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814098_random-pics-114.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);