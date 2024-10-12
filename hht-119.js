var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814356/random-pics-355.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814356_random-pics-355.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814357/random-pics-356.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814357_random-pics-356.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814358/random-pics-357.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814358_random-pics-357.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);