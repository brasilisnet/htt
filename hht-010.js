var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813878/random-pics-028.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813878_random-pics-028.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813879/random-pics-029.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813879_random-pics-029.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813880/random-pics-030.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813880_random-pics-030.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);