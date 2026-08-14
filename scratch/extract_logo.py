import os
from PIL import Image

input_path = r"C:\Users\ADMIN\.gemini\antigravity\brain\6f8feeee-72a0-497c-b73e-488ce1c18ab0\.user_uploaded\media_1786694795657.png"
output_path = r"C:\Users\ADMIN\.gemini\antigravity\scratch\srivenkateswara\public\images\sve-brand-logo-pure.png"

img = Image.open(input_path).convert("RGBA")
datas = img.getdata()

newData = []
for item in datas:
    r, g, b, a = item
    # Calculate brightness / gold intensity
    # Gold pixels have significant red/green content compared to pure black background
    brightness = max(r, g, b)
    
    # Smooth thresholding for clean transparent background without dark fringe
    if brightness < 18:
        # Complete black background -> 100% transparent
        newData.append((0, 0, 0, 0))
    elif brightness < 45:
        # Transition edge anti-aliasing
        alpha = int(255 * ((brightness - 18) / 27.0))
        newData.append((r, g, b, alpha))
    else:
        # Full opacity gold emblem
        newData.append((r, g, b, 255))

img.putdata(newData)

# Save high-res PNG with alpha channel
img.save(output_path, "PNG")

# Also copy to all standard logo locations
logo_paths = [
    r"C:\Users\ADMIN\.gemini\antigravity\scratch\srivenkateswara\public\images\logo-new.png",
    r"C:\Users\ADMIN\.gemini\antigravity\scratch\srivenkateswara\public\images\logo.png",
    r"C:\Users\ADMIN\.gemini\antigravity\scratch\srivenkateswara\public\images\sve-brand-logo.png",
    r"C:\Users\ADMIN\.gemini\antigravity\scratch\srivenkateswara\public\images\sve-brand-logo-clean.png"
]

for lp in logo_paths:
    img.save(lp, "PNG")

print("Pure transparent SVE logo successfully generated and saved to all locations!")
