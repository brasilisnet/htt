var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813913/random-pics-058.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813913_random-pics-058.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813915/random-pics-059.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813915_random-pics-059.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813917/random-pics-060.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813917_random-pics-060.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);