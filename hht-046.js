var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814136/random-pics-136.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814136_random-pics-136.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814137/random-pics-137.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814137_random-pics-137.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814138/random-pics-138.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814138_random-pics-138.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);