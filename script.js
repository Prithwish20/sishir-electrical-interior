const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(file => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (file.endsWith('.tsx')) results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

walk('./src', (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Backgrounds
    content = content.replace(/bg-\[#0A0A0A\]/g, 'bg-white dark:bg-[#0A0A0A]');
    content = content.replace(/bg-\[#050505\]/g, 'bg-[#F7F7F7] dark:bg-[#050505]');
    content = content.replace(/bg-zinc-900/g, 'bg-[#EFEFEF] dark:bg-zinc-900');
    content = content.replace(/bg-zinc-950/g, 'bg-[#F7F7F7] dark:bg-zinc-950');
    
    // Gradients
    content = content.replace(/from-\[#0A0A0A\]/g, 'from-white dark:from-[#0A0A0A]');
    content = content.replace(/via-\[#0A0A0A\]\//g, 'via-white/ dark:via-[#0A0A0A]/'); 

    // Text
    content = content.replace(/text-white/g, 'text-[#111111] dark:text-white');
    content = content.replace(/text-zinc-200/g, 'text-[#333333] dark:text-zinc-200');
    content = content.replace(/text-zinc-300/g, 'text-[#555555] dark:text-zinc-300');
    content = content.replace(/text-zinc-400/g, 'text-[#666666] dark:text-zinc-400');
    content = content.replace(/text-zinc-500/g, 'text-[#888888] dark:text-zinc-500');

    // App text wrapper
    content = content.replace(/text-\[#E5E5E5\]/g, 'text-[#111111] dark:text-[#E5E5E5]');

    // Border
    content = content.replace(/border-white\/5/g, 'border-[#E0E0E0] dark:border-white/5');
    content = content.replace(/border-white\/10/g, 'border-[#E0E0E0] dark:border-white/10');
    content = content.replace(/border-white\/20/g, 'border-[#D0D0D0] dark:border-white/20');
    content = content.replace(/border-white\/30/g, 'border-[#C0C0C0] dark:border-white/30');

    // Overlay bgs
    content = content.replace(/bg-white\/5 /g, 'bg-[#F7F7F7] dark:bg-white/5 ');
    content = content.replace(/bg-white\/5\"/g, 'bg-[#F7F7F7] dark:bg-white/5"');
    content = content.replace(/bg-white\/10 /g, 'bg-[#EFEFEF] dark:bg-white/10 ');
    
    // Misc
    content = content.replace(/bg-black\/80/g, 'bg-white/80 dark:bg-black/80');
    content = content.replace(/bg-black\/30/g, 'bg-white/30 dark:bg-black/30');
    content = content.replace(/bg-black/g, 'bg-[#F7F7F7] dark:bg-black');

    fs.writeFileSync(file, content, 'utf8');
  });
  console.log('Done mapping classes!');
});
