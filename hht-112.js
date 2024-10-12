var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814335/random-pics-334.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814335_random-pics-334.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814336/random-pics-335.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814336_random-pics-335.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814337/random-pics-336.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814337_random-pics-336.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);