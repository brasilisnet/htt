var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814145/random-pics-145.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814145_random-pics-145.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814146/random-pics-146.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814146_random-pics-146.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814147/random-pics-147.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814147_random-pics-147.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);