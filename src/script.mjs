import fs from 'fs';
import path from 'path';

const dir = './src';

const walk = (directory) => {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach(file => {
    file = path.join(directory, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
};

const files = walk(dir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Backgrounds
  content = content.replace(/className="([^"]*?)bg-\[#0A0A0A\]([^"]*?)"/g, 'className="$1bg-[#F7F7F7] dark:bg-[#0A0A0A]$2"');
  content = content.replace(/className="([^"]*?)bg-\[#050505\]([^"]*?)"/g, 'className="$1bg-white dark:bg-[#050505]$2"');
  content = content.replace(/className="([^"]*?)bg-zinc-900([^"]*?)"/g, 'className="$1bg-[#F0F0F0] dark:bg-zinc-900$2"');
  content = content.replace(/className="([^"]*?)bg-zinc-950([^"]*?)"/g, 'className="$1bg-[#EFEFEF] dark:bg-zinc-950$2"');

  // Text
  // Avoid replacing text-white on red backgrounds (like bg-[#E63946] button)
  content = content.replace(/className="(?![^"]*bg-\[#E63946\])([^"]*?)text-white([^"]*?)"/g, 'className="$1text-[#111111] dark:text-white$2"');
  content = content.replace(/className="([^"]*?)text-zinc-200([^"]*?)"/g, 'className="$1text-[#333333] dark:text-zinc-200$2"');
  content = content.replace(/className="([^"]*?)text-zinc-300([^"]*?)"/g, 'className="$1text-[#444444] dark:text-zinc-300$2"');
  content = content.replace(/className="([^"]*?)text-zinc-400([^"]*?)"/g, 'className="$1text-[#555555] dark:text-zinc-400$2"');
  content = content.replace(/className="([^"]*?)text-zinc-500([^"]*?)"/g, 'className="$1text-[#777777] dark:text-zinc-500$2"');

  // Specific App.tsx root replacement
  content = content.replace(/bg-\[#0A0A0A\] text-\[#E5E5E5\]/g, 'bg-[#FFFFFF] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#E5E5E5]');

  // Borders
  content = content.replace(/className="([^"]*?)border-white\/5([^"]*?)"/g, 'className="$1border-[#E0E0E0] dark:border-white/5$2"');
  content = content.replace(/className="([^"]*?)border-white\/10([^"]*?)"/g, 'className="$1border-[#D0D0D0] dark:border-white/10$2"');
  content = content.replace(/className="([^"]*?)border-white\/20([^"]*?)"/g, 'className="$1border-[#C0C0C0] dark:border-white/20$2"');
  content = content.replace(/className="([^"]*?)border-white\/30([^"]*?)"/g, 'className="$1border-[#B0B0B0] dark:border-white/30$2"');

  // Overlay bg
  content = content.replace(/className="([^"]*?)bg-white\/5([^"]*?)"/g, 'className="$1bg-black/5 dark:bg-white/5$2"');
  content = content.replace(/className="([^"]*?)bg-white\/10([^"]*?)"/g, 'className="$1bg-black/10 dark:bg-white/10$2"');
  content = content.replace(/className="([^"]*?)bg-black\/30([^"]*?)"/g, 'className="$1bg-white/30 dark:bg-black/30$2"');
  content = content.replace(/className="([^"]*?)bg-black\/80([^"]*?)"/g, 'className="$1bg-white/80 dark:bg-black/80$2"');

  // Gradients
  content = content.replace(/from-\[#0A0A0A\]/g, 'from-[#F7F7F7] dark:from-[#0A0A0A]');
  content = content.replace(/via-\[#0A0A0A\](\/\d+)?/g, 'via-[#F7F7F7]$1 dark:via-[#0A0A0A]$1');

  fs.writeFileSync(file, content, 'utf8');
});

console.log('mapped successfully');
