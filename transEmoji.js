function transEmoji(str, pattern){
  if(!pattern){
	  pattern = /\[e\]\s*(.+?)\s*\[\/e\]/gi;
  }
  str = '' +str;
  return str.replace(pattern, '<span class="emoji emoji-$1"></span>').replace(/\[\s*([0-9a-f]+?)\s*\]/gi, '<span class="emoji emoji-$1"></span>');            
}