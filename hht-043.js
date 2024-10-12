var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814124/random-pics-127.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814124_random-pics-127.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814126/random-pics-128.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814126_random-pics-128.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814128/random-pics-129.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814128_random-pics-129.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);