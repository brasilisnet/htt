var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814029/random-pics-076.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814029_random-pics-076.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814030/random-pics-077.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814030_random-pics-077.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814032/random-pics-078.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814032_random-pics-078.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);