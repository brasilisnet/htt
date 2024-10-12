var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814232/random-pics-232.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814232_random-pics-232.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814233/random-pics-233.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814233_random-pics-233.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814234/random-pics-234.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814234_random-pics-234.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);