var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814289/random-pics-289.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814289_random-pics-289.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814290/random-pics-290.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814290_random-pics-290.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814291/random-pics-291.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814291_random-pics-291.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);