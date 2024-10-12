var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814214/random-pics-214.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814214_random-pics-214.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814215/random-pics-215.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814215_random-pics-215.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814216/random-pics-216.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814216_random-pics-216.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);