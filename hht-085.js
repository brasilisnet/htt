var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814253/random-pics-253.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814253_random-pics-253.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814254/random-pics-254.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814254_random-pics-254.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814255/random-pics-255.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814255_random-pics-255.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);