var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814142/random-pics-142.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814142_random-pics-142.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814143/random-pics-143.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814143_random-pics-143.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814144/random-pics-144.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814144_random-pics-144.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);