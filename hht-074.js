var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814220/random-pics-220.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814220_random-pics-220.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814221/random-pics-221.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814221_random-pics-221.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814222/random-pics-222.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814222_random-pics-222.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);