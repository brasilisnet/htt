var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814100/random-pics-115.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814100_random-pics-115.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814102/random-pics-116.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814102_random-pics-116.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814104/random-pics-117.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814104_random-pics-117.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);