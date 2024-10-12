var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814316/random-pics-316.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814316_random-pics-316.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814317/random-pics-317.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814317_random-pics-317.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814318/random-pics-318.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814318_random-pics-318.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);