var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814061/random-pics-094.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814061_random-pics-094.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814063/random-pics-095.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814063_random-pics-095.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814065/random-pics-096.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814065_random-pics-096.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);