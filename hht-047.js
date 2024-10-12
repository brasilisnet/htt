var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814139/random-pics-139.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814139_random-pics-139.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814140/random-pics-140.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814140_random-pics-140.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814141/random-pics-141.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814141_random-pics-141.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);