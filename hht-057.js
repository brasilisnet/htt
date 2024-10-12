var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814169/random-pics-169.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814169_random-pics-169.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814170/random-pics-170.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814170_random-pics-170.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814171/random-pics-171.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814171_random-pics-171.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);