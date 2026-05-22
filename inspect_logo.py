import os
from PIL import Image

def inspect():
    img_path = 'public/logo-tp.png'
    if not os.path.exists(img_path):
        print("Logo not found in public/")
        return
    img = Image.open(img_path)
    print(f"Format: {img.format}, Size: {img.size}, Mode: {img.mode}")
    # Inspect top-left pixel
    tl = img.getpixel((10, 10))
    print(f"Top-left pixel color: {tl}")
    # Inspect center pixel
    center = img.getpixel((img.size[0]//2, img.size[1]//2))
    print(f"Center pixel color: {center}")

if __name__ == '__main__':
    inspect()
