var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814344/random-pics-343.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814344_random-pics-343.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814345/random-pics-344.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814345_random-pics-344.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814346/random-pics-345.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814346_random-pics-345.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);