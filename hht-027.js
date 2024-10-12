var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814034/random-pics-079.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814034_random-pics-079.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814036/random-pics-080.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814036_random-pics-080.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814038/random-pics-081.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814038_random-pics-081.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);