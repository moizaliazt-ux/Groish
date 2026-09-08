from pathlib import Path

path = Path("src/components/AboutGroish.jsx")
text = path.read_text(encoding="utf-8")
old1 = '''				className="groish-photo-shell absolute left-0 top-0 h-[360px] w-[78%] rounded-[1.75rem] border-8 border-white sm:h-[420px]"
				data-variant="c"
				initial={{ opacity: 0, x: -30, y: 18 }}
'''
new1 = '''				className="groish-photo-shell absolute left-0 top-0 h-[360px] w-[78%] rounded-[1.75rem] border-8 border-white sm:h-[420px]"
				data-variant="c"
				style={{ y: imageY }}
				initial={{ opacity: 0, x: -30, y: 18 }}
'''
old2 = '''				className="groish-photo-shell absolute bottom-0 right-0 h-[245px] w-[56%] rounded-[1.75rem] border-8 border-white shadow-[0_24px_80px_rgba(15,23,42,0.15)] sm:h-[290px]"
				data-variant="d"
				initial={{ opacity: 0, x: 30, y: 18 }}
'''
new2 = '''				className="groish-photo-shell absolute bottom-0 right-0 h-[245px] w-[56%] rounded-[1.75rem] border-8 border-white shadow-[0_24px_80px_rgba(15,23,42,0.15)] sm:h-[290px]"
				data-variant="d"
				style={{ y: imageYSecondary }}
				initial={{ opacity: 0, x: 30, y: 18 }}
'''

if old1 not in text:
    raise ValueError('old1 not found in AboutGroish.jsx')
if old2 not in text:
    raise ValueError('old2 not found in AboutGroish.jsx')

text = text.replace(old1, new1).replace(old2, new2)
path.write_text(text, encoding="utf-8")
print('patched AboutGroish.jsx')
