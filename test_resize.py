import os
from PIL import Image

def test_resize():
    img_path = 'public/logo-tp.png'
    if not os.path.exists(img_path):
        print(f"Error: {img_path} not found.")
        return
    img = Image.open(img_path)
    print(f"Original size: {img.size}")
    
    # Save a resized version of the entire original image
    img.resize((512, 512), Image.Resampling.LANCZOS).save('public/logo-test-full.png')
    print("Saved resized entire image to public/logo-test-full.png")

if __name__ == '__main__':
    test_resize()
