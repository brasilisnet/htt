var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814250/random-pics-250.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814250_random-pics-250.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814251/random-pics-251.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814251_random-pics-251.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814252/random-pics-252.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814252_random-pics-252.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);