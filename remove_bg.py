from PIL import Image, ImageOps

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    # Using a threshold to catch near-white pixels (anti-aliasing)
    threshold = 240 
    
    for item in datas:
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            new_data.append((255, 255, 255, 0)) # Fully transparent
        else:
            new_data.append(item)

    img.putdata(new_data)
    
    # Optional: Trim extra whitespace around the logo
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")

if __name__ == "__main__":
    input_file = r"C:\Users\MSII\.gemini\antigravity\brain\477dcbe0-53fd-4db0-a595-33e3c6837734\input_file_0.png"
    output_file = "logo_processed.png"
    remove_background(input_file, output_file)
    print(f"Processed image saved to {output_file}")
