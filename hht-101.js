var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814301/random-pics-301.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814301_random-pics-301.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814302/random-pics-302.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814302_random-pics-302.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814303/random-pics-303.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814303_random-pics-303.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);