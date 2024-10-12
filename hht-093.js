var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814277/random-pics-277.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814277_random-pics-277.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814278/random-pics-278.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814278_random-pics-278.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814279/random-pics-279.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814279_random-pics-279.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);