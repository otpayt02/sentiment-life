from pathlib import Path

path = Path('index.html')
text = path.read_text(encoding='utf-8')

css_tag = '<link rel="stylesheet" href="./cinematic-v3.css" data-sentiment-cinematic="v3">'
js_tag = '<script src="./cinematic-v3.js" data-sentiment-cinematic="v3"></script>'

changed = False
if css_tag not in text:
    text = text.replace('</head>', f'  {css_tag}\n</head>', 1)
    changed = True
if js_tag not in text:
    text = text.replace('</body>', f'  {js_tag}\n</body>', 1)
    changed = True

if changed:
    path.write_text(text, encoding='utf-8')
    print('Injected Sentiment Life cinematic v3 assets into index.html')
else:
    print('Sentiment Life cinematic v3 assets already present')
